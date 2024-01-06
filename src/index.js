import '../index.css';

let cardsContainer = document.querySelector('#cards');
class Card {
  card;
  id;

  constructor(id) {
    let card = document.createElement('button'); //
    card.classList.add('card'); //
    card.textContent = '카드입니다';

    this.card = card;
    this.id = id;

    this.render();
  }

  render() {
    cardsContainer.appendChild(this.card); //부모 노드와 자식 노드 연결 
  }
}

const card1 = new Card('id1');
const card2 = new Card('id2');
const card3 = new Card('id3');

const win = Math.floor(Math.random() * 3);
//buttons가 list가 됨
const buttons = document.querySelectorAll('button');

for (let i = 0; i<3; i++){
  buttons[i].addEventListener('click', () => {
    if(win == i){
      document.write('정답입니다')
    } else{
      document.write('꽝입니다')
    }
  });
}