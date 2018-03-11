//Animacja w js vs JQ
    //btn1-----------------------------------
    let btn1 = document.querySelector('.btn1'),
        box = document.querySelector('.box'),
        move = document.querySelector('.move1');
        moveWidth = move.offsetWidth;
        box1Width = box.offsetWidth-moveWidth-11;
        box.style.borderWidth = 30

    btn1.addEventListener('click', function(){
        animateLeft(1000,box1Width);
    });

    function animateLeft(duration, end){
        const move = document.querySelector('.move1');
        const frameRate = 1000/60;
        const perFrame = end/(duration/frameRate);

        function update(){
            const currentLeft = parseInt(getComputedStyle(move).left,10);
            move.style.left = currentLeft + perFrame + 'px';
            if (parseInt(getComputedStyle(move).left,10) <= end){
                setTimeout(update,frameRate);
            }
        }
        setTimeout(update,frameRate)
    }


    //btn2-----------------------------------
    let btn2 = document.querySelector('.btn2'),
        move2 = document.querySelector('.move2');
    move2Width = move2.offsetWidth;
    box2Width = box.offsetWidth-moveWidth-11;
    box.style.borderWidth = 30
    btn2.addEventListener('click', function(){
        animateLeft2(1000,box2Width);
    });

    function animateLeft2(duration, end){
        const move2 = document.querySelector('.move2'),
            frameRate = 1000/60,
            perFrame = end/(duration/frameRate);
        function update(){
            const currentWidth = move2.offsetWidth;
            move2.style.width = currentWidth + perFrame + 'px';
            if (currentWidth < end){
                setTimeout(update,frameRate);
            }
        }
        setTimeout(update,frameRate)
    }
    //btn3-----------------------------------
    $('.btn3').on('click', function(){
        $('.move3').animate({
            width: $('.box').width(),
            "easing": "easein"
        },{
            duration : 3000
        })
    })



///----------------------------------------------------arries exerices---------------------
    function reverseString(str){
        var newWord = '';
        // for(var i=str.length-1;i>=0;i--){
        //     newWord+=str[i];
        // }
        // console.log(newWord);

        // var dom = str.split("").reverse().join("");

        // console.log('dom',dom);

        str.toString().split('').forEach(function(char){
            newWord = char + newWord;
        })

        // console.log(newWord)
    }
    // reverseString(123);
    function isPalindrome(word){
        var word2 = word.split('').reverse().join('');
        return word2 === word;
    }
    const doo = isPalindrome('toot');

    function firstBigLetter(sent){
        // var newWord = sent.toLowerCase().split(' ');
        // for(var i=0; i<newWord.length; i++){
        //     newWord[i] = newWord[i].substring(0,1).toUpperCase() + newWord[i].substring(1);
        // };
        // console.log(newWord.join(' '));

        return sent
            .toLowerCase()
            .split(' ')
            .map(function(word){
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
    }
    // console.log(firstBigLetter('i lovE you and your JS'));
    function longestWord(sen){
        // let newArr = sen.toLowerCase().match(/[a-z0-9]+/g);
        let newArr = sen.toLowerCase().split(' ');
        newArr.sort(function(a,b){
            return b.length - a.length;
        })
        let manyWord = newArr.filter(function(word){
            return word.length === newArr[0].length;
        })
        console.log(manyWord);
    }
    // console.log(longestWord('lubie jezdzic rowerem pod górke!'));
    // longestWord('lubie jezdzicc roweremm podddddd gorke!');
    // let obiekt2 = {};
    // obiekt2.dom = 30;
    // obiekt2.dom2 = 30;
    // console.log(obiekt2);
    // var lap = "Jade s-obie ro@werem przez, miaso so so so!";
    // var reg = lap.toLowerCase().match(/[a-z0-9]+/g);
    // var reg2 = [1,2,3,4];
    // console.log(reg);
    // console.log(reg2);

// -----------------------------------------------Cwiczenia z stringami -------------------
    var car = 'Samochod';
    var zmiana = "X";
    var liczba = 130.5654321;

    // var pokaz = car.charAt(0);
    // var pokaz = car.indexOf("d");
    // var pokaz = car.replace("d", zmiana);
    // var pokaz = car.slice(3,6);
    // var pokaz = car.split("");
    // var pokaz = car.substr(3,3);
    // var pokaz = car.toUpperCase();
    // let pokaz = liczba.toFixed(3);
    // let pokaz = liczba.toPrecision(4);
    // let pokaz = liczba.toFixed(4);
    // let pokaz = liczba.toString();
    liczba += 120;

    // console.log(typeof Number(pokaz));
    // console.log(typeof liczba);
    // let numberr = 10;
    // ++numberr;
    // console.log(numberr); 
//--------------------------Skrócona wersja funkcji -----------------------------------
    // if(liczba > 100){
    //     console.log('wieksza');
    // }
    // else{
    //     console.log('mniejsza');
    // }
    // liczba > 100 ? console.log('wieksza') : console.log('mniejsza');
    // let jakaLiczba = liczba < 100 ? 'wieksza' : 'mniejsza';
    // console.log(jakaLiczba);

    //brake--------
    // for (let i=0; i<10; i++){
    //     if(i%2 == 0){
    //         console.log(`liczba ${i} jest podzielna przez 2`);
    //     }
    //     else if(i == 3){
    //         console.log('dupa');
    //         break
    //     }
    // }

//-------------------------Obiekty------------------------------------
    var osoba = {
        imie: "jan",
        nazwisko : 'kowalski',
        wiek : 34,
        zmiana:function(){
            console.log(`Witam!! Jestem ${this.imie} ${this.nazwisko} i mam ${this.wiek}lat`);
        }
    }
    // delete osoba.wiek;
    // for( var char in osoba){
    //     console.log(osoba[char]);
    // }
    // osoba.zmiana();


//---------------------tablice---------------------------------------------
    var tablica = ['dom','rower','auto','samolot','komputer'];
    // var tablica2 = ['dom2','rower2','auto2','samolot2','komputer2'];

    function dodaj(tab){
        return tab.map(function(el){
            return el+2;
        })
    }

    let xx = dodaj(tablica);
    // console.log(xx)
    // tablica.push('telefon');
    // tablica.unshift('monitor');
    // tablica.pop()
    // tablica.shift();
    // console.log(tablica);
    // console.log(tablica.length);

    let razem = tablica.concat(xx);
    // console.log(razem);
    // var a1 = razem.indexOf('rower');
    // console.log(a1);
    // var a2 = razem.join('-');
    // console.log(a2);
    // var a3 = razem.filter(function(el){
    //     if(el.length <6){
    //         return el;
    //     }
    // })
    // let a4 = razem.reverse();
    // console.log(a4)

    // console.log(a3);

    // let a5 = razem.sort(function(a,b){
    //     return b-a;
    // });

    // console.log(a5)

    // var a6 = razem.slice(0,4);
    // console.log(a6)

    // let dom = '132.34dd my';

    // let a7 = parseInt(dom);
    // let a7 = parseFloat(dom);
    // let a7 = parseFloat(dom);
    // console.log(a7);

    let full = 3.5421;
    // let a8 = Math.abs(full);//3.5421
    // let a8 = Math.ceil(full);//4
    // let a8 = Math.floor(full);//3
    // let a8 = Math.round(full);//4
    // let a8 = Math.sqrt(full);//1,882046
    // let a8 = Math.pow(full,2);//1,882046
    // let a8 = Math.floor(Math.random()*100);
    // let a8 = Math.floor(Math.random()*100);

    let data = new Date();

    // let a9 = data.getFullYear();
    // let a9 = data.getDate();
    let a9 = data.toString();

    console.log(data);
    console.log(a9);

//---------------Wyłapywanie błędów----------------------