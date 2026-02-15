let btn = document.getElementById("sendbtn");
let userField = document.getElementById("username");
let welcomeHeader = document.getElementById("welcomeHeader");
btn.onclick = function () {
    welcomeHeader.textContent = "Hello" + userField.value
}

