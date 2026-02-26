function myFunction(firstArgument, ...others) {
    console.log("First:", firstArgument);
    console.log("Others:", others);
}

myFunction(10, 20, 30, 40);


let all = [1, 2, 3, 4, 5];
let values = [100, 200, 300];

let newArray = [
    ...all.slice(0, 2),
    ...values,
    ...all.slice(2)
];

console.log(newArray);


let [a, b, c] = values;

console.log(a);
console.log(b);
console.log(c);

let obj1 = { name: "Demetre" };
let obj2 = { age: 17 };
let obj3 = { city: "Batumi" };

let result = Object.assign({}, obj1, obj2, obj3);

console.log(result);