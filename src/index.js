import '../index.css';

// 실제 실행 코드 작성
// ex)cardGame.start()

class Card {
  constructor() {
    this.createCard();
    this.addEventHandler();
    this.addCard();
  }

 createCard(){
  this.element = document.createElement('button');
  this.element.className = 'card';
  this.element.innerText = '카드입니다.';
}

 addEventHandler(){
  this.element.addEventListener('click', this.handleClick.bind(this));
 }

addCard(){
  const cards = document.querySelector('#cards');
  cards.appendChild(this.element);
}


cardShuffle(){
  const card1 = new Card();
  const card2 = new Card();
  const card3 = new Card();

  card1.element.dataset.result = 'loser';
  card2.element.dataset.result = 'winner';
  card3.element.dataset.result = 'winner';


  const cardList = [card1, card2, card3]
  cardList.sort(() => Math.random() - 0.5);

  const cardsContainer = document.querySelector('#cards');
  cardsContainer.innerHTML = ''; 

  cardList.forEach(card => card.addCard());
}


handleClick() {
  if (this.element.dataset.result == 'loser'){
      this.element.innerText = '꽝 입니다.';
  }
  else{
    this.element.innerText = '당첨 입니다.';
  }    
 }
}


const cardGame = new Card();
cardGame.cardShuffle();
