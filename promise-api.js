// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result));
//
// const p2 = Promise.reject('reason for rejection...');
// p2.catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        // reject(new Error('because something failed.'));
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message));