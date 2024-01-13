import Shuffle from './Shuffle';

class CardGame {
    constructor(cardCount, initialChances) {
        this.cardClickHandler = this.cardClickHandler.bind(this);
        this.shuffle = new Shuffle(cardCount, this.cardClickHandler);
        this.initialChances = initialChances;
        this.clickedCard = null;
    }

    startGame() {
        const underRestartBtn = document.getElementById('RestartButton');
        underRestartBtn.innerHTML = '';
        this.remainingChances = this.initialChances;
        this.shuffle.shuffleCards();
        this.shuffle.displayCards();
        this.displayChances();
    }
    
    //1. Card.js에서 cardClickHandler() 안에 this안주고 이 메서드 사용해도 됨.
    /*cardClickHandler() {
        this.shuffle.cards.forEach(card => {
            if (card.isClicked) {
                if (card.isGoodCard) {
                    this.displayResult('(성공!) 게임이 종료되었습니다.')
                    this.createRestartBtn();
                } else if (!card.isGoodCard) {
                    this.giveExtraChance();
                }
            }
        })
    }*/

    //2.
    cardClickHandler(clickedCard) {
        //console.log(this);
        if (clickedCard.isClicked) {
            if (clickedCard.isGoodCard) {
                this.displayResult('(성공!) 게임이 종료되었습니다.')
                this.createRestartBtn();
            } else if (!clickedCard.isGoodCard) {
                this.giveExtraChance();
            }
        }
    }

    displayResult(result) {
        const resultDiv = document.getElementById('contents');
        resultDiv.innerText = result;
    }

    giveExtraChance() {
        this.remainingChances--;
        this.displayChances();
        if (this.remainingChances <= 0) {
            this.displayResult('(실패!) 게임이 종료되었습니다.');
            this.createRestartBtn();
        } else {
            this.displayChances();
        }
    }

    displayChances() {
        const chanceMessage = document.getElementById('contents');
        chanceMessage.innerText = `남은 횟수: ${this.remainingChances}`;
    }

    createRestartBtn() {
        const RestartBtn = document.createElement('button');
        RestartBtn.innerText = '재시작';
        RestartBtn.id = 'RestartBtn';

        /*const undercards = document.getElementById('cards');
        undercards.innerHTML = ''; // 
        undercards.appendChild(RestartBtn);*/

        const undercards = document.getElementById('RestartButton');
        undercards.innerHTML = ''; // 
        undercards.appendChild(RestartBtn);

        RestartBtn.addEventListener('click', this.WhenBtnClick.bind(this, RestartBtn));
    }

    WhenBtnClick() {
        this.restartGame();
    }

    restartGame() {
        this.startGame();
    }
}

export default CardGame;