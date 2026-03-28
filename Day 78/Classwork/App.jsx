import Card from "./Card"
import phoneImg from "./assets/react.svg"

function App() {
return (
    <>
    <Card productName="Laptop" desc="Powerful gaming laptop" img={phoneImg} />
    <hr />

    <Card productName="Phone" desc="New smartphone model" img={phoneImg} />
    <hr />

    <Card productName="Headphones" desc="Wireless headphones" img={phoneImg} />
    </>
)
}

export default App