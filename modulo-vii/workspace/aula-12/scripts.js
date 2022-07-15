/* Objects */

const person = {
    firstName: "Ana",
    lastName: "Silva",
    address: {
        street: "Rua ABC",
        number: 123
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

person.phoneNumber = "99123456";

console.log(person.address.street);
console.log(typeof person.address.street);
console.log(person.fullName); // Mostra apenas o código da função.
console.log(person.fullName());
console.log(person.phoneNumber);

person.fullAddress = function () {
    return `${this.address.street}, ${this.address.number}`
}

console.log(person.fullAddress());

function showPersonData(data) {
    console.log(
        `Nome: ${data.fullName()}\nEndereço: ${data.fullAddress()}\nContato: ${data.phoneNumber}`
    );
}

showPersonData(person);

/*
let title = "Introdução à JavaScript";
let numPages = 500;

const book = {
    title: "Introdução à JavaScript",
    numPages: 500
};

book.numPages = 800;

console.log(book.numPages);

book.pubCompany = "Elsevier";

console.log(book.pubCompany);
*/