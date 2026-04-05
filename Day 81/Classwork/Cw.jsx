function App() {
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setTasks((prevTasks) => [...prevTasks, input]);
    setInput("");
};

return (
    <>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>

    <ul>
        {tasks.map((task, index) => (
        <li key={index}>{task}</li>
        ))}
    </ul>
    </>
);
}

export default App;