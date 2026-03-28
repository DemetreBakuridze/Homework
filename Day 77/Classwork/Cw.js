function App () {
const signedIn = Math.random() > 0.5;
function handleSubmit (e) {
    e.preventDefault();
    alert("Form submitted")
}

function handleClick () {
    alert("Clicked")
}


if (signedIn) {
    return (
    <form onSubmit={handleSubmit}>
        <h2>{`SignedIn: ${signedIn}`}</h2>
        <input placeholder="Username" type="text" />
        <button type="submit">Send</button>
    </form>
    )
} else {
    return (
    <div>
        <h2>{`SignedIn: ${signedIn}`}</h2>
        <ul>
        <li>Georgia</li>
        <li>Germany</li>
        <li>Greenland</li>
        </ul>
        <button onClick={handleClick}>Click me</button>
    </div>
    )
}
}


export default App;