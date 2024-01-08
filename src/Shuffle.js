import Card from './Card';

class Shuffle {
    constructor(cardCount) {
      this.cardCount = cardCount;
    }
  
    //카드 섞기 위한 사전작업_ 배열 생성. 
    generateCards() {
      const cards = []; //배열 생성.
      for (let i = 0; i < this.cardCount; i++) {
        const isGoodCard = (i === 1);
        const card = new Card(isGoodCard); //Card 클래스의 인스턴스 생성. 
        cards.push(card);
      }
      return cards;
    }
  
    shuffleCards() {
        this.cards = this.generateCards();
      for (let i = this.cards.length - 1; i > 0; i--) { //this.cards.length는 생성된 배열의 길이.
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; //배열 순서 바꾸기
      }
    }
  
    displayCards() {
      const undercards = document.getElementById('cards');
      this.cards.forEach(card => { //모든 배열 요소에 대해 수행. 
        const btn = card.createCardBtn();
        undercards.appendChild(btn);
      });
    }
  }

  export default Shuffle;