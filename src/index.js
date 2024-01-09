import "../index.css";
import Card from "./Card.js";

let cardsContainer = document.querySelector("#cards");

const card1 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card2 = new Card(cardsContainer); // cardsContainer를 생성자에 전달
const card3 = new Card(cardsContainer); // cardsContainer를 생성자에 전달

const buttons = document.querySelectorAll("button");

const randomNum = Math.floor(Math.random() * 3);

const numbers = [0, 1, 2];
numbers.forEach(function (number) {
  buttons[number].addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    const result = document.createElement("p"); // 새로운 <p> 엘리먼트 생성
    if (randomNum == number) {
      result.textContent = "정답입니다";
    } else {
      result.textContent = "꽝입니다";
    }
    cardsContainer.appendChild(result);
  });
});
