const express = require('express');
const serpapi = require('serpapi');
const dotenv = require('dotenv');

dotenv.config();
const apiKey = process.env.SERPAPI_KEY;
console.log(apiKey);


// 1. Basic server with one API route /  get search 
const app = express();

app.get('/search', (req, res) => {
    res.send('Hello World!');
});

// start server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
