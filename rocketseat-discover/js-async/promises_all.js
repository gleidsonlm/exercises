/* 
    Promises method "all" receives an array of promises,
    and returns an array of responses. Finally comes when
    all promises are resolved.
*/

//import Axios 
import axios from "axios";

function getUserGitHubInfo(user) {
    // Fetchs the information from GitHub API.
    Promise.all([
        axios.get(`https://api.github.com/users/${user}`),
        axios.get(`https://api.github.com/users/${user}/repos`)
    ])
    .then(res => {
        // Print developer full name
        console.log(res[0].data.name)
        // Print public repositories with a link.
        for(const repo of res[1].data) {
            console.log(`${repo.html_url} - ${repo.description}`)
        }
    })
    .catch(err => console.log(err))
    .finally(() => console.log('done'))
}

// call function getUserGitHubInfo
getUserGitHubInfo('gleidsonlm');