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

    const undercards = document.getElementById('cards');
    undercards.appendChild(btn); //cards라는 id가진 html요소 내에 자식요소로 해당 버튼 추가.
    
    btn.addEventListener('click', () => {
      //'당첨입니다' 혹은 '꽝입니다' 문구 생성. 
      const clickMessage = this.createClickMessage();
      alert(clickMessage);
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


//const cards = [];
/*for (let i = 0; i < 3; i++) {
  const isGoodCard = (i === 1);
  const card = new Card(isGoodCard);
  cards.push(card);
  undercards.appendChild(card.Btn);
}*/

export default Card; //해당 class를 다른 파일로 내보내겠다. 다른 파일에서는 import card from [파일경로] 이런 코드를 써서 그 외부 파일에서도 이 class 사용 가능. 
