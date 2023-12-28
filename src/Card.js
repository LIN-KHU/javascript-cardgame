class Card {
  #isWin;
  #$node;
  #cards;

  constructor(isWin, cards) {
    this.#isWin = isWin;
    this.#cards = cards;

    this.#createNode();
  }

  #createNode() {
    const $node = document.createElement('button');
    $node.classList.add('card');
    $node.innerText = '카드입니다';

    this.#$node = $node;
  }

  // 필드 값은
  constructor() {}

  render($parent) {
    if ($parent) {
      $parent.appendChild(this.#$node);
    }
  }
}

export default Card;
