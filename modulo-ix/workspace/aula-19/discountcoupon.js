/* Uso de classes em arquivos externos */
"use strict";

export class DiscountCoupon {
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