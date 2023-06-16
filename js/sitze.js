const { NotionAPI } = require('notion-client');

const notion = new NotionAPI({
  auth: 'secret_JgVKtxCfJMLh6eCn9wKkTeOJpJvex9DoEfOjdD9oLUk',
});

const response = await notion.databases.query({
database_id: '8ddc0c00-d100-41d0-ba2e-a34c1a255441'
});

const results = response.results;
results.forEach((page) => {
  console.log(page.properties);
});