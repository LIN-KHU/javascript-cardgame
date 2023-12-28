class Card {
  #isWin;
  #$node;
  #cards;

  constructor(isWin, cards) {
    this.#isWin = isWin;
    this.#cards = cards;

    this.#createNode();
    this.#addClickEvent();
  }

  #createNode() {
    const $node = document.createElement('button');
    $node.classList.add('card');
    $node.innerText = '카드입니다';

    this.#$node = $node;
  }

  #selectCard() {
    this.#cards.showResult(this.#isWin);
  }

  #addClickEvent() {
    this.#$node.addEventListener('click', () => {
      this.#selectCard();
    });
  }

  render($parent) {
    if ($parent) {
      $parent.appendChild(this.#$node);
    }
  }
}

export default Card;
