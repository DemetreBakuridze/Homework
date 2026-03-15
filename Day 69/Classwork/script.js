class Phone {
    constructor(model){
        this.model = model;
    }
}

class SmartPhone extends Phone {
    constructor(model, storage){
        super(model);
        this.storage = storage;
    }

    powerOn(){
        console.log(`${this.model} is turning on`);
    }
}

let device = new SmartPhone("iPhone 15", "256GB");
console.log(device);

let phone = new Phone("Nokia 3310");
console.log(phone);

device.powerOn();