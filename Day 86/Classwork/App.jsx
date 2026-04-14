function Presentational({ productinfo }) {
return (
    <div className="product">
    <h2>{productinfo.title}</h2>
    <p>price: {productinfo.price}$</p>
    <p>desc: {productinfo.description}</p>
    <p>category: {productinfo.category}</p>
    <p>rate: {productinfo.rating.rate}</p>
    <p>count: {productinfo.rating.count}</p>
    <hr />
    </div>
);
}

export default function App() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchinfo() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
    }

    fetchinfo();
}, []);

if (loading) {
    return <p>loading...</p>;
}

return (
    <div className="productss">
    {products.map((product, index) => (
        <Presentational productinfo={product} key={index} />
    ))}
    </div>
);
}