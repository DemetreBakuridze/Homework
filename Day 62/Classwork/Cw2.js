function hello() {
console.log("Hello after 3 seconds");
}

setTimeout(hello, 3000);



let count = 0;

function repeat() {
count++;
console.log("Repeat:", count);

if (count === 10) {
    clearInterval(intervalId);
}
}

let intervalId = setInterval(repeat, 2000);