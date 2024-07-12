const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/static', express.static(path.join(__dirname, '../dist')))

app.get("/", function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html'); 
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
    res.send(contentFromHtmlFile)
})

app.listen(2000, function(){
    console.log("application listening on http://localhost:2000")
})