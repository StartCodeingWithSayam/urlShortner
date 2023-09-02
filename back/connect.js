const mongoose = require('mongoose');
mongoose.set("strictQuery",true)
async function conectToMongoDb(url){
    return mongoose.connect(url)
}

module.exports = {conectToMongoDb}