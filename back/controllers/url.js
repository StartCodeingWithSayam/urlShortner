const shortid = require('shortid');
const URL = require('../module/url'); // Assuming you have a URL model defined

async function handleGenerateShortUrl(req, res) {
    try {
        const shortUrl = shortid.generate(); // Use shortid.generate() instead of shortid()
        const { Url } = req.body;
        const urlRecord = await URL.create({
            shortId: shortUrl,
            redirectUrl: Url,
            visitedHistory: []
        });
        
        return res.json({
            id: urlRecord.shortId
        });
    } catch (error) {
        return res.status(400).json({ 'Error': 'Url is requird.' });
    }
}

module.exports = {
    handleGenerateShortUrl,
};
