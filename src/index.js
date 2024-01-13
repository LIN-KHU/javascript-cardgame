import '../index.css';
//import Shuffle from './Shuffle';
import CardGame from './CardGame';

const cardCount = 4;
const initialChances = 2;
/*const shuffle = new Shuffle(cardCount, initialChances);
shuffle.shuffleCards();
shuffle.displayCards();
shuffle.displayInfo();*/
const cardGame = new CardGame(cardCount, initialChances);
cardGame.startGame();

