const express = require('express');
const app = express();
app.listen(8000);
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'\\index.html');
});
app.post('/', (req,res)=>{
    res.send('POST request');
}) 