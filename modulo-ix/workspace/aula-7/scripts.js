"use strict";
class Financing {
    financingValue;
    tax;
    installments = 1;
    constructor(financingValue, tax, installments) {
        this.financingValue = financingValue;
        this.tax = tax;
        this.installments = installments;
    }
}

const myFinancing1 = new Financing(1000, 3, 10);
const myFinancing2 = new Financing(1000, 3); // installments = undefined

console.log(myFinancing1);
console.log(myFinancing2);