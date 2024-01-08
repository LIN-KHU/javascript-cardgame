class Card {
  constructor(cardsContainer) {
    let card = document.createElement("button"); //
    card.classList.add("card"); //
    card.textContent = "카드입니다";

    this.card = card;
    this.cardsContainer = cardsContainer;
    this.render();
  }

  render() {
    this.cardsContainer.appendChild(this.card); //부모 노드와 자식 노드 연결
  }
}

export default Card;
