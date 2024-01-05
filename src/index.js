import '../index.css';

// 실제 실행 코드 작성
// ex)cardGame.start()

import Card from './Card'

const cards = [];
for (let i = 0; i < 3; i++) {
  const isGoodCard = (i === 1);
  const card = new Card(isGoodCard);
  card.createCardBtn();
  //cards.push(card);
  //undercards.appendChild(card.Btn);
}