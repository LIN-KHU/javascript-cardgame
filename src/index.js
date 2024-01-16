import "../index.css";
import { Card, GameManager } from "./Card.js";

let cardsContainer = document.querySelector("#cards");

var cards = {};
for (var i = 1; i < 5; i++) {
  cards[`card${i}`] = new Card(cardsContainer);
}
var randomNum = Math.floor(Math.random() * 4);
const gameManager = new GameManager();

gameManager.initButtons(randomNum);
