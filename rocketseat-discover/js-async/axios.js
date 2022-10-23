/* Axios example from https://axios-http.com/
import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
  }); */

//import Axios 
import axios from "axios";

function getUserGitHubRepos(user){
    // GitHub API user endpoint
    let endpoint = 'https://api.github.com/users/';
    // Axios get data, pending promise
    axios.get(`${endpoint}${user}`)
    .then(res => axios.get(res.data.repos_url))
    // New promise to get the repos data
    .then(repos => {for(const data of repos.data){console.log(`${data.html_url} - ${data.description}`)}}) //todo: refactor function to better readability
    .catch(err => {console.log(err);});
}
getUserGitHubRepos('gleidsonlm')