class Card {
  // 필드 값은
  constructor(isGoodCard, cardClickHandler) {
    this.isGoodCard = isGoodCard;
    this.isClicked = false;
    this.cardClickHandler = cardClickHandler;
    this.alreadyClicked = false;
  }

  //카드버튼 생성. 개수는? 
  createCardBtn() {
    const btn = document.createElement('button');
    btn.className = "card"; //html -> css
    //btn.innerText = "카드입니다";

    btn.addEventListener('click', () => {
      if (!this.isClicked && !this.alreadyClicked) {
        this.isClicked = true;
        this.WhenCardClick(btn);
        this.cardClickHandler(this);
      }
    });

    return btn;
  }

  WhenCardClick(btn) {
    //if (this.alreadyClicked) return; //이미 고른 카드는 고르지 말고 종료해라.
    //this.alreadyClicked = true;
    //this.remainingChances--; //아 여기서 계속 2->1 로 줄어들어서 문제 발생.  

    //'당첨!' 혹은 '꽝' 문구 생성. 
    const clickMessage = this.createClickMessage();
    btn.innerText = clickMessage;
  }

  createClickMessage() {
    return this.isGoodCard ? '당첨!' : '꽝'; //삼항연산자 사용.
  }
}

export default Card;