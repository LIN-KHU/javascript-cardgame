import '../index.css';
import Shuffle from './Shuffle';

const cardCount = 3;
const shuffle = new Shuffle(cardCount);
shuffle.shuffleCards();
shuffle.displayCards();
