/* Polimorfismo */
"use strict";

class Product {
    #type;
    #value;
    constructor(type, value) {
        this.#validateValue(value);
        this.#type = type;
        this.#value = value;
    }
    #validateValue(value) {
        if (typeof value !== "number") {
            console.log("Invalid value.");
        }
    }
    getData() {
        return `Type: ${this.#type}\nR$ ${this.#value}`;
    }
    setValue(value) {
        this.#value = value;
    }
}

class Book extends Product {
    #title;
    #numberOfPages;
    constructor(title, numberOfPages, value) {
        super("Book X", value);
        this.#title = title;
        this.#numberOfPages = numberOfPages;
    }
    getData() {
        return `${super.getData()}\nTitle: ${this.#title}\nNumber of pages: ${this.#numberOfPages}`;
    }
}

const book1 = new Book("Moby Dick", 499, 33);
console.log(book1.getData());