// Asynchronous
console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUserName, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// Promise-based approach
/*getUser(1)
    .then(user => getRepositories(user))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(error => console.log(error.message));*/

// Async await approach
async function displayCommitsAsync() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (err) {
        console.log('Error', err.message);
    }
}

displayCommitsAsync();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({id: id, gitHubUserName: 'pnlinh'});
        }, 2000);
    });
}

function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get repos...'));
        }, 2000);
    });
}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}

function displayCommits(commits) {
    console.log(commits);
}