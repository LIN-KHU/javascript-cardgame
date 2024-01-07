import Cards from './Cards';

class GameManager {
  #cards;

  start() {
    const cards = new Cards(3);
    cards.render();

    this.#cards = cards;
  }
}

export default GameManager;
