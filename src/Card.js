class Card {
  constructor(isWinner, game) {
    this.isWinner = isWinner;
    this.game = game;
    this.element = this.createCardElement();
    this.element.addEventListener('click', this.handleCardClick.bind(this));
    this.resultTextElement = document.createElement('div');
    this.element.appendChild(this.resultTextElement);
  }

  createCardElement() {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    return cardElement;
  }

  handleCardClick() {

    const resultMessage = document.createElement('p');
    resultMessage.textContent = this.isWinner ? '당첨' : '꽝';
    this.resultTextElement.innerHTML = '';
    this.resultTextElement.appendChild(resultMessage);
    
    if (this.isWinner) {
      this.game.ifWinner();
    } else {
      this.game.ifLoser();
    }
  }
}

export default Card;
