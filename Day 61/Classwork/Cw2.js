const products = [
    {name: 'Apple', price: 5, desc: "apple"},
    {name: 'Banana', price: 3, desc: "banana"},
    {name: 'Orange', price: 4, desc: "fruit"},
    {name: 'Grapes', price: 6, desc: "grapes"},
];

let productsContainer = document.getElementById("productsContainer");

for (let i = 0; i < products.length; i++) {}

    let productDiv = document.createElement("div");

    let title = document.createElement("h2");
    title.textContent = products[i].name;

    let price = document.createElement("p");
    price.textContent = "Price: " + products[i].price;

    let desc = document.createElement("p");
    desc.textContent = products[i].desc;

    let button = document.createElement("button");
    button.textContent = "Buy";

    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(desc);
    productDiv.appendChild(img);
    productDiv.appendChild(button);

    productsContainer.appendChild(productDiv);