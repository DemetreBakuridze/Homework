class Bank {
    #balance;

    constructor(name, email, password, balance) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.#balance = balance;
    }

    get balance() {
        return `Balance on Account ${this.#balance}`;
    }

    set balance(newBalance) {
        if (newBalance > 0) {
            this.#balance = newBalance;
        } else {
            console.log("Balance must be positive");
        }
    }
}

let user1 = new Bank("Demetre", "demo@gmail.com", "1234", 100);

console.log(user1.balance);

user1.balance = 200;
console.log(user1.balance);

user1.balance = -50; 