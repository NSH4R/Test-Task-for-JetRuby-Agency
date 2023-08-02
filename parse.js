const axios = require('axios');

function parse() {
  axios.get('https://api.github.com/search/repositories?q={created}&sort=stars&order=desc&per_page=100&page&page=1')
  .then(res => {
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);
  
      const repositories = res.data['items'];
  
      for(repository of repositories) {
        console.log(`Got repository with id: ${repository.id} ,full name: ${repository.name}, url: ${repository.html_url}, stars: ${repository.stargazers_count} `);
      }
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
}

parse();
setInterval(parse, 60*1000);