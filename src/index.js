import "../index.css";
import { Card, GameManager } from "./Card.js";

let cardsContainer = document.querySelector("#cards");

const card1 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card2 = new Card(cardsContainer);
const card3 = new Card(cardsContainer);
const card4 = new Card(cardsContainer);

const buttons = document.querySelectorAll("button");

const randomNum = Math.floor(Math.random() * 4);

const gameManager = new GameManager();

buttons.forEach((button, index) => {
  gameManager.startGame(button, cardsContainer, randomNum, index);
});
