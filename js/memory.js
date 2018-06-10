console.log('Memory Game');




let memory_game = {
    init: function(){
        let cardsColor = ['red','blue','yeellow','green','pink','orange','brown','light_blue','violet','red','blue','yeellow','green','pink','orange','brown','light_blue','violet'];
        this.adding_cards(cardsColor);
    },
    adding_cards: function(arr){
        console.log('adding cards')
        let memory_box = document.querySelector('.memory_box');
        for(let i=0;i<arr.length;i++){
            let card = document.createElement('div');
            card.classList.add('card');
            memory_box.appendChild(card);
        }
        this.random_cards(arr);
    },
    random_cards:function(arr){
        let cards = document.querySelectorAll('.card');
        cards.forEach(function(card){
            const position = Math.floor(Math.random() * arr.length);
            card.classList.add(arr[position]);
        })
    }
}


memory_game.init();