"use strict";

// Atributo Estático de uma Classe em JavaScrip.

class Product {
    static large = 3;
    static medium = 2;
    static small = 1;
    code;
    title;
    value;
    size;
    constructor(code, title, value, size) {
        this.code = code;
        this.title = title;
        this.value = value;
        this.size = size;
    }
}

class Vehicle {
    size;
    constructor(size) {
        this.size = size;
    }
}

const product1 = new Product(111, "Product 1", 11, Product.small);
const product2 = new Product(222, "Product 2", 22, Product.medium);
const product3 = new Product(333, "Product 3", 33, Product.large);

console.log(product1);
console.log(product2);
console.log(product3);

const vehicle1 = new Vehicle(Product.small);
console.log(vehicle1);
