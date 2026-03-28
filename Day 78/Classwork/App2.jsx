import Container from " ./Container"
import Card from "./Card"
import img from "./assets/react.svg"

function App() {
return (
    <>
    <Container title="Electronics" color="lightyellow">
        <Card productName="Laptop" desc="Fast laptop" img={img} />
        <hr />
        <Card productName="Phone" desc="Cool phone" img={img} />
        <hr />
        <Card productName="Tablet" desc="Big tablet" img={img} />
    </Container>

    <Container title="Accessories" color="lightgray">
        <Card productName="Mouse" desc="Wireless mouse" img={img} />
        <hr />
        <Card productName="Keyboard" desc="Gaming keyboard" img={img} />
    </Container>
    </>
)
}

export default App