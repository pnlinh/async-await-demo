const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); // pending => resolved, fulfilled
        reject(new Error('error')); // pending => rejected
    }, 2000);
});

p
    .then(result => console.log('Result', result))
    .catch(error => console.log(error.message));
