class Card {
  constructor(cardsContainer) {
    let card = document.createElement("button");
    card.classList.add("card");

    this.card = card;
    this.cardsContainer = cardsContainer;
    this.render();
  }

  render() {
    this.cardsContainer.appendChild(this.card);
  }
}

class GameManager {
  constructor() {
    this.chance = 2;
    this.numbers = [0, 1, 2, 3];
    this.gameOver = false;
    this.information = document.createElement("p");
    this.information.classList.add("information");
    this.cardsContainer = document.getElementById("cards");
    this.cardsContainer.appendChild(this.information);
  }

  initButtons(randomNum) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button, index) => {
      this.startGame(button, randomNum, index);
    });
  }

  startGame(button, randomNum, index) {
    this.information.textContent = `남은 횟수 : ${this.chance} 회`;

    button.addEventListener("click", () => {
      if (this.gameOver) return;

      if (randomNum === index) {
        button.textContent = "당첨";
        this.endGame("(성공!) 당첨되었습니다.", randomNum);
      } else {
        button.textContent = "꽝";
        this.chance = this.chance - 1;

        if (this.chance === 0) {
          this.endGame("(실패!) 게임이 종료되었습니다.", randomNum);
        } else {
          this.startGame(button, this.cardsContainer, randomNum, index);
        }
      }
    });
  }

  endGame(message, randomNum) {
    this.gameOver = true;
    this.information.textContent = message;

    let restart = document.createElement("button");
    restart.textContent = "재시작";
    restart.classList.add("restart");
    document.body.appendChild(restart);
    restart.addEventListener("click", () => {
      location.reload(true);
    });
  }
}

export { Card, GameManager };
