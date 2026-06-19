const { getJson } = require('serpapi');
require('dotenv').config(); // Loads variables from .env file

const { SERPAPI_KEY } = process.env;

// Basic search with SerpAPI
getJson({
  engine: 'google',
  q: 'cafe',
  location: 'London, England, United Kingdom',
  google_domain: 'google.co.uk',
  api_key: SERPAPI_KEY,
  hl: 'en',
  gl: 'uk',
}, (json) => {
  console.log(json);
});
