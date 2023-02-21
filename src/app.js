/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateRandomNumber(array) {
    const numero = Math.floor(Math.random() * array.length);
    return numero;
  }

  function generateCard() {
    const arraySimbolos = ["♦", "♥", "♠", "♣"];
    const arrayNumeros = [
      "As",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let numeroArray = generateRandomNumber(arraySimbolos);
    const simboloUp = document.getElementById("elemento1");
    simboloUp.innerText = arraySimbolos[numeroArray];

    const simboloDown = document.getElementById("elemento3");
    simboloDown.innerText = arraySimbolos[numeroArray];

    const numeros = document.getElementById("elemento2");
    numeros.innerText = arrayNumeros[generateRandomNumber(arrayNumeros)];

    if (numeroArray === 0 || numeroArray === 1) {
      simboloUp.style.color = "red";
      simboloDown.style.color = "red";
      numeros.style.color = "red";
    } else {
      simboloDown.style.color = "black";
      simboloUp.style.color = "black";
      numeros.style.color = "black";
    }
  }
  generateCard();
  setInterval(generateCard, 10000);
  const btn = document.getElementById("btnItem");
  btn.addEventListener("click", generateCard);
};
