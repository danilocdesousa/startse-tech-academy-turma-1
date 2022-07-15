"use strict";
class Film {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
}

let myFilm = new Film("Avatar", 2009);

console.log(myFilm);

class Product {
    constructor() {
        this.prodType = "Mouse";
    }
}

const myProduct = new Product();
console.log(myProduct.prodType);