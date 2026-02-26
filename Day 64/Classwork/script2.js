let name = "Deme";
let age = 16;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);

let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

for (let index in fruits) {
    console.log(index);
}