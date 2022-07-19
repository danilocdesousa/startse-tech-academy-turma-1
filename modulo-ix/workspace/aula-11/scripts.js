/* Declarando Métodos de uma Classe em JavaScript */
"use strict";
class Product {
    description;
    width;
    height;
    depth;
    value;
    constructor(description, width, height, depth, value) {
        this.description = description;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.value = value;
    }
    productVolume() {
        return this.width * this.height * this.depth;
    }

    installmentAmount(installment) {
        return this.value / installment;
    }
}

const product1 = new Product("Product 1", 2, 4, 6, 10);
console.log(product1.productVolume());
console.log(product1.installmentAmount(2));
