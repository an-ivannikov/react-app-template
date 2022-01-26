const ghpages = require('gh-pages');



ghpages.publish('./build', {
  branch: 'gh-pages',
  repo: 'https://github.com/an-ivannikov/react-app-template.git'
}, (error) => {
  if (error) {
    console.error(error);
  }
});
