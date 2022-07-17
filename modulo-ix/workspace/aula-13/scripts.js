"use strict";
/* JavaScript Class super */

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
    constructor(title, numberOfPages) {
        super("Book");
        this.title = title;
        this.numberOfPages = numberOfPages;
    }
}

const product1 = new Product("Generic Book");
console.log(product1.type);
console.log(product1.getData());

const book1 = new Book("Book A", 199);
console.log(book1.type);
console.log(book1.title);
console.log(book1.getData());
