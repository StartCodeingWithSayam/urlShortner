const express = require('express');
const urlRouts = require('./routes/url');
const {conectToMongoDb} = require('./connect');
const app = express();
const PORT = 8001;
app.use(express.json());
conectToMongoDb('mongodb+srv://sayam:wslZXarjqepnsQ7e@url-short.zrwcwrq.mongodb.net/url-short?retryWrites=true&w=majority')
.then(()=> console.log("MongoDb Connected"));
app.use('/url',urlRouts); 
app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`))

