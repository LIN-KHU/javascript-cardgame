import Card from './Card';

class Cards {
  #$node;
  #list;

  constructor(number) {
    this.#validate(number);

    this.#getElement();

    this.#createCards(number);
    this.shuffle();
  }

  #validate(number) {
    if (number < 2) throw new Error('');
  }

  #getElement() {
    this.#$node = document.querySelector('#cards');
  }

  #createCards(number) {
    const cardList = new Array(number - 1)
      .fill(null)
      .map(() => new Card(false, this));

    cardList.push(new Card(true, this));

    this.#list = cardList;
  }

  shuffle() {
    this.#list.sort(() => Math.random() - 0.5);
  }

  showResult(isWin) {
    this.#$node.innerText = isWin ? '당첨입니다' : '꽝입니다.';
  }

  render() {
    this.#list.forEach((card) => {
      card.render(this.#$node);
    });
  }
}

export default Cards;
