/*
alert("Olá, seja bem-vindo!");
document.write("Primeira aula.");
*/

/*
const yourName = prompt("Informe o seu nome.");
alert(`Olá, ${yourName}`);
*/

document.querySelector("#h1").textContent = "Introdução ao JavaScript";
document.querySelector("#h2").textContent = "Explicando algumas funcionalidades"

function welcome() {
    const username = document.querySelector("#username").value;
    alert(`Olá, ${username}`);
    document.getElementById("loginForm").style.display = "none";
}

/*
function changeBgColor() {
    const SelectedOption = document.querySelector("#bgColors");
    const selectedColor = SelectedOption.options[SelectedOption.selectedIndex].value;
    document.body.style.background = selectedColor;
}
*/