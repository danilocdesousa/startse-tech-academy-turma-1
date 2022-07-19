/* Encapsulamento - Atributos e Métodos Privados */
"use strict";
class Product {
    #type;
    #value;
    constructor(type, value) {
        this.#validatesValue(value);
        this.#type = type;
        this.#value = value;
    }
    #validatesValue(value) {
        if (typeof (value) !== "number") {
            console.log("Invalid value.");
        }
    }
    getData() {
        return `Type: ${this.#type}\nValue: ${this.#value}`;
    }
}

class Book extends Product {
    #title;
    #numberOfPages;
    constructor(title, numberOfPages, value) {
        super("Book", value);
        this.#title = title;
        this.#numberOfPages = numberOfPages;
    }
}

const product1 = new Product("Product 1", 54);
const book1 = new Book("Book A", 199, 55);
console.log(product1.getData());
console.log(book1.getData());
