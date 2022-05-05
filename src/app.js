/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = generarcarta();

  document.querySelector(".topicon").innerHTML = card[0];
  document.querySelector(".number").innerHTML = card[1];
  document.querySelector(".bottomicon").innerHTML = card[0];
};
let generarcarta = () => {
  let iconos = ["♦", "♥", "♠", "♣"];
  let simbolo = ["3", "J", "8", "A", "2", "4", "5", "6", "7", "9", "Q", "K"];

  let num1 = Math.floor(Math.random() * iconos.length);
  let num2 = Math.floor(Math.random() * simbolo.length);
  console.log(num1);
  return [iconos[num1], simbolo[num2]];
};
