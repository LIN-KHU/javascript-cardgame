import Card from './Card';

class Cards {
  #$node;
  #list;

  constructor(number) {
    this.#validate(number);

    this.#getElement();

    this.#createCards(number);
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

  render() {
    this.#list.forEach((card) => {
      card.render(this.#$node);
    });
  }
}

export default Cards;
