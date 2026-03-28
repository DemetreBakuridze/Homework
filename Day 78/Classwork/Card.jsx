function Card(props) {
return (
    <div className="card">
    <h1>{props.productName}</h1>
    <img src={props.img} alt="" />
    <h1>{props.desc}</h1>
    <button>Buy Product</button>
    </div>
)
}

export default Card