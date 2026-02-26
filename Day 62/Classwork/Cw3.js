const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
e.preventDefault();
container();
});

function container() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

presentational(name, email, phone);
}

function presentational(name, email, phone) {
const output = document.getElementById("output");

output.innerHTML = `
    <h2>User Info</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
`;
}