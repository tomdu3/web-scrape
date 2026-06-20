const { getJson } = require('serpapi');
require('dotenv').config(); // Loads variables from .env file

const { SERPAPI_KEY } = process.env;

// Basic search with SerpAPI
getJson({
  engine: 'google_short_videos',
  q: 'labubu',
  api_key: SERPAPI_KEY,
}, (json) => {
  console.log(json);
});
