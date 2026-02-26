let form = document.querySelector("form");
let userField = form.elements.username;
let emailField = form.elements.email;
let passwordField = form.elements.password;

let loggedUser = "";

function loadData(){
    let savedUser = localStorage.getItem("username");
    if(savedUser){
        loggedUser = savedUser;
    }
}

loadData();
checkLoggedIn();

function saveData(user, email, pass){
    localStorage.setItem("username", user);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    loggedUser = "";
}

function checkLoggedIn(){
    if(loggedUser){
        document.body.innerHTML = `
        <h2>Username: ${loggedUser}</h2>
        <h2>Email: ${localStorage.getItem("email")}</h2>
        <button onclick="${logout()}">Logout</button>
        `;
    }
}

function handleSubmit(eventObject){
    eventObject.preventDefault();
    let username = userField.value;
    let email = emailField.value;
    let password = passwordField.value;

    if(username.length < 8){
        alert("Username must be at least 8 characters long");
        return;
    }

    if(username.includes(" ")){
        alert("Username cannot contain spaces");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters long");
        return;
    }

    loggedUser = username;
    saveData(username, email, password);
    alert("Account created successfully");
}

form.addEventListener("submit", handleSubmit);
