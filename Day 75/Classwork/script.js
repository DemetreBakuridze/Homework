import React from "react";

function UserStatus({ isLoggedIn }) {
if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
} else {
    return <h2>Please log in</h2>;
}
}

function AgeMessage({ age }) {
return (
    <p>
    {age >= 18 ? "You are an adult" : "You are under 18"}
    </p>
);
}

function Notification({ hasMessage }) {
return (
    <div>
    {hasMessage && <p>You have a new message!</p>}
    </div>
);
}

function App() {
return (
    <div>
    <UserStatus isLoggedIn={true} />
    <AgeMessage age={16} />
    <Notification hasMessage={true} />
    </div>
);
}

export default App;