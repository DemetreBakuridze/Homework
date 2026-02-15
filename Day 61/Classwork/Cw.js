let parent = document.getElementById("parent");

console.log(parent.childNodes);
console.log(parent.firstChild);
console.log(parent.lastChild);
console.log(parent.hasChildNodes());

let first = document.getElementById("first");
let second = document.getElementById("second");

console.log(first.nextSibling);
console.log(second.previousSibling);
console.log(first.parentNode);

let newP = document.createElement("p");
let text = document.createTextNode("New Text");

newP.appendChild(text);
parent.appendChild(newP);

parent.removeChild(first);