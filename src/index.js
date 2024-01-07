import '../index.css';

// 실제 실행 코드 작성
// ex)cardGame.start()

class Card {
  constructor() {
    const element = document.createElement('button');
    element.className = 'card';
    element.innerText = '카드입니다.';

    this.element = element;
    element.addEventListener('click', this.handleClick);

    const cards = document.querySelector('#cards');
    cards.appendChild(element);

    const lose = Math.random() < 0.33;
    if (lose) {
        this.element.dataset.result = 'loser';
    }
  }



  
  handleClick() {
    if (this.dataset.result == 'loser'){
        alert("꽝 입니다!")
    }
    else{
        alert("당첨 입니다.")
    }    
  }
  
}

const card1 = new Card();
const card2 = new Card();
const card3 = new Card();