//Animacja w js vs JQ
/*
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

*/

///--------------arries exerices---------------------
function reverseString(str) {
    var newWord = '';
    // for(var i=str.length-1;i>=0;i--){
    //     newWord+=str[i];
    // }
    // console.log(newWord);

    // var dom = str.split("").reverse().join("");

    // console.log('dom',dom);

    str.toString().split('').forEach(function (char) {
        newWord = char + newWord;
    });

    // console.log(newWord)
}
// reverseString(123);
function isPalindrome(word) {
    var word2 = word.split('').reverse().join('');
    return word2 === word;
}
// const doo = isPalindrome('toot');

function firstBigLetter(sent) {
    // var newWord = sent.toLowerCase().split(' ');
    // for(var i=0; i<newWord.length; i++){
    //     newWord[i] = newWord[i].substring(0,1).toUpperCase() + newWord[i].substring(1);
    // };
    // console.log(newWord.join(' '));

    return sent
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}
// console.log(firstBigLetter('i lovE you and your JS'));
function longestWord(sen) {
    // let newArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    let newArr = sen.toLowerCase().split(' ');
    newArr.sort(function (a, b) {
        return b.length - a.length;
    });
    let manyWord = newArr.filter(function (word) {
        return word.length === newArr[0].length;
    });
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

// ---------------Cwiczenia z stringami -------------------
// var car = 'Samochod';
// var zmiana = "X";
// var liczba = 130.5654321;

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
// liczba += 120;

// console.log(typeof Number(pokaz));
// console.log(typeof liczba);
// let numberr = 10;
// ++numberr;
// console.log(numberr); 
//----------------Skrócona wersja funkcji -----------------------------------
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

//----------------Obiekty------------------------------------
var osoba = {
    imie: "jan",
    nazwisko: 'kowalski',
    wiek: 34,
    zmiana: function () {
        console.log(`Witam!! Jestem ${this.imie} ${this.nazwisko} i mam ${this.wiek}lat`);
    }
};
// delete osoba.wiek;
// for( var char in osoba){
//     console.log(osoba[char]);
// }
// osoba.zmiana();


//---------------tablice---------------------------------------------
var tablica = ['dom', 'rower', 'auto', 'samolot', 'komputer'];
// var tablica2 = ['dom2','rower2','auto2','samolot2','komputer2'];

function dodaj(tab) {
    return tab.map(function (el) {
        return el + 2;
    });
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


let tablica3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunkArray(arr, number) {
    let bigArr = [];
    let i = 0;

    while (i < arr.length) {
        bigArr.push(arr.slice(i, i + number));
        i += number;
    }
    console.log(bigArr);
}
// chunkArray(tablica3,3);
//cwiczenie z łączeniem 
//solution 1
let tablica4 = [
    [1, 2, 3, 5, 2],
    [1, 3, 4],
    [3, 1, 5, 6],
    [7, 8, 9],
    [9]
];

function polacz(arr) {
    let newArr = [];
    for (var i = 0; i < tablica4.length; i++) {
        for (var j = 0; j < tablica4[i].length; j++) {
            newArr.push(tablica4[i][j]);
        }
    }
    console.log('1 opcja', newArr);
}

// polacz(tablica4);
//solution 2
function polacz2(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(b);
    });
}

// console.log('2 opcja',polacz2(tablica4));
//solution 3 - do nauczenia !!!!xp!!!!!
function polacz3(arr) {
    return [].concat.apply([], arr);
}
// console.log('3 opcja',polacz3(tablica4));
//solution 4 - do nauczenia !!!!xp!!!!!
function polacz3(arr) {
    return [].concat(...arr);
}
// console.log('4 opcja',polacz3(tablica4));


function polacz5(arr) {
    return [].concat(...arr);
}
let tablica5 = [
    ['dom'],
    [1, 3, 4],
    [3, 1, 5, 6],
    [7, 8, 9],
    [9]
];
// console.log('Przykład',polacz5(tablica5))

//isAnagram

function isAnagram(str1, str2) {
    let result = modyfikacja(str1) === modyfikacja(str2);

    if (result === true) {
        console.log(`Wyrazy ${word1} oraz ${word2} są anagramem`);
    } else {
        console.log(`Wyrazy ${word1} oraz ${word2} nie są anagramem`);
    }

}

function modyfikacja(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

let word1 = "doma",
    word2 = "moda";

// isAnagram(word1,word2);


//szefrowanie wiadomosci
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
        if (char === 'z' || char === "Z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
        return vowel.toUpperCase();
    });
    return newStr;
}

// console.log(letterChanges('Siema co ty tam'));

//--------------Ćwiczenia z Math-----------------
let full = 3.5421;
// let a8 = Math.abs(full);//3.5421
// let a8 = Math.ceil(full);//4
// let a8 = Math.floor(full);//3
// let a8 = Math.round(full);//4
// let a8 = Math.sqrt(full);//1,882046
// let a8 = Math.pow(full,2);//1,882046
// let a8 = Math.floor(Math.random()*100);
// let a8 = Math.floor(Math.random()*100);

//----------------Cwiczenia z Date()-------------------
let data = new Date();

// let a9 = data.getFullYear();
// let a9 = data.getDate();
let a9 = data.toString();

// console.log(data);
// console.log(a9);

//---------------Wyłapywanie błędów----------------------
// try {
//     let domy = "Opel Astra";
//     // console.log(dom);
// }
// catch(e){
//     console.log(e);
// }
// // console.log('koniec');

// function powitaj(imie){
//     if(!imie){
//         throw new Error('Imie nie zostało podane')
//     }
//     else{
//         return `Cześć ${imie}`
//     }
// }

// powitaj();
// console.log('nie ma imienia')

//----------------window.navigator-------------------

// console.log(window.navigator.appCodeName);
// console.log(window.navigator.language);
// console.log(window.navigator.appVersion);
// console.log(navigator.userAgent);
// console.log(window.navigator);
//----------------window.screen-------------------
// console.log(screen);
// console.log('width',screen.width);
// console.log('height',screen.height);
// console.log('-------------------------')
// console.log('orientation', screen.orientation.type);
// console.log('colorDepth', screen.colorDepth);

//----------------window.location-------------------
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);

//----------------setTimeout-------------------
function timer() {
    let timer = setInterval(pokazLog, 1000);
    let liczbaa = 100;

    function pokazLog() {
        console.log('setInterval działa: ', liczbaa);
        liczbaa++;
    }

    setTimeout(function () {
        console.log('koniec');
        clearInterval(timer);
    }, 10000);
}
//-----------------szerokość ---------wysokość-----offsetWidth
/*
let box2 = document.getElementById('box2');
//offsetTop;
//offsetLeft;
let top4 = box2.offsetWidth;//szerokość z padingiem i borderem
let top5 = box2.offsetHeight;//wysokość jw
let top6 = box2.clientWidth;//szerokośc bez bordera
let top7 = box2.clientHeight;//wysokośc bez bordera
let top8 = innerWidth;//szerokość okna przeglądarki
let top9 = innerHeight;//wysokośc okna przeglądarki
let top10 = box2.scrollTop;//wysokośc okna przeglądarki

// console.log(top10);

let btnX2 = document.getElementById('btnX2');
btnX2.addEventListener('click',function(){
    scrollTop : 100;
    console.log('klik btnX2')
})
*/
//----------------zadania z DOM-------------------
/*
let lapek = document.getElementsByName('klikk');
// console.log(lapek);

let all = document.querySelector('.mainTitle')
all.style.border = '2px solid black';

let buttons = document.querySelector('.buttons');
// buttons.querySelectorAll('.btn').forEach(function(el){
//     el.style.background  = "pink";
// })
// console.log(buttons.innerHTML);
// console.log(buttons.outerHTML);
// console.log(buttons.textContent);
let nowyEl = document.createElement('div');
nowyEl.className = 'btn btn9';
nowyEl.innerText = "Nowy guzik";
// nowyEl.innerHTML = `< class="btn btn9">Nowy guzik`;
let btn3 = document.querySelector('.btn3');
buttons.appendChild(nowyEl)
// buttons.insertBefore(nowyEl,btn3);
// buttons.replaceChild(nowyEl,btn3)
// buttons.removeChild(btn3)
let a10 = buttons.children;
// console.log(a10);
let a11 = document.querySelector('#footer');
a11.setAttribute('name2','wow');
let a12 = a11.getAttribute('name');
// console.log(a12);
// if(a11.hasAttribute('namee')){
//     console.log('Ma klase name');
// }
// else{
//     console.log('nie ma name');
// }

let btnX = document.getElementById('btnX');
btnX.addEventListener('click', function(){
    // console.log('kliknij')
    btnX.classList.toggle('foo');
})
btnX.style['margin-bottom'] = '100px';
// console.log(window.getComutedStyle(btnX))
// let a13 = window.getComputedStyle(btnX);
// console.log(a13);
*/

//co to jest capturing 
// function capturing(){
//     let div = document.getElementById('capturing');
//     let divs = div.getElementsByTagName('div');

//     // console.log(divs);
//     // for (let i=0;i<divs.length;i++){
//     //     divs[i].addEventListener('click', clickHandler);
//     //     divs[i].addEventListener('click', click2);
//     // }
//     function clickHandler(e){
//         // e.stopPropagation();

//         alert(this.getAttribute('id'));
//         e.stopImmediatePropagation();
//         // alert('testy');
//     }
//     //false -> babling od 3 2 1
//     //true -> capturing od 1 2 3
//     //e.stopPropagation(); -> odpala sie tylko funkcja na konkretnym elemencie. Nie działa na rodzicach elementy.
//     //e.stopImmediatePropagation(); -> zatrzymuje działanie innych funkcji wywoływanych kliknięciem

//     function click2(e){
//         alert('testy3');
//     }
// }


//kolejne
//cwiczenia z repeat/match i regularne
// let sent1 = "Jade sobie rowerem przez miasto I jem kanapki";
// let newSent1 = sent1.replace(/[a|i]/g, "A");
// let newSent1 = sent1.match(/[i]/gi).join("").toLowerCase().split('');
// let newSent1 = sent1.match(/[i|a]/gi);
// console.log(newSent1);

//var String.fromCharCode(65)
// let res = String.fromCharCode(68);
// console.log(res);
// let car2 = "MerceDes";
// let char = car2.charAt(1);
// console.log(char);

// let letter2 = car2.charCodeAt(5);
// console.log(letter2);

// let letter3 = String.fromCharCode(68);

//lazyload

// $('.lazy').lazy();

//------------------------------------
//babel

// let car = {
//     mark:"Opel",
//     model: "Astra",
//     engine: 1.3,
//     year: 2007,
//     color: "silver"
// }

// function firstFunInBabel(obj){
//     let htm2 = document.createElement('div'),
//         first = document.getElementById('first');

//     htm2.innerHTML = `I have car: ${obj.mark} ${obj.model} with engine ${obj.engine} from ${obj.year} year!`;
//     first.prepend(htm2);

//     let htm3 = 'akapit z prepend';
//     let htm4 = 'akapit z before';
// }

// firstFunInBabel(car);
//ie11 nie wspiera after
// let first2 = document.querySelector('#first');
// let htm3 = 'akapit z prepend';
// let htm4 = 'akapit z before';

// first2.prepend(htm3);
// first2.after(htm4);

// let element1 = document.querySelector('.element1');
// let dad = element1.parentNode;

// console.log(dad)

//data set
// let ele1 = document.querySelector('.ele1');
// let dataEle1 = ele1.dataset.lap;
// // ele1.classList.add('nowa');
// let dodajeKlase = document.querySelector('#dodajKlase');
// dodajeKlase.classList.add('nowa1')
// dodajeKlase.addEventListener('click', function(){
//     ele1.classList.toggle('nowa');
// })

// let ele2 = document.querySelector('.ele2');
// ele2.dataset.lap = "Nowe dodane dane do drugiego elementu";
// let dataEle2 = ele2.dataset.lap;
// console.log(dataEle2);

console.log('exerices');

function exericesWithCss() {
    let first = document.querySelector('#dodajKlase');
    first.style.background = '#222';
    first.style.color = '#fff';
    first.style['border-radius'] = '5px';
    // first.setProperty("font-size", "1.5rem");
    // console.log(first.getPropertyValue("background"));
    // console.log(first['background'])


    const style = window.getComputedStyle(first, null);
    console.log(style.getPropertyValue('height'));
    console.log(style.width);
    console.log(style['background-color']);
}

// exericesWithCss();

function funWithPhoto() {
    const img = document.querySelector('.tomato');
    img.style.transition = 'all 0.5s';
    console.dir(img);

    const obr = document.getElementById('obrazek');

    img.addEventListener('mouseover', function () {
        this.src = '../img/tomato2.jpg';
    });

    img.addEventListener('mouseout', function () {
        this.src = '../img/tomato.jpg';
    });
}


// funWithPhoto();

function img1() {
    const img = new Image();
    img.src = "../img/tomato2.jpg";
    // img.innerHTML = 'Test'

    const div = document.createElement('div');
    div.innerHTML = "Powinno byc zdjęcie";
    div.style.width = '400px';
    div.style.height = '300px';
    div.style['background-image'] = `url(${img.src})`;
    div.style['backgrouns-size'] = 'cover'; //lub contain jeżeli ma się całe mieścić w divie

    document.querySelector('.foto1').appendChild(div);
}

// img1();


function showWindow() {
    const show = document.querySelector('.showWindow');
    show.addEventListener('click', function () {
        //     window.open(
        //         'http://google.com', 
        //         'tytul-okna', 
        //         'toolbar=1,menubar=1,scrollbars=1,resizable=1,status=0,location=0,directories=1,right=20,top=20,height=500,width=700');
        // })

    });

    let time = new Date();

    console.log(time.getDate())
    console.log(time.getHours())
    console.log(time.getMinutes());
    console.log(time.getSeconds());
    console.log('dzien', time.getDate());
    console.log('month', time.getMonth() + 1);
    console.log(time.getFullYear());
    console.log('time', time);
}

// showWindow();


function whenMyBirthday() {
    const myBirthday = document.querySelector('.myBirthday');
    let currentDate = new Date();
    const year = 2018;
    const month = 6;
    const day = 16;
    const hour = 19;
    const minute = 51;
    // myBirthday.textContent = `<h2>Foto</h2>`;

    const destinationDate = new Date(year, month - 1, day, hour, minute);

    const diffrent = destinationDate - currentDate;
    console.log(diffrent);

    if (diffrent < 0) {
        console.log('działa?')
        myBirthday.textContent = 'Czas minął!!!';
        return;
    } else {
        console.log('liczenie')
        const dayInMS = 1000 * 60 * 60 * 24;
        const hourInMS = 1000 * 60 * 60;
        const minuteInMS = 1000 * 60;
        const secontInMs = 1000;

        const day2 = Math.floor(diffrent / dayInMS); //3

        const restOfhour = diffrent % dayInMS;
        const hour2 = Math.floor(restOfhour / hourInMS);

        const restOfMinutes = diffrent % hourInMS;
        const minute2 = Math.floor(restOfMinutes / minuteInMS);

        const restOfsecond = diffrent % minuteInMS;
        const second2 = Math.floor(restOfsecond / secontInMs);
        console.log(second2)

        myBirthday.innerHTML = `do twojego ulubionego dnia czyli ${destinationDate} zostało: ${day2} dni i ${hour2} godzin i ${minute2} minut i ${second2} sekund!`;

    }

    setTimeout(whenMyBirthday, 1000);
}

// whenMyBirthday();

function GetSum(a, b) {
    var arr = [];
    var total = 0;
    if (a == b) return a;
    else {
        var newArr = [...arguments];

        newArr.sort(function (a, b) {
            return a - b;
        })
        console.log('newArr', newArr[1])

        for (var i = newArr[0]; i <= newArr[1]; i++) {
            console.log(i)
            arr.push(i);
        }
        console.log('arr', arr)
        let t = arr.reduce(function (total, el) {
            console.log('total', total, 'el', el)
            return total += el;
        }, 0);

        console.log(t)
    }
}

// GetSum(-1,-1);
// console.log(GetSum(0,-3));


// var tablicaa = [-3,-2,-1,0,1,2,3];

// for(var i=-3;i<5;i++){
//     console.log(i);
// }

const c1 = [1, 2, 4, 6, 7, 3, 2, 4, 1];
console.log(Math.max(...c1));
const a1 = 3.12;
const a2 = 4.13;

console.log(Math.min(...c1));
const c2 = 'house';
const c2b = 'I love javascript';
// console.log(c2.charAt(0).toLocaleLowerCase());
const c3 = c2[0].toUpperCase() + c2.substr(1);
console.log(c3);
const c4 = c2.indexOf('o');
console.log(c4);
console.log(c2.split(''))
console.log(c2b.replace(/a/gi, 'X'));

const c5 = c2.length > 10 ? 'długi wyraz' : 'short word';
console.log(c5);

const b2 = 2;

switch (b2) {
    case 1:
        console.log('Brówna sie 1');
        break
    case 2:
        console.log('Brówna sie 2');
        break
    case 3:
        console.log('Brówna sie 3');
        break
    default:
        console.log('nie podałeś ile ma b')
}

function superSum() {
    if (arguments.length <= 4) {
        console.log('You have to enter more than 4 elements')
    } else {
        let arr = [...arguments];
        let result = arr.reduce(function (result, el) {
            return result += el;
        }, 0)
        console.log(result);
    }

}

// superSum(1, 2, 3, 4, 5, 6); //10


(function (v) {
    console.log(`Nazywam sie ${v}!`);
})(c2);


let scope = document.querySelector('.scope');

let scop1 = scope.querySelectorAll('.scop');
scop1.forEach(function (el) {
    el.style['color'] = "red";
});

function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}

setCookie('Anet', 'nice', 30);
setCookie('Anet', 'nicex2', 30);


const cookies = document.cookie.split(/; */);
const d1 = cookies[0];
const d2 = d1.split('=');

console.log(d2[0])

console.log(cookies);

function deleteCookie(name) {
    const data = new Date();
    data.setTime(date.getMonth() - 1);
    let name2 = encodeURIComponent(name);
    document.cookie = name2 + "=; expires=" + data.toGMTString();
}

function showCookie(name) {
    if (document.cookie != "") {
        const cookies = document.cookie.split(/; */);

        for (let i = 0; i < cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

// let d3 = showCookie('Anet')

// console.log(d3)