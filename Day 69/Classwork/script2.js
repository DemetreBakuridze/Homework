let myArray = [1, 2, 2, 3, 4, 4, 5, "hello", "hello"];

let mySet = new Set(myArray);

console.log(mySet);
console.log(mySet.size);

mySet.add(10);
console.log(mySet);

console.log(mySet.has(3));

mySet.delete(2);
console.log(mySet);

mySet.clear();
console.log(mySet);
console.log(mySet.size);


let myMap = new Map();

myMap.set("name", "Demetre");
myMap.set(1, "one");
myMap.set(true, "yes");
myMap.set({id: 1}, "object");
myMap.set(null, "empty");

console.log(myMap);
console.log(myMap.size);

console.log(myMap.has("name"));

myMap.delete(1);
console.log(myMap);

myMap.clear();
console.log(myMap);
console.log(myMap.size);