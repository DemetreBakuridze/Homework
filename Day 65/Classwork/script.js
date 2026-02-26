let name1 = "age";

let person = {
name: "Demetre",
[name1]: 20,
["user" + "name"]: "demo123",
balance: 0,

deposit(amount) {
    this.balance += amount;
}
};

person.deposit(100);
person.deposit(50);

console.log(person);