/* Método Estático de uma Classe em JavaScript */
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

    static productVolume1(width, height, depth) {
        return width * height * depth;
    }

    installmentAmount(installment) {
        return this.value / installment;
    }
}

const product1 = new Product("Product 1", 2, 4, 6, 10);
console.log(product1.productVolume());
console.log(product1.installmentAmount(2));

class Music {
    static format = "mp3";
    #title;
    #duration;
    constructor(title, duration) {
        this.#title = title;
        this.#duration = duration;
    }
    static secondsToMinutes(duration) {
        const minute = Math.floor(duration / 60);
        let second = duration % 60;
        if (second < 10 && second > 0) {
            second = `0${duration % 60}`;
        } else if (second < 10) {
            second = "00";
        }
        return `${minute}:${second}`;
    }
    getDuration() {
        console.log(Product.productVolume1(2, 4, 6)); // Access to the static method of another class.
        return this.#duration;
    }
}

const music1 = new Music("My Song 1", 190);
// console.log(music1.secondsToMinutes(music1.getDuration())); //TypeError: music1.secondsToMinutes is not a function
console.log(Music.secondsToMinutes(music1.getDuration()));
console.log(Music.secondsToMinutes(190));
