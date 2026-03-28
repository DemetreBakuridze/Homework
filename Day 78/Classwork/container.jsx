function Container({ title, color, children }) {
return (
    <div style={{ backgroundColor: color, padding: "20px", margin: "10px" }}>
    <h2>{title}</h2>
    {children}
    </div>
)
}

export default Container