// Asynchronous
console.log('Before');
getUser(1,  (user) => {
    console.log('User', user);

    getRepositories(user.gitHubUserName, (repos) => {
        console.log('Repos', repos);

        getCommits(repos, (commits) => {
            // Callback hell ???
        });
    });
});
console.log('After');

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUserName);
const commits = getCommits(repos[0]);
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUserName: 'pnlinh'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback) {

}