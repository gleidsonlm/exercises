/* 
    Refactor promises_all with async.
*/

/* 
    Promises method "all" receives an array of promises,
    and returns an array of responses. Finally comes when
    all promises are resolved.
*/

// Import Axios 
import axios from "axios";

// Print GitHub user full name and repositories with its links.
async function getUserGitHubInfo(user) {
    // Get GitHub user full name.
    const userAll = await axios.get(`https://api.github.com/users/+${user}`);
    
    // Get GitHub user repositories.
    const userRepos = await axios.get(userAll.data.repos_url);
    
    // Print info 
    console.log(
        `${userAll.data.name} has ${userRepos.data.length} repositories:`,
    )
    // Print public repositories with a link.
    for(const repo of userRepos.data) {
        console.log(`${repo.html_url} - ${repo.description}`)
    }

}
// Call function getUserGitHubInfo and catch exceptions
getUserGitHubInfo('gleidsonlm').catch(err => console.log(err.message))