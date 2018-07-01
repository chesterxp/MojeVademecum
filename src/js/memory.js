console.log('Memory Game');

let memory_game = {
    startTime: new Date().getTime(),
    activeCard: "",
    activeCards: [],
    gamePairs: 0,
    gameResult: 0,
    cards: [],

    init: function () {
        let cardsColor = ['red', 'blue', 'yeellow', 'green', 'pink', 'orange', 'brown', 'light_blue', 'violet', 'red', 'blue', 'yeellow', 'green', 'pink', 'orange', 'brown', 'light_blue', 'violet'];
        this.adding_cards(cardsColor);

    },
    //creating cards and adding them to html
    adding_cards: function (arr) {
        let memory_box = document.querySelector('.memory_box');
        for (let i = 0; i < arr.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');
            memory_box.appendChild(card);
        }
        this.random_cards(arr);
    },
    //drawing background for elements
    random_cards: function (arr) {
        let cards = document.querySelectorAll('.card');
        this.cards = [...cards];
        this.gamePairs = this.cards.length / 2;
        this.cards.forEach(function (card) {
            const position = Math.floor(Math.random() * arr.length);
            card.classList.add(arr[position]);
            arr.splice(position, 1);
        })
        this.hide_cards(this.cards);
    },
    //hide cards aftre 2s and start game
    hide_cards: function (arr) {
        setTimeout(function () {
            arr.forEach(function (card) {
                card.classList.add('hide');
                card.addEventListener('click', memory_game.clickCard);
            })
        }, 2000);
    },
    //click handler
    clickCard: function () {
        memory_game.activeCard = this;
        //blocking the second click
        if (memory_game.activeCard == memory_game.activeCards[0]) return;
        memory_game.activeCard.classList.remove('hide');
        //first click
        if (memory_game.activeCards.length === 0) {
            //adding element to activeCards like first click
            memory_game.activeCards[0] = memory_game.activeCard;
            return;
        }
        //secend click
        else {
            //remove event handler
            memory_game.cards.forEach(function (card) {
                card.removeEventListener('click', memory_game.clickCard);
            })
            //adding element to activeCards like second click
            memory_game.activeCards[1] = memory_game.activeCard;
            //hide cards after 0.5s
            setTimeout(function () {
                //min game - win
                if (memory_game.activeCards[0].className == memory_game.activeCards[1].className) {
                    memory_game.activeCards.forEach(function (card) {
                        card.classList.add('get');
                    })
                    //upgrade score
                    memory_game.gameResult++;
                    //change cards (without .get)
                    memory_game.cards = document.querySelectorAll('.hide');
                    //all game - win
                    if (memory_game.gamePairs == memory_game.gameResult) {
                        //time of game
                        const endTime = new Date().getTime();
                        const gameTime = (endTime - memory_game.startTime) / 1000;
                        alert('You Win!!!! It take\'s: ' + gameTime + ' seconds.');
                        //reload page
                        location.reload();
                    }
                }
                //i you dont strike
                else {
                    memory_game.activeCards.forEach(function (card) {
                        card.classList.add('hide');
                    })
                }
                //reset default variables
                memory_game.activeCard = '';
                memory_game.activeCards.length = 0;
                //adding event handler
                memory_game.cards.forEach(card => {
                    card.addEventListener('click', memory_game.clickCard);
                })
            }, 500)
        }
    }
}

memory_game.init();