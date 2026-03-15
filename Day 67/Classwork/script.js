class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
}

let square1 = new Square(5);
console.log(square1.area);

square1.area = 36;
console.log(square1.area);