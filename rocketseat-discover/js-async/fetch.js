//define fetch function
import fetch from 'node-fetch';

//fetch github api user endpoint, given an username
function getUserGitHubRepos(user) {
    let url = 'https://api.github.com/users/';
    console.log(user);
    // "farfetch'd, I choose you!"
    fetch(`${url}${user}`)
    // response from github in json format
    .then(response => response.json())
    // new fetch to return repos_url
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    // print out in console.log
    .then(json => console.log(json))
    // if something goes wrong, print out error
    .catch(err => console.log(err));
}
// run function passing username parameter.
getUserGitHubRepos('gleidsonlm');