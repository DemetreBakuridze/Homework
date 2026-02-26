// scope
let a = 5;

function test() {
let b = 10;
console.log(a);
console.log(b);
}

test();
console.log(b);

//lexical scope
function outer() {
let x = 20;

function inner() {
    console.log(x);
}

inner();
}

outer();

// shadowing
let num = 5;

function test() {
let num = 10;
console.log(num);
}

test();
console.log(num);