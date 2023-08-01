const axios = require('axios');

axios.get('https://api.github.com/search/repositories?q={query}&sort=stars&order=desc&per_page=100')
.then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const repositories = res.data['items'];

    for(repository of repositories) {
      console.log(`Got repository with id: ${repository.id} ,full name: ${repository.full_name}, url: ${repository.html_url}, url: ${repository.html_url}, stars: ${repository.stargazers_count} `);
    }
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });