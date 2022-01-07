//Table of Contents------------------------------------------------------------------------------------
//copying objects [object]
//create object [object]
//delete object [object]
//create prototype [object]
//Optional chaining [object]
//Add custom polifill [object]
//Literal object vs Map [object]
//Object methods keys/values/entries [object]
//Object - deep vs shallow copy [object]
//Generate chainning methods [object]
//Method get/set at object [object]
//Add new element to object [object]




const baseObject = {
    name: "Luki",
    surname: "Kowalski",
    age: 18,
    cars: ['golf','a4','astra'],
    colors: [
        {name: 'red', number: 1},
        {name: 'blue', number: 2},
        {name: 'pink', number: 3},
        {name: 'yellow', number: 4},
        {name: 'green', number: 5}
    ],
    work: 'Frontend Developer',
    wife: true
}

//copying objects [object]
function objectAssign(){
    const baseObject = {
        name: "luki",
        surname: "Big",
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ]
    }
    const additionalObject = {
        sport: true,
        PC: false,
        cat: false
    }
    console.log('BASE-', baseObject);
    const copyObject = Object.assign({}, baseObject);

    baseObject.wife = true;
    baseObject.work = 'frontend developer';
    baseObject.cars = ['aston','porshe','ferrari'];
    baseObject.colors = [
        {name: 'black', number: 1},
        {name: 'white', number: 2},
        {name: 'yellow', number: 3},
    ];

    console.log('Modif', baseObject);
    console.log('COPY-', copyObject);
    //powstaje nowa kopia bez referencji do basowego obiektu

    const multiCopy = Object.assign({}, baseObject, additionalObject);
    console.log('multiCopy', multiCopy);//utworzenie obiektu z kilku innych
}
// objectAssign();

//create object [object]
function createObject(){
    const additionalObject = {
        name: "luki",
        surname: "Big",
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ]
    }

    const newObject = Object.create(additionalObject, {});//shallow copy
    newObject.city = 'Warsaw';
    newObject.capital = true;
    additionalObject.wife = true;
    additionalObject.work = 'frontend developer';

    console.log('Base Version', additionalObject);
    console.log('Copy -------', newObject);
    //powstaje nowy objekt z referencja do bazowych propertisów
}
// createObject();

//delete object [object]
function deleteObject(){
    const luki = {
        name: 'luki',
        surname: 'big',
        age: 18,
        increaseAge: function(){
            this.age = this.age * 2;
        },
        func: function(){
            console.log('age x2', this.age );
        }
    }
    console.log('Base---', luki);

    luki.name = 'Adam';
    delete luki.func;

    console.log('Change-', luki);
    //zmiana name i usuniecie funkcji func
}
// deleteObject();

//create prototype [object]
function addprototypeLuki1(){
    const numbers = [1,3,5,7,9,11, 13];
    Array.prototype.multiply = function(num){
        return this.map((ele) => ele * num)
    }
    const result = numbers.multiply(2);
    console.log('My new function "multiply" at array object \n Base--', numbers,  '\n Change', result);

    //My new function "multiply" at array object
    //Base-- (7) [1, 3, 5, 7, 9, 11, 13]
    //Change (7) [2, 6, 10, 14, 18, 22, 26]
}
// addprototypeLuki1();

//Optional chaining [object]
function optionalChaining(){
    const arr = [
        {txt:'ad1'},
        {txt:'ad2'},
        {txt:'ad3'},
        {txt:'ad4'}
    ];

    const txt = arr[6]?.txt;//undefined
    const txt2 = arr[1]?.txt;//ad2

    const deepObj = {
        level1:{
            name: 'level1',
            reward: 'bronze',
            level2:{
                name: 'level2',
                reward: 'silver',
                level3:{
                    name: 'level3',
                    reward: 'gold'
                }
            }
        },
        m: () =>{
            return 'Method M';
        }
    }

    console.log('deepObj.level1?.reward', deepObj.level1?.reward);//bronze
    console.log('deepObj.level1?.level2?.reward', deepObj.level1?.level2?.reward);//silver
    console.log('deepObj.level1?.level2?.level3.reward',deepObj.level1?.level2?.level3.reward);//gold
    console.log('deepObj.level1?.level2?.level3?.level4?.reward',deepObj.level1?.level2?.level3?.level4?.reward);//undefined
    console.log('deepObj.startLevel?.level2?.reward',deepObj.startLevel?.level2?.reward);//undefined

    console.log('deepObj.m?.()', deepObj.m?.()); //Method M
    console.log('deepObj.f?.()',deepObj.f?.());//undefined
}
// optionalChaining();

//Add custom polifill [object]
function addPolifill(){
    if(!Array.prototype.upperCaseWords){
        Array.prototype.upperCaseWords = function(){
            return this.map(ele => {
                console.log('ele', typeof ele);
                if(typeof ele == 'string') {
                    return ele.toUpperCase();
                } else{
                    return ele;
                }
            })
        }
    } else{
        console.log('Browser does support upperCaseWords function');
    }

    const arr = ['luki','domki','siema', 13, true, {name: 'luki'}];
    console.log('BASE ARRAY  ', arr);//['luki', 'domki', 'siema', 13, true, {…}]
    console.log('Change ARRAY', arr.upperCaseWords());//['LUKI', 'DOMKI', 'SIEMA', 13, true, {…}]
}
// addPolifill();

//Literal object vs Map [object]
function mappLuki1(){
    const cars = ['corsa','matiz'];
    let map1 = {
        name:'luki',
        age: 18,
        cars: cars
    }

    console.group('Map 1 --------')
    console.log('map1', map1);
    console.log('get1', map1['cars']);
    console.log('has1', !!map1['cars']);

    let keysArr = [];
    for(let i in map1){
        keysArr.push(i);
    }
    let valuesArr = [];
    for(let i in map1){
        valuesArr.push(map1[i]);
    }
    let entriesArr = [];
    for(let i in map1){
        const obj = {i:map1[i]};
        entriesArr.push(obj);
    }
    for(let i in map1){
        console.log('ele1', map1[i]);
    }
    console.log('keys1', keysArr);
    console.log('values1', valuesArr);
    console.log('entries1', entriesArr);
    console.log('ZMIANY');
    delete map1.age;
    map1 = {};
    console.log('map1', map1);
    console.log('size', map1.length);
    console.groupEnd();

    //ten sam obiekt z wykorzystaniem metody new Map();
    const map2 = new Map();
    map2.set('name', 'Luki');
    map2.set('age', 18);
    map2.set('cars', cars);

    console.group('Map 2 --------')
    console.log('map2', map2);
    console.log('get2', map2.get('cars'));
    console.log('has2', map2.has('cars'));
    console.log('keys2', map2.keys());
    console.log('values2', map2.values());
    console.log('entries2', map2.entries());
    map2.forEach(ele =>{
        console.log('ele2', ele);
    })
    console.log('ZMIANY');
    map2.delete('age');
    map2.clear();
    console.log('map2', map2);
    console.log('size', map2.size);
    console.groupEnd();
}
// mappLuki1();


//Object methods keys/values/entries [object]
function objectFunctionLuki1(){
    const log = console.log;
    const baseObject = {
        name: "Luki",
        surname: "Kowalski",
        age: 18,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        work: 'Frontend Developer',
        wife: true
    }

    log(Object.keys(baseObject));//['name', 'surname', 'age', 'cars', 'colors', 'work', 'wife']
    log(Object.values(baseObject));//['Luki', 'Kowalski', 18, Array(3), Array(5), 'Frontend Developer', true]
    log(Object.entries(baseObject));//[['name', 'Luki'],['surname', 'Kowalski'],['age', 18],['cars', Array(3)],['colors', Array(5)],['work', 'Frontend Developer'],['wife', true]]
}
// objectFunctionLuki1();

//Object - deep vs shallow copy [object]
function copyObject2(){
    const log = console.log;
    const baseObject = {
        name: "Luki",
        surname: "Kowalski",
        age: 18,
        cars: ['golf','a4','astra'],
        colors: [
            {name: 'red', number: 1},
            {name: 'blue', number: 2},
            {name: 'pink', number: 3},
            {name: 'yellow', number: 4},
            {name: 'green', number: 5}
        ],
        work: 'Frontend Developer',
        wife: true
    }

    let shallowCopy = Object.assign({}, baseObject);
    let deepCopy = JSON.parse(JSON.stringify(baseObject));
    baseObject.cars = ['VW','Audi'];
    baseObject.colors = [{name: 'black', number: 11},{name: 'white', number: 12}];
    shallowCopy.colors = [{name: 'white', number: 12}];

    log('Base         ', baseObject);
    log('Shallow copy ', shallowCopy);
    log('Deep copy    ', deepCopy);
    //assign powinien robic shallow copy z odwolaniami do baseObject
    //ckopiowanie przy użyciu json powoduje deep copy

}
// copyObject2();

//Generate chainning methods [object]
function chainingMethodLuki1(){
    let objLuki = function(item){
        this.item = item;
    }
    objLuki.prototype.upperWord = function(){
        this.item = this.item.toUpperCase();
        return this;
    }
    objLuki.prototype.addLine = function(){
        this.item = this.item.split('').map(letter => letter + "--").join('');
        return this;
    }
    objLuki.prototype.addExtraWord = function(){
        return this.item + 'Rulez';
    }
    const word = new objLuki('Lukiiii');
    const result = word.upperWord().addLine().addExtraWord();
    console.log('result', result);//result L--U--K--I--I--I--I--Rulez
}
// chainingMethodLuki1();

//Method get/set at object [object]
function getSetMethod(){
    const baseObject = (function(){
        let _prop1 = 1987;
        return{
            prop2: 2000,
            get prop1(){
                return _prop1;
            },
            set prop1(_val){
                _prop1 = _val;
            }
        }
    })();

    console.log('BASE  - DEFAULT', baseObject);
    console.log('PROP1 - BASE   ', baseObject.prop1);
    baseObject.prop1 = 3000;
    console.log('PROP1 - CHANGE', baseObject.prop1);
    console.log('BASE  - CHANGE', baseObject);
}
// getSetMethod();

//Add new element to object [object]
function addNewElementToObject(){
    const e = 'beer';
    const myNewObj = {
        a: 'Luki',
        b: 30,
        c: 'developer',
        [e]: 'Zywiec'
    }

    function addProp(obj, propName, propValue){
        obj[propName] = propValue;
    }

    addProp(myNewObj, 'd', 'games');
    console.log(myNewObj); //{ a: 'Luki', b: 30, c: 'developer', beer: 'Zywiec', d: 'games' }
}
// addNewElementToObject();