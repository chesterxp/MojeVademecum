console.log('GAME - Hit the mole');
var hitTheMole = {
    holes: document.querySelectorAll('.hole'),
    scoreBoard: document.querySelector('.score'),
    moles: document.querySelectorAll('.mole'),
    second: document.querySelector('.second'),
    lastHole: "",
    timeUp: true, //czy upłynął czas gry
    score: 0, //wynik gry
    gameTime: 5, //czas trwania gry w sekundach
    lvl: {
        ease: {
            min: 500, max: 1000
        },
        medium: {
            min: 400, max: 800
        },
        hard: {
            min: 300, max: 600
        }
    }, //opcje lvl
    activeLvl: {
        min: 500,
        max: 1000
    },  //wybrany lvl przez gracza
    users:[
    ],
    
    init: function(){
        hitTheMole.addBonkEvent();
        hitTheMole.addTurnOffGOEvent();
        hitTheMole.restartTime();
        hitTheMole.addActiveEvent();
        hitTheMole.makeObjectFromLocalStorage();
    },
    //uderzenie kreta
    addBonkEvent: function(){
        hitTheMole.moles.forEach(function(mole){
            mole.addEventListener('click',hitTheMole.bonk);
        })
    },
    //wyłączenie popup game over
    addTurnOffGOEvent: function(){
        document.querySelector('.gameOver').addEventListener('click', function(){
            this.classList.remove('showGO');
        })
    },
    //event dla guzików od poziomu (nie działa podczas rozgrywki);
    addActiveEvent: function(){
        var btns = document.querySelectorAll('.level .btn');
        btns.forEach(function(btn){
            btn.addEventListener('click', function(){
                if(hitTheMole.timeUp){
                    hitTheMole.removeActive(btns);
                    hitTheMole.changeLevel(btn.dataset.lvl)
                    this.classList.add('active');
                }
            })  
        })
    },
    //zmiana lvl rozgrywki
    changeLevel: function(lvl){
        switch(lvl){
            case 'easy':
                this.activeLvl.min = this.lvl.ease.min;
                this.activeLvl.max = this.lvl.ease.max;
                break;
            case 'medium':
                this.activeLvl.min = this.lvl.medium.min;
                this.activeLvl.max = this.lvl.medium.max;
                break;
            case 'hard':
                this.activeLvl.min = this.lvl.hard.min;
                this.activeLvl.max = this.lvl.hard.max;
                break;
        }        
    },
    //usunięcie klasy active z guzików od zmiany lvl
    removeActive: function(btns){
        btns.forEach(function(btn){
            btn.classList.remove('active');
        })
    },
    //losowanie czasu (pokazywania sie kreta)
    randomTime: function(min,max){
        return Math.round(Math.random() * (max - min) + min);
    },
    //losowanie miejsca w którym pokaże się kret
    randomHole: function(holes){
        const idx = Math.floor(Math.random()*holes.length);
        const hole = holes[idx];
        if(hole === this.lastHole){
            return this.randomHole(this.holes);
        }
        this.lastHole = hole;
        return hole;
    },
    //pokazania kreta co losowy czas
    showMole: function(){
        const time = this.randomTime(hitTheMole.activeLvl.min, hitTheMole.activeLvl.max);
        const hole = this.randomHole(this.holes);
        hole.classList.add('up');
        setTimeout(function(){
            hole.classList.remove('up');
            if(!hitTheMole.timeUp){
                hitTheMole.showMole();
            }
        },time);
    },
    //event z trafieniem kreta
    bonk: function(e){
        var self = e.target;
        if(!e.isTrusted) return;
        if(!self.classList.contains('hit')){
            hitTheMole.score++;
        }
        self.classList.remove('up');
        self.classList.add('hit');
        //usunięcie klasy hit po upływie time
        setTimeout(function(){
            self.classList.remove('hit');
        },400)
        hitTheMole.scoreBoard.textContent = hitTheMole.score;
    },
    //funkcje starowe gry oraz reset wyników z zakończonej rozgryki
    startGame: function(){
        if(!hitTheMole.timeUp) return;
        var login = document.querySelector('#login').value;
        if(login.length < 2){
            hitTheMole.showError();
        }
        else{
            hitTheMole.scoreBoard.textContent = 0;
            hitTheMole.timeUp = false;
            hitTheMole.showMole();
            hitTheMole.score = 0;
            hitTheMole.timer();
        }
    },
    //odliczanie czasu do zakończenia rozgrywki
    timer: function(){
        var time = this.gameTime;
        var timeToEnd = setInterval(timeCountdown,1000);
        function timeCountdown(){
            time--;
            if(time < 10){
                time = '0'+time;
            }
            hitTheMole.second.textContent = time;
            if(time==0){
                hitTheMole.timeUp = true;
                clearInterval(timeToEnd);
                document.querySelector('.gameOver').classList.add('showGO');
                hitTheMole.addingPlayerData();
                hitTheMole.restartTime();
                
            }
        }
    },
    //reset czasu 
    restartTime: function(){
        if(hitTheMole.gameTime< 10){
            hitTheMole.second.textContent = '0'+this.gameTime;
        }
        else{
            hitTheMole.second.textContent = this.gameTime;
        }
    },
    //dodanie danych do users i localstorage
    addingPlayerData: function(){
        var player = {};
        player.name = document.querySelector('#login').value;
        player.score = document.querySelector('.score').textContent;
        hitTheMole.users.push(player);
        hitTheMole.generateRankingList(hitTheMole.users);
        hitTheMole.addingRankingToLocalStorage();
    },
    //pokazanie błędu
    showError: function(){
        document.querySelector('.errorInput').classList.add('showError');
    },
    //dodanie graczy do localstorage
    addingRankingToLocalStorage: function(){
        window.localStorage.setItem('HitTheMole', JSON.stringify(hitTheMole.users));
    },
    //utworzenie bazy użytkowników z localstorage
    makeObjectFromLocalStorage: function(){
        var usersFromLS = JSON.parse(window.localStorage.HitTheMole);
        for(var i=0;i<usersFromLS.length;i++){
            var user = {};
            user.name = usersFromLS[i].name;
            user.score = usersFromLS[i].score;
            hitTheMole.users.push(user);
        }
        hitTheMole.generateRankingList(hitTheMole.users);
    },
    //generowanie listy wyników
    generateRankingList: function(list){
        var rankingList = document.querySelector('.rankingList');
        rankingList.innerHTML = "";
        for(var i=0;i<list.length;i++){
            var player = document.createElement('div');
            player.classList.add('player');
            player.innerHTML = 
                `<div class="numberOfranking">${i+1}</div>
                 <div class="nameOfplayer">${list[i].name}</div>
                 <div class="resultOfgame">${list[i].score}</div>`;
            rankingList.appendChild(player);
        }
    }
}
hitTheMole.init();

document.querySelector('#startGame').addEventListener('click',hitTheMole.startGame);