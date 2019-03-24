const p = Promise.resolve({id: 1});
p.then(result => console.log(result));

const p2 = Promise.reject('reason for rejection...');
p2.catch(error => console.log(error));