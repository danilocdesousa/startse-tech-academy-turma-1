/* Getters and Setters */
"use strict";

class Lab {
    #name;
    #capacity;
    constructor(name, capacity) {
        this.#name = name;
        this.#capacity = capacity;
    }
    getName() {
        return this.#name
    }
    getCapacity() {
        return this.#capacity;
    }
    setName(name) {
        this.#name = name;
    }
    setCapacity(capacity) {
        this.#capacity = capacity;
    }
}

const lab = new Lab("Math", 45);
console.log(lab.getName());
console.log(lab.getCapacity());
lab.setName("Computing");
lab.setCapacity(77);
console.log(lab.getName());
console.log(lab.getCapacity());
