class Card {
  // 필드 값은
  constructor(isGoodCard) {
    this.isGoodCard = isGoodCard; 
  }

  //카드버튼 생성. 개수는? 
  createCardBtn() {
    const btn = document.createElement('button');
    btn.className = "card"; //css
    btn.innerText = "카드입니다";

    //const undercards = document.getElementById('cards');
    //undercards.appendChild(btn); //cards라는 id가진 html요소 내에 자식요소로 해당 버튼 추가.
    
    btn.addEventListener('click', () => {
      //'당첨입니다' 혹은 '꽝입니다' 문구 생성. 
      const clickMessage = this.createClickMessage();
      //alert(clickMessage);
      const showMessage = document.getElementById('cards');
      showMessage.innerText = clickMessage;
    });

    return btn;
  }

  createClickMessage() {
    if (this.isGoodCard) {
      return '당첨입니다';
    } else {
      return '꽝입니다';
    }
  }
}

// Shuffle 클래스 생성. 

class Shuffle {
  constructor(cardCount) {
    this.cardCount = cardCount;
    this.cards = this.generateCards();
    this.shuffleCards();
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

//export default Card; //해당 class를 다른 파일로 내보내겠다. 다른 파일에서는 import card from [파일경로] 이런 코드를 써서 그 외부 파일에서도 이 class 사용 가능. 
//export default Shuffle;

export {Card, Shuffle};