const child = document.getElementById("child");

let x = 0;
let y = 0;
let direction = "right";

setInterval(() => {

if (direction === "right") {
    x++;
    if (x === 270) direction = "bottom";
}

else if (direction === "bottom") {
    y++;
    if (y === 270) direction = "left";
}

else if (direction === "left") {
    x--;
    if (x === 0) direction = "top";
}
else if (direction === "top") {
    y--;
    if (y === 0) direction = "right";
}

child.style.left = x + "px";
child.style.top = y + "px";

}, 5);