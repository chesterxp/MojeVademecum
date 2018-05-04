console.log('hit the mole');
var hitTheMole = {
    holes: document.querySelectorAll('.hole'),
    scoreBoard: document.querySelector('.score'),
    moles: document.querySelectorAll('.mole'),
    lastHole: "",
    timeUp: true,
    score: 0,
    init: function(){
        hitTheMole.addBonkEvent();
    },
    poka: function(){
        console.log(this.holes);
    },
    randomTime: function(min,max){
        return Math.round(Math.random() * (max - min) + min);
    },
    randomHole: function(holes){
        const idx = Math.floor(Math.random()*holes.length);
        const hole = holes[idx];
        if(hole === this.lastHole){
            console.log('Wylosowano tego samego kreta');
            return this.randomHole(this.holes);
        }
        this.lastHole = hole;
        return hole;
    },
    showMole: function(){
        const time = this.randomTime(200, 1000);
        const hole = this.randomHole(this.holes);
        hole.classList.add('up');
        setTimeout(function(){
            hole.classList.remove('up');
            if(!hitTheMole.timeUp){
                hitTheMole.showMole();
            }
        },time);
        console.log(time, hole);
    },
    startGame: function(){
        hitTheMole.scoreBoard.textContent = 0;
        hitTheMole.timeUp = false;
        hitTheMole.showMole();
        hitTheMole.score = 0;
        setTimeout(function(){
            hitTheMole.timeUp = true;
        },10000);

    },
    bonk: function(e){
       if(!e.isTrusted){
            return ;
       }
       hitTheMole.score++;
       this.classList.remove('up');
       hitTheMole.scoreBoard.textContent = hitTheMole.score;
    },
    addBonkEvent: function(){
        hitTheMole.moles.forEach(function(mole){
            mole.addEventListener('click',hitTheMole.bonk);
        })
    }

}
hitTheMole.init();
let startGame = document.querySelector('#startGame');
startGame.addEventListener('click',hitTheMole.startGame);
console.log(hitTheMole.randomTime(200,3000));