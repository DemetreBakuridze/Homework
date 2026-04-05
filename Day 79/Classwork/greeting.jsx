export default function Greeting(probs) {
return (
    <div style={{ border: "1px solid gray" }}>
    <p>hello {probs.username || "John Doe"}</p>
    </div>
)
}