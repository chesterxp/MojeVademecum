'use strict';

console.log('GAME - Hit the mole');
var hitTheMole = {
    holes: document.querySelectorAll('.hole'),
    scoreBoard: document.querySelector('.score'),
    moles: document.querySelectorAll('.mole'),
    second: document.querySelector('.second'),
    lastHole: "",
    timeUp: true,
    score: 0,
    gameTime: 11,
    init: function init() {
        hitTheMole.addBonkEvent();
        hitTheMole.second.textContent = this.gameTime;
    },
    randomTime: function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    randomHole: function randomHole(holes) {
        var idx = Math.floor(Math.random() * holes.length);
        var hole = holes[idx];
        if (hole === this.lastHole) {
            console.log('Wylosowano tego samego kreta');
            return this.randomHole(this.holes);
        }
        this.lastHole = hole;
        return hole;
    },
    showMole: function showMole() {
        var time = this.randomTime(500, 1000);
        var hole = this.randomHole(this.holes);
        hole.classList.add('up');
        setTimeout(function () {
            hole.classList.remove('up');
            if (!hitTheMole.timeUp) {
                hitTheMole.showMole();
            }
        }, time);
    },
    startGame: function startGame() {
        if (!hitTheMole.timeUp) return;

        hitTheMole.scoreBoard.textContent = 0;
        hitTheMole.timeUp = false;
        hitTheMole.showMole();
        hitTheMole.score = 0;
        hitTheMole.timer();
    },
    timer: function timer() {
        var time = this.gameTime;
        hitTheMole.second.textContent = time;
        var czas = setInterval(minus, 1000);

        function minus() {
            time--;
            console.log(time);
            if (time < 10) {
                time = '0' + time;
            }
            hitTheMole.second.textContent = time;
            if (time == 0) {
                hitTheMole.timeUp = true;
                document.querySelector('#timer').innerHTML = 'GAME OVER';
                clearInterval(czas);
            }
        }
    },
    bonk: function bonk(e) {
        var self = e.target;
        if (!e.isTrusted) return;
        if (!self.classList.contains('hit')) {
            hitTheMole.score++;
        }

        self.classList.remove('up');
        self.classList.add('hit');
        setTimeout(function () {
            self.classList.remove('hit');
        }, 400);
        hitTheMole.scoreBoard.textContent = hitTheMole.score;
    },
    resetHit: function resetHit() {
        this.moles.forEach(function (mole) {
            mole.classList.remove('hit');
        });
    },
    addBonkEvent: function addBonkEvent() {
        hitTheMole.moles.forEach(function (mole) {
            mole.addEventListener('click', hitTheMole.bonk);
        });
    }
};
hitTheMole.init();

var startGame = document.querySelector('#startGame');
startGame.addEventListener('click', hitTheMole.startGame);
