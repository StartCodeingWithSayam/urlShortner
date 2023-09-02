const shortid = require("shortid");
const URL = require("../module/url"); // Assuming you have a URL model defined

async function handleGenerateShortUrl(req, res) {
  try {
    const shortUrl = shortid.generate(); // Use shortid.generate() instead of shortid()
    const { Url } = req.body;
    const urlRecord = await URL.create({
      shortId: shortUrl,
      redirectUrl: Url,
      visitedHistory: [],
    });

    return res.json({
      id: urlRecord.shortId,
    });
  } catch (error) {
    return res.status(400).json({ Error: "Url is requird." });
  }
}
async function handleGetShortUrl(req, res) {
  const shortId = req.params.shortId;

  try {
    const urlRecord = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
            visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    return res.redirect(urlRecord.redirectUrl);
  } catch (error) {
    return res.status(404).json({ Error: "Url not Found" });
  }
}
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  try {
    const urlRecord = await URL.findOne({ shortId });

    return res.json({
      totalClicks: urlRecord.visitHistory.length,
      analytics: urlRecord.visitHistory,
    });
  } catch (error) {
    return res.status(404).json({ Error: "Url not Found" });
  }
}

module.exports = {
  handleGenerateShortUrl,
  handleGetShortUrl,
  handleGetAnalytics,
};
