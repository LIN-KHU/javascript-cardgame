import "../index.css";
import Card from "./Card.js";

let cardsContainer = document.querySelector("#cards");

const card1 = new Card();
const card2 = new Card();
const card3 = new Card();

const randomNum = Math.floor(Math.random() * 3);
//buttons가 list가 됨
const buttons = document.querySelectorAll("button");

cardsContainer.appendChild(card1.card);
cardsContainer.appendChild(card2.card);
cardsContainer.appendChild(card3.card);

const numbers = [0, 1, 2];
numbers.forEach(function (number) {
  buttons[number].addEventListener("click", () => {
    if (randomNum == number) {
      document.write("정답입니다");
    } else {
      document.write("꽝입니다");
    }
  });
});
