/* Instanciando um Objeto em JavaScript */
"use strict";
class Product {
    code;
    title;
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
}

class Course {
    code;
    title;
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
}

const myProduct1 = new Product(123, "Smartphone");
const myCourse1 = new Course(456, "English");

console.log(myProduct1.code);
console.log(myCourse1.code);