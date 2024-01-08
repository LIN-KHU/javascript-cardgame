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

    btn.addEventListener('click', this.WhenCardClick.bind(this));

    return btn;
  }

  WhenCardClick() {
    //'당첨입니다' 혹은 '꽝입니다' 문구 생성. 
    const clickMessage = this.createClickMessage();
    //alert(clickMessage);
    const showMessage = document.getElementById('cards');
    showMessage.innerText = clickMessage;
  }

  createClickMessage() {
    return this.isGoodCard ? '당첨입니다' : '꽝입니다'; //삼항연산자 사용.
  }
}

export default Card;