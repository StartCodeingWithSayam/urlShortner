const shortid = require('shortid');
const URL = require('../module/url')
async function handleGenerateShortUrl(req,res){
    const shortUrl = shortid();
    const body = req.body;
    if(!body.Url) return res.status(400).json({'Error':'Url is required.'})
    await URL.create({
        shortId :shortUrl,
        redirectUrl:body.Url,
        visitedHistory:[]
    })
    return res.json({
        id:shortUrl
    })
}
module.exports = {
    handleGenerateShortUrl,
}