/* Herança - Atributos e Métodos */
"use strict";
class Product {
    type;
    constructor(type) {
        this.type = type;
    }
    getData() {
        return `Type: ${this.type}`;
    }
}

class Book extends Product {
    title;
    numberOfPages;
    constructor(type, title, numberOfPages) {
        // super(type);
        super("Book");
        this.title = title;
        this.numberOfPages = numberOfPages;
        console.log(this.getData());
        // console.log(super.getData());
    }
    showBookData() {
        console.log(`${super.getData()}, ${this.title}, ${this.numberOfPages}`);
    }
}

const product1 = new Product("Product 1");
// console.log(product1.getData());
const book1 = new Book("Product", "Book A", 199);
book1.showBookData();
