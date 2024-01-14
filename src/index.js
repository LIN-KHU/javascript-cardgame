import "../index.css";
// Example import in index.js or another file
import { Card, CardManager, GameManager } from "./Card.js";

let cardsContainer = document.querySelector("#cards");

const card1 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card2 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card3 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card4 = new Card(cardsContainer);

const buttons = document.querySelectorAll("button");

const randomNum = Math.floor(Math.random() * 4);

const numbers = [0, 1, 2, 3];
var chance = 2;
numbers.forEach(function startGame(number) {
  buttons[number].addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    const result = document.createElement("p");
    if (randomNum == number) {
      result.textContent = "정답입니다";
    } else {
      result.textContent = "꽝입니다";
      if (chance != 2) {
        //재시작 버튼
      } else {
      }
    }
    cardsContainer.appendChild(result);
  });
});

//다른 요소

GameManager.startGame();
