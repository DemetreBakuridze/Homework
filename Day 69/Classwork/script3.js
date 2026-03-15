const promise = new Promise((resolve, reject) => {
let myNumber = 11;

setTimeout(() => {
    if (myNumber === 10) {
    resolve("Promise fulfilled");
    } else {
    reject("Failed");
    }
}, 4000);
});

promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});