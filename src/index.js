import "../index.css";

// 실제 실행 코드 작성
// ex)cardGame.start()

class Card {
  result;
  cardList;

  constructor(result, cardList) {
    this.result = result;
    this.cardList = cardList;

    this.createCard();
    this.addEventHandler();
    this.addCard();
  }

  createCard() {
    this.element = document.createElement("button");
    this.element.className = "card";
    this.element.innerText = "";
  }
  /// 아마 여기 부분을 나중에 밑에 클래스에 넣어야 한다.

  addEventHandler() {
    this.element.addEventListener("click", this.handleClick.bind(this));
  }

  addCard() {
    const cards = document.querySelector("#cards");
    cards.appendChild(this.element);
  }

  handleClick() {
    if (this.result == "loser") {
      this.element.innerText = "꽝";
      this.cardList.decreaseChances();
    } else {
      this.element.innerText = "당첨";
      this.cardList.restart();
    }
  }
}

class CardList {
  allCards;
  chanceElement;
  count;

  constructor() {
    this.chanceElement = document.getElementById("chance");
    this.count = 2;

    const card1 = new Card("loser", this);
    const card2 = new Card("loser", this);
    const card4 = new Card("winner", this);
    const card3 = new Card("loser", this);

    const cardList = [card1, card2, card3, card4];
    this.allCard = cardList;

    this.cardShuffle();

    this.restartElement = document.getElementById("restart");
    this.restartElement.style.display = "none";
  }

  restart() {
    this.restartElement.innerText = "재시작";
    this.restartElement.style.display = "block";
  }

  decreaseChances() {
    this.count = this.count - 1;
    this.chanceElement.innerText = `남은 기회: ${this.count}`;

    if (this.count === 0) {
      this.restart();
    }
  }

  cardShuffle() {
    this.allCard.sort(() => Math.random() - 0.5);

    const cardsContainer = document.querySelector("#cards");
    cardsContainer.innerHTML = "";

    this.allCard.forEach((card) => card.addCard());
  }
}

const cardGame = new CardList();
