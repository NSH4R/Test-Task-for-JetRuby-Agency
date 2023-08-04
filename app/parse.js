const axios = require('axios');
const pg = require('../database');

async function parse() {
  try {
    const response = await axios.get('https://api.github.com/search/repositories?q={created}&sort=stars&order=desc&per_page=100&page&page=1');

    const headerDate = response.headers && response.headers.date ? response.headers.date : 'no response date';
    console.log('Status Code:', response.status);
    console.log('Date in Response header:', headerDate);

    const repositories = response.data['items'];

    for (const repository of repositories) {
      // console.log(`Got repository with id: ${repository.id}, name: ${repository.name}, url: ${repository.html_url}, stars: ${repository.stargazers_count}`);
      
      const newRep = await pg.query(`
      INSERT INTO repositories (id, name, url, stars)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id) DO UPDATE
      SET name = $2, url = $3, stars = $4
      RETURNING *;`, 
      [repository.id, repository.name, repository.html_url, repository.stargazers_count]);
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}
module.exports = parse;