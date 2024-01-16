import Card from './Card';

class CardGame {
  constructor() {
    this.cardContainer = document.querySelector("#cards");
    this.resultContainer = document.querySelector("#result");
    this.cards = this.createCards(this);
    this.renderCards();
    this.remainAttempts = 2;
    this.isGameOver = false;
  }

  createCards(game) {
    const cards = [];
    const winnerLocation = Math.floor(Math.random() * 4);   

    for (let i = 0; i < 4; i++) {
      const isWinner = i === winnerLocation;
      const card = new Card(isWinner, game);
      cards.push(card);
    }
    return cards;
  }

  renderCards() {
    this.cards.forEach((card) => {
      this.cardContainer.appendChild(card.element);
    });
  }

  ifWinner() {
    this.isGameOver = true;
    this.checkResult();
    }

  ifLoser() {
    if (this.remainAttempts > 0) {
      this.remainAttempts--;
      this.resultContainer.textContent = '남은횟수 : ' + this.remainAttempts;
    } else {
      this.resultContainer.textContent = '[실패!] 게임이 종료되었습니다.';
      this.isGameOver = true;
      this.checkResult();
    }
  }

  checkResult() {
    const existingButton = this.resultContainer.querySelector('button');
    if (existingButton) {
      existingButton.remove();
    }
    
    if (this.isGameOver) {
      const restartButton = document.createElement('button');
      restartButton.textContent = '재시작';
      restartButton.addEventListener('click', () => this.restartGame());
      this.resultContainer.appendChild(restartButton);
    }
  }

  restartGame() {
    this.isGameOver = false;
    this.resultContainer.innerHTML = '';
    this.remainingAttempts = 2;
    this.cards.forEach((card) => {
      card.element.removeEventListener('click', card.handleCardClick.bind(card));
    });
    this.cardContainer.innerHTML = '';
    this.cards = this.createCards();
    this.renderCards();
  }

  start() {
    if (!this.isGameOver) {
      this.cards.forEach((card) => {
        card.element.addEventListener('click', () => {
          card.handleCardClick();
        });
      });
    }
  }
}

export default CardGame;
