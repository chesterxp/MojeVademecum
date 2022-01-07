//Table of Contents------------------------------------------------------------------------------------

//DebugMode
//turn off cors at fetch
//keydown - e.which
//generate timestamp [other]
//Arrow functions [other]
//JSON methods [JSON]
//Switch [other]
//various functions trim/padStart/Round/Floor/ceil/ParseInt [native methods]
//Arrow function scope/this [other]
//Callback functions use bind/this [other]
//Random number from range [other]
//Repeat console.log [console.log]
//String methods [string]
//Custoom sort [other]
//Async/await function [other]
//Separators in numbers [other]
//Conditional Operand Selectors [other]
//Use strict [other]





console.log('JavaScript training');
//DebugMode-----------------------------------------------------------------------------------
function debugMode(){
    const DEBUG_MODE = true;
    if(DEBUG_MODE){
        debugger;
    }

    console.log('Debug mode');
}
// debugMode();

//turn off cors at fetch
function turnOffFech(){
    document.querySelector('.btn').addEventListener('click', getData);

    function getData() {
        // fetch('http://localhost:5001/projekt2-4c9a7/us-central1/helloWorld',
        //     {
        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //           },
        //     })
        //     .then(function (res) {
        //         return res.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     })
        fetch("https://restcountries.eu/rest/v2/name/Poland")
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            flaga(res)
        })
    
    
        function flaga(data){
            console.log('zwrocone dane')
            console.log(data[0].flag);
            const flag = document.createElement('img');
            flag.classList.add('flaga');
            flag.src = data[0].flag;
            document.querySelector('body').append(flag);
        }
    }
}
// turnOffFech();

//current target
function currentTarget(){
    const btn1 = document.querySelector('.btn1');
    console.log('btn1', btn1);
    btn1.addEventListener('click', showInfo.bind(this));
}
function showInfo(e){
    // e.stopPropagation();
    console.log(e);
    console.log('target', e.target);
    console.log(e.target.dataset.city);
    console.log('currentTarget', e.currentTarget);
    console.log(e.currentTarget.dataset.city);
    e.target.classList.add('luki')
}
// currentTarget();

//keydown - e.which
function inputInfo(){
    const input = document.querySelector('.luki1');
    input.addEventListener('keydown', checkInfo.bind(this));
}
function checkInfo(e){
    console.log(e);
    console.log(e.which);//kod symbolu(literki)
}
// inputInfo();

//generate timestamp [other]
function timestampLuki(){
    let time1 = Date.now();
    let time = new Date();
    let time2 = time.valueOf();

    console.log(time1);//ten sam czas w milisekundach
    console.log(time2);//ten sam czas w milisekundach
}
// timestampLuki();

//Arrow functions [other]
function arrowFunction1(){
    const object = {
        name: 'luki',
        surname: 'big'
    }

    const l1 = () => ({ 'name': 'luki', 'surname': 'big'});
    console.log(l1());
    const l2 = () => object;
    console.log(l2());
}
// arrowFunction1();


//JSON methods [JSON]
function trainingJSONLuki(){
    const baseObject = {
        name: 'luki',
        surname: 'big',
        age: 30,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        films:['Matrix','Vikings','Mr Robot']
    }
    const newJSON = JSON.stringify(baseObject, null, 2)
    console.log('BASE----', newJSON);//cały obiekt sparsowany do JSON
    const newJSON2 = JSON.stringify(baseObject,['name','age','films','cars'], 2)
    console.log('Selected', newJSON2);//wyciągnięte tylko prop z tablicy

    function replace(key, val){
        if(typeof val === 'string'){
            return 'luki'
        } else{
            return val;
        }
    }
    const newJSON3 = JSON.stringify(baseObject, replace, 2)
    console.log('newJSON3', newJSON3);//wartości które sa stringami zmieniają sie na 'luki'

    const newJSON4 = JSON.stringify(baseObject,null, 2)
    console.log('newJSON4', newJSON4);//ładna prezentacja danych JSON
}
// trainingJSONLuki()

//Switch [other]
function switchStatementsLuki1(){
    const arr = [
        { code: 200, text: "Everythink is ok"},
        { code: 201, text: "Everythink is ok"},
        { code: 300, text: "Not modified"},
        { code: 400, text: "No webpage"},
        { code: 403, text: "No webpage"},
        { code: 404, text: "No webpage"},
        { code: 500, text: "Serwer error"},
        { code: 600, text: "No existing code"}
    ]
    const number = Math.floor(Math.random() * arr.length);
    const result = arr[number];

    switch(result.code){
        case 200:
        case 201:
            console.log(result.code, result.text);
            break;
        case 300:
            console.log(result.code, result.text);
            break;
        case 400:
        case 403:
        case 404:
            console.log(result.code, result.text);
            break;
        case 500:
            console.log(result.code, result.text);
            break;
        default:
            console.log(result.code, result.text);
    }
}
// switchStatementsLuki1();


//various functions trim/padStart/Round/Floor/ceil/ParseInt [native methods]
function variousFunctions(){
    const str1 = 'Luki';
    const str2 = '       Luki         ';
    const log = console.log;
    log(str2.trim(), 'x');//Luki x
    log(str2.trimLeft(), 'x');//Luki          x
    log(str2.trimRight(), 'x');//       Luki x
    log(str1.padStart(15));//           Luki
    log(str1.padStart(15, '--------'));//-----------Luki
    log(str1.padEnd(15, '--------'));//Luki-----------

    const numberr = 3.14;

    log(Math.round(numberr));//3
    log(Math.floor(numberr));//3
    log(Math.ceil(numberr));//4
    log(numberr.toFixed(3));//3.140
    log(numberr.toFixed(1));//3.1

    const str3 = '3.14 Luki';

    log(parseInt(str3));//3
    log(parseFloat(str3));//3.14
}
// variousFunctions();

//Arrow function scope/this [other]
function arrowFunctionScope(){
    const obj = {
        name: 'Luki',
        age: 18,
        prop1: function(){
            console.log('obj1', obj);
            console.log('this', this);
        },
        prop2(){
            console.log('obj2', obj);
            console.log('this', this);
        },
        prop3: () => {
            console.log('obj2', obj);
            console.log('this', this);
        }
    }

    console.log('prop1');//obj1 Object this Object
    obj.prop1();
    console.log('prop2');//obj2 Object this Object
    obj.prop2();
    console.log('prop3');//obj3 Object this Window
    obj.prop3();

    console.log(Object.entries(obj));
    console.log(Object.entries(obj).length);
}
// arrowFunctionScope();

//Callback functions use bind/this [other]
function callBackFunction(){
    function luki1(num, str){
        console.log(`Number: ${num}, string: ${str}`);
        console.log(this);
    }

    const baseObject = {
        name: 'Luki',
        cars: 2,
        methodLuki: function(fn){
            fn();
        }
    }

    baseObject.methodLuki(luki1.bind(this, 13, 'Hello'));//wywołuje funkcje z parametrami, this = window
    luki1.call(this, 15, 'luki15');//wywołanie funkcji z parametrami, this = window
    luki1.call(baseObject, 16, 'luki16');//wywołanie funkcji z parametrami, this = obiekt baseObject

    luki1.apply(this, [17, 'luki17']);//wywołuje funkcje z parametrami, this = window
    luki1.apply(baseObject, [17, 'luki17']);//wywołuje funkcje z parametrami, this = window
}
// callBackFunction()

//Random number from range [other]
function randomNumberFromRange(min, max){
    console.log(Math.floor((Math.random() * (max-min-1)) + min));
}
// randomNumberFromRange(10, 50);

//Repeat console.log [console.log]
function repeatSentence(){
    console.log('-xxx-'.repeat(100));
}
// repeatSentence();

//String methods [string]
function substringLuki1(){
    //str.substring(from, to);
    //str.substr(from, length)

    const str = 'Jakies ladne, nowe zdanie wielokrotnie zlozone';

    log = console.log;

    log('1',str.substring(16, 18)); //text od 16 do 18
    log('2',str.substring(16, 0));//text od 0 do 16
    log('3',str.substring(16));//text od 16 do konca

    log('4', str.substr(16, 18)); //text od 16 i zwraca 18 znaków
    log('5', str.substr(16, 0));//nic nie zwraca
    log('6', str.substr(16));//text od 16 do konca
    log('7', str.substr(-16, 10));//nic od 16 od konca indexu zwraca kolejne 10 znaków

}
// substringLuki1();

//Custoom sort [other]
function customSort1(){
    let log = console.log;
    let numbers = [40,16,67,345,22,23,142,63,59,283];
    const result = numbers.sort((a,b)=>{
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        } else{
            return 0;
        }
    })
    console.log('Luki1 sort numbres', result); //[16, 22, 23, 40, 59, 63, 67, 142, 283, 345]

    let people = [
        {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
        {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
        {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
        {"id":258, "name":"Pris", "email":"pris@replicant.io"}
    ];
    const result2 = people.sort((a,b)=>{
        if(a.id > b.id){
            return 1;
        } else if(a.id < b.id){
            return -1;
        } else{
            return 0;
        }
    })

    console.log('Luki2 sort prop at object', result2);
    //{id: 123, name: 'Rick Deckard', email: 'rick@bladerunner.org'}
    //{id: 258, name: 'Pris', email: 'pris@replicant.io'}
    //{id: 456, name: 'Roy Batty', email: 'roy@replicant.io'}
    //{id: 789, name: 'J.F. Sebastian', email: 'j.f@tyler.com'}
}
// customSort1();

//Async/await function [other]
function asyncAwiatFunction(){
    async function promiseLuki1(){
        let p = await delay(2000, true).catch((error)=>{console.log('error', error);});
        const x = p * 100;
        console.log('xxxx', x);
    }
    function delay(ms, type){
        return new Promise((resolve, reject) =>{
            if(type){
                setTimeout(resolve, 3000, 55);
            } else {
                reject(new Error('Very bad error'));
            }
        })
    }

    promiseLuki1();
}
// asyncAwiatFunction();

//Separators in numbers [other]
function separatorsNumbers(){
    const number1 = 100;
    const number2 = 100_000;
    const number3 = number1 + number2;//100100
    console.log('number1', number1);
    console.log('number2', number2);
    console.log('number3', number3);
}
// separatorsNumbers();

//Conditional Operand Selectors [other]
function conditionalOperandSelectors(){
    const log = console.log;

    const x = 14;
    const y = 15;
    const x2 = 'car';
    const y2 = 'movies';
    const x3 = -16;
    const y3 = -12;

    log(0 && true);//0 - zwraca fals lub wartośc false
    log(true && 0);//0
    log(0 && 14); //0
    log(-14 && 0); //0
    log(true && 1); //1 - jeżeli jedna i druga zmienna jest true zwracamy 2(ostatnia)
    log(1 && true); //true
    log(14 && 15);//15
    log('car' && 'movies');//movies
    log(-16 && -12);//-12 - jeżeli jedna i druga zmienna jest false zwracamy 2(ostatnia)
    log(-16 || -12);//-16 - jeżeli jedna i druga zmienna jest false zwracamy 1
}

//conditionalOperandSelectors();

//Use strict [other]
function useStricMode(){
    /**
     * Wykorzystanie modulu strice mode chroni przed:
     * wykorzystanie zmiennej która nie ma deklaracji let/const - wywali bład/info
     * poprawne działanie seal, freeze, preventExtencions czyli po włączeniu ww. opcji dalej mozemy działać na obiekcie ale nic sie nie zmieni(z strict mode wywali błąd)
     * wykorzystanie takich samych nazw zmiennych w deklaracji funkcji luki(a, b, a, c) - wywali bład
     * nie mozemy zadeklarowac dwoch takich samych funkcji lub zmiennych z let/const
     * nie wmozemy wykorzystac defaultowych nazw NaN, undefined itp 
     * jak nie zadeklarujemy jednej z funkcji set i get w obiekcie a ją wykorzysatmy to dostaniemy bład
     * jak stworzymy prop z opcja writtable: false i bedziemy probowac ja nadpisac to wywali bład
     */
}

//CharAt, codePoinAt
function checkChar(){
    const str = 'Luki is big :)';
    const log = console.log;
    const length = str.length;

    log(str.charAt(0));
    log(str.charAt(1));
    log(str.charAt(2));
    log(str.charAt(3));
    log(str.charAt(4));
    log(str.charAt(length-1));

    log('charAt', str.charAt(0))
    log('charCodeAt', str.charCodeAt(0))
    log('charAt', str.codePointAt(0))
    // charAt L
    // base.js:444 charCodeAt 76
    // base.js:445 charAt 76

    const char1 = String.fromCodePoint(128518);
    log('char', char1);//char 😆
}
checkChar();