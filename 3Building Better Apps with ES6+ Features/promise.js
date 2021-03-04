const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I completed successfully.');
        //reject('I failed');
    }, 1000);
})

myPromise.then(done => {
    console.log(done);
})
.catch(err => {
    console.log(err)
});