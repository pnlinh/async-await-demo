// Asynchronous
console.log('Before');
getUser(1, getRepositories);
console.log('After');

// Synchronous
/*console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUserName);
const commits = getCommits(repos[0]);
console.log('After');*/

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUserName: 'pnlinh'});
    }, 2000);
}

function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}