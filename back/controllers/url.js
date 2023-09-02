const shortid = require('shortid');
const URL = require('../module/url'); // Assuming you have a URL model defined

async function handleGenerateShortUrl(req, res) {
    try {
        const shortUrl = shortid.generate(); // Use shortid.generate() instead of shortid()
        const urlRecord = await URL.create({
            shortId: shortUrl,
            redirectUrl: Url,
            visitedHistory: []
        });
        
        return res.json({
            id: urlRecord.shortId
        });
    } catch (error) {
        return res.status(500).json({ 'Error': 'Internal server error.' });
    }
}

module.exports = {
    handleGenerateShortUrl,
};
