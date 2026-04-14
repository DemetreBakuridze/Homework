import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
const [accounts, setAccounts] = useState([]);
const [loggedUser, setLoggedUser] = useState(null);

useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem("accounts"));
    if (savedAccounts) {
    setAccounts(savedAccounts);
    }
}, []);

useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}, [accounts]);

const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
    username: e.target.username.value,
    password: e.target.password.value,
    };

    const alreadyExists = accounts.some(
    (acc) => acc.username === newAccount.username
    );

    if (alreadyExists) {
    alert("Account already exists");
    }

    setAccounts((prev) => [...prev, newAccount]);
    e.target.reset();
};

const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;

    const alreadyExist = accounts.some(
    (acc) => acc.username === user && acc.password === pass
    );

    if (alreadyExist) {
    setLoggedUser(user);
    }
};

if (loggedUser) {
    return (
    <div className="welcome-container">
        <h1>Greetings {loggedUser}, Hello</h1>
    </div>
    );
}

return (
    <div className="app-container">
    <div className="form-wrapper">
        <h2>Register Form</h2>
        <form id="reg" onSubmit={handleRegister}>
        <input name="username" type="text" placeholder="username..." required />
        <input name="password" type="password" placeholder="password..." required />
        <button type="submit" className="reg-btn">
            Register
        </button>
        </form>
    </div>

    <div className="form-wrapper">
        <h2>Login Form</h2>
        <form id="log" onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="username..." />
        <input name="password" type="password" placeholder="password..." />
        <button type="submit" className="log-btn">
            Login
        </button>
        </form>
    </div>
    </div>
);
}

export default App;