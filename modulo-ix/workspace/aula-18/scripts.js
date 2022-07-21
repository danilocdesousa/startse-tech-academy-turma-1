/* Composição */
"use strict";

class DiscountCoupon {
    #discount10 = 10;
    #discount20 = 20;
    constructor() { }
    getDiscount(expenses) {
        if (expenses >= 100 && expenses <= 1000) {
            console.log(`Desconto de ${this.#discount10}%`);
        } else if (expenses > 1000) {
            console.log(`Desconto de ${this.#discount20}%`);
        } else {
            console.log(`Sem desconto`);
        }
    }
}

class Client {
    #name;
    #accruedExpenses = 0;
    #coupon;
    constructor(name) {
        this.#name = name;
        this.#coupon = new DiscountCoupon();
    }
    getBenefits() {
        this.#coupon.getDiscount(this.#accruedExpenses);
    }
    setExpenses(value) {
        this.#accruedExpenses += value;
    }
    totalExpenses() {
        console.log(`Total gasto: R$ ${this.#accruedExpenses}`);
    }
}

const client1 = new Client("Anna");
client1.setExpenses(99);
client1.getBenefits();
client1.setExpenses(50.99);
client1.getBenefits();
client1.setExpenses(900);
client1.getBenefits();
client1.totalExpenses();

