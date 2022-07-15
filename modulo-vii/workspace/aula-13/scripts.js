/* Arrays 1/3 */

/*
let products1 = [];
let products2 = ["camisa", "saia", "vestido"];
console.log(products2[products2.length - 1]);
products2[2] = "sapato";
console.log(products2[products2.length - 1]);
products2[1] = 22;
console.log(typeof products2);
*/

/*
let person = [
    {
        personName: "Alf",
        age: 11
    },
    {
        personName: "Beto",
        age: 22
    },
];

console.log(person);
console.log(person[0]);
*/

const email = "myname@myemail.com";
let emailArray = email.split("@");
console.log(emailArray);
console.log(emailArray[0]);

const joinedItems = "xícara,livro,teclado,cadeira";
let splitItems = joinedItems.split(",");
console.log(splitItems);
console.log(typeof splitItems);
let itemsToString = splitItems.toString();
let itemsToString2 = splitItems.join("*");
console.log(itemsToString);
console.log(typeof itemsToString);
console.log(itemsToString2);
console.log(typeof itemsToString2);