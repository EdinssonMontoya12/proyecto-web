const imc = document.getElementById('IMC');
const resultImc = document.getElementById('xxx')
// const imc = document.getElementById('IMC');
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const cintura = document.getElementById("cintura");
const cadera = document.getElementById("cadera");

var resultIMC= peso/(altura*altura);
var resultICC= cintura/cadera;

imc.addEventListener('click', (e) =>{
    resultImc.innerHTML = "<h1>" + resultIMC + "</h1>";
});

// icon.addEventListener('click' , (e) =>{
//     menu.classList.toggle('xxx');
//     const name = icon.className;
//     icon.className = (name === "fas fa-bars"?"fas fa-times" : "fas fa-bars");
//     document.body.classList.toggle('opacity');
// })  