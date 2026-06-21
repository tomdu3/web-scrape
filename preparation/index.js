const { getJson } = require('serpapi');
require('dotenv').config(); // Loads variables from .env file

const { SERPAPI_KEY } = process.env;

// Basic search with SerpAPI
getJson({
  engine: 'google_lens',
  url: 'https://static.wikia.nocookie.net/thechitshow/images/9/9f/ChitProfile.png/revision/latest?cb=20250722022025',
  api_key: SERPAPI_KEY,
}, (json) => {
  console.log(json.visual_matches);
});
