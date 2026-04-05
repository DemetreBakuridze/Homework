function App() {
const [user, setUser] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setUser(e.target.elements.username.value);
};

if (!user) {
    return (
    <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" />
        <button type="submit">Submit</button>
        </form>
    </>
    );
} else {
    return (
    <>
        <h2>Welcome {user}</h2>
    </>
    );
}
}

export default App;