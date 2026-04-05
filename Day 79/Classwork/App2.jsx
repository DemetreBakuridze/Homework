import { useState } from "react";

function App(){
const [count, setCount] = useState()

function handleIncrement(){
    setCount(count + 1)
}

function handleDecrement(){
    setCount(count - 1)
}

return(
    <>
    <button onClick={handleIncrement}>Increment +1</button>
    <br />
    <button onClick={handleDecrement}>Decrement -1</button>
    <p>Count: {count}</p>
    </>
)
}

export default App