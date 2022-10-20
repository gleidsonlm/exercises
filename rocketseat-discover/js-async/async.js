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
    const userAll = await axios.get(`https://api.github.com/users/${user}`);
    
    // Get GitHub user repositories.
    const userRepos = await axios.get(userAll.data.repos_url);
    
    // Print user full name and how many public repositories. 
    if (userRepos.data.length > 1) {
        console.log(
            `${userAll.data.name} has ${userRepos.data.length} public repositories:`,
        )
    } else if (userRepos.data.length === 1){
        console.log(
            `${userAll.data.name} has ${userRepos.data.length} public repository:`,
        )
    } else if (userRepos.data.length === 0){
        console.log(
            `${userAll.data.name} has no public repositories.`,
        )
    } else {
        console.log(
            `Couldn't retrieve ${userAll.data.name} public repositories.`,
        )
    }
    // Print public repositories with a link.
    if (userRepos.data.length > 0) {
        for(const repo of userRepos.data) {
            console.log(`${repo.html_url} - ${repo.description}`)
        }
    }
}
// Call function getUserGitHubInfo and catch exceptions
getUserGitHubInfo('WordPress').catch(err => console.log(err.message))