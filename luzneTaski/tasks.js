console.log('Scripts - luźne taski');

////////////////////////////////////////////////////////
    //obiekty w js, kopiowanie, chaining, iterowanie, prezentacja w devtools
    const obj2 = {
        name: 'Luki',
        age: 30,
        value: 10,
        addNewValue: function(){
            this.value += 15;
            return this;
        },
        hobbies:['cars','computers','games','photos'],
        family: {
            father: {
                name: "Josef",
                age: 55
            },
            mother:{
                name: 'Jane',
                age: 50
            }
        }
    }
    //console.log('Wartośc nr 1', obj2.value);
    obj2.addNewValue().addNewValue();
    //console.log('Wartość nr 2', obj2.value);
    // console.log('object---', [...Object.getOwnPropertyNames(obj2)]);
    // console.log('object2---', obj2);


    //jaka jest róznica miedzy Object assign a spread
    const copy1 = Object.assign({}, obj2);
    const copy2 = {...obj2};


    console.group('Kopiowanie obiektów');
    console.log('copy1 - object asign',copy1);
    console.log('copy2 - spred',copy2);
    console.groupEnd('Koniec kopiowania obiektów');

    //iterowanie po obiekcie
    console.group('%c Iterowanie po obiekcie', 'color:pink; font-size:25px;');
    for(let elementInObj in copy2){
        console.log(elementInObj, obj2[elementInObj])
    }
    console.groupEnd('------');

    console.group('Iterowanie po obiekcie werja z ');
    for(let elementInObj2 of Object.entries(copy2)){
        console.log(elementInObj2);
    }
    // for(let [e,v] of Object.entries(copy2)){
    //     console.log(e,v);
    // }
    console.groupEnd('------');

    //Prawidłowe prezentowanie obiektu w console.log
    const luki = {name: 'luki', age: 33, car: true};
    const john = {name: 'john', age: 53, car: true};
    const viki = {name: 'viki', age: 23, car: false};

    const lukiArr = ['luki','john','kite','anna','bruce'];

    //zła prezentacja codu
    console.log(luki)

    //dobra prezentacja kodu
    console.log('%c My Friends', 'color: orange; font-weight: bold; font-size: 30px;');
    console.log({luki, john, viki});

    function showTrace(){
        console.trace('%c console trace w konkretnej funkcji','color:red; font-size:25px;');
    }

    showTrace();


////////////////////////////////////////////////////////
//Przezentacja tabeli + obliczniem czasu wykonania funkcji

// console.table([luki, john, viki])
//console.time
// console.time('luki');
// let i = 0;

// while(i < 1000000){
//     i++
// }

// console.timeEnd('luki')


//////////////////////////////////////////////////
//Destructuring

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

//bad code
function feed1(animal){
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

//good code
function feed2({name, meal, diet}){
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

//or
function feed3(animal){
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed1(turtle));
console.log(feed2(turtle));
console.log(feed3(turtle));


////////////////////////////////////////////////////////
//Template-literals

const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting','racing'],
    age: 7
}

function templateLiterals(horse){
    const {name, size, skills} = horse;
    const bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;
    console.log(bio);
}

// templateLiterals(horse);

function horseAge(string, age){
    const ageString = age > 5 ? 'old' : 'young';

    return `${string[0]}${ageString} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;

// console.log(bio2)


////////////////////////////////////////////////////////
//Spread-syntax

const pikachu = { name: 'Pikachu'};
const stats = { hp: 40, attack: 60, defense: 45};

//bad code
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// console.log('pikachu',pikachu);

// const lvl0 = Object.assign(pikachu, stats);
// console.log('lvl0',lvl0);

// const lvl1 = Object.assign(pikachu, {hp: 46});
// console.log('lvl1',lvl1);


// //good code
// const lv0 = {...pikachu, ...stats};
// console.log('lvv0', lv0);

// const lv1 = {...pikachu, hp: 46};
// console.log('lvv1', lv1)



let pokemons = ['pika','bulvo','dino','fisher'];
// console.log('1', pokemons);
// pokemons = [...pokemons, 'drake','wind','fire'];
// console.log('2', pokemons);
// pokemons = ['drake','wind','fire',...pokemons, ];
// console.log('3', pokemons);
let newPoke = ['luki','viki', ...pokemons, 'john'];
// console.log('4', newPoke);


////////////////////////////////////////////////////////
//reduce function
const tab2 = [
    {id: 1, name: 'luki',  value: 13},
    {id: 2, name: 'luki2', value: 33},
    {id: 3, name: 'luki3', value: 53},
    {id: 4, name: 'luki4', value: 113},
]

// let order2 = 0;
// for(const val of tab2){
//     order2 += val.value;
// }

// let order2 = tab2.reduce((acc, val) => { return acc + val.value},0)

// console.log('order2',order2);



// var x = dom('Aneta');


////////////////////////////////////////////////////////
//import/export


//export
//w pliku z modułem

// const dom = function(name){
//     console.log(`This is ${name}'s home`);
// };
// const dom2 = 'Domeczki Łukasza';
//export {dom, dom2}


//import w pliku wynikowym/src

// import {dom2, dom} from './cool.js';
// import * as fn from './cool.js';

// console.log(fn.dom2);
// fn.dom('Anet')

var x = 'domczek';

console.log(x);
console.log('dom',x);


const tasks = document.querySelectorAll('img');

const lazyload = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry =>{
            // console.log('entry', entry);

            if(entry.isIntersecting){
                const img = entry.target;
                console.log(img)
                const src = img.getAttribute('lazy-src');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        })
    });

    io.observe(target);
}
tasks.forEach(lazyload)


///////////////////////////////////////////////////////////////////////////
//Concat array

const array1 = [1,2,3];

const result  = array1.concat(5,6);         //[1,2,3,5,6]
const result2 = array1.concat([5,6]);       //[1,2,3,5,6] //concat dodaje poszczególne elementy w tablicach na pierwszym pozimie
const result3 = array1.concat([5,6 [7,8]]); //[1,2,3,5,6, [7,8]] //tylko płaskie tablice
