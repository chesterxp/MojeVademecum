//Table of Contents------------------------------------------------------------------------------------

//loops for/of   for/in  [array][object]
//Array functions indexOf/includes/some/find [array]
//Array methods extra variable [array]
//Array - reduce/every [array]
//Array - in vs includes [array]
//Copy arrays [array]
//Flat array [array]






//loops for/of   for/in  [array][object]
function loops(){
    const arr = [11,22,33,44,55,66];
    for(let num in arr){//in zwraca property array/object
        console.log(arr[num]);
    }
    for(let n of arr){//for zwraca wartośc//tylko array
        console.log('n',n);
    }

    const objectLuki = {
        name: "luki",
        surname: "Big",
        cars: 4,
        color: "blue"
    }

    for(let i in objectLuki){
        console.log(i, objectLuki[i]);
    }
}
// loops();

//Array functions indexOf/includes/some/find [array]
function arrayFunction(){
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const smallObject = {
        name: 'small object',
        cool: true,
        id: 10
    }
    const length = arr.length;
    console.log('includes: ', arr.includes(1));//true
    console.log('indexOf: ', arr.indexOf(9));//9
    let count1 = 0;
    const someResult = arr.some(function(ele){
        count1++;
        console.log('this', this);
        if(ele === 5) return true;
    }, smallObject)
    console.log('Some. Wynik: ', someResult, 'Liczba wykonań w pętli: ', count1, 'Liczba elementów: ', length);
    //Some. Wynik:  true Liczba wykonań w pętli:  6 Liczba elementów:  10

    let count2 = 0;
    const findResult = arr.find( ele => {
        count2++;
        if(ele === 5) return true;
    });
    console.log('Find. Wynik:', findResult, 'Liczba wykonań w pętli: ', count2, 'Liczba elementów: ', length);
    //Find. Wynik: 5 Liczba wykonań w pętli:  6 Liczba elementów:  10

    let count4 = 0;
    const filterResult = arr.filter((ele, index) => {
        count4++;
        if(ele === 5){
            return true;
        }
    });
    console.log('Filter. Wynik:', filterResult, 'Liczba wykonań w pętli: ', count4, 'Liczba elementów: ', length);
    //Filter. Wynik: [5] Liczba wykonań w pętli:  10 Liczba elementów:  10
}
// arrayFunction();



//Array methods extra variable [array]
function someExtraOption(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20];
    const smallObject = {
        name: 'small object',
        cool: true,
        id: 10
    }
    const result = arr.find( function(ele) {
        console.log('smallObject', this);
        if(ele === this.age){;
            return true;
        }
    }, smallObject);
    console.log("Result: ", result);
    //przekazanie dodatkowego parametru do funkcji po {}.
    //Wewnątrz funkcji można wywołac this ale metode musi być wywołana z uzyciem function a nie arrow function
}
// someExtraOption();

//Array - reduce/every [array]
function arrayMethods2(){
    const arr = [1,2,3,4,5,6,7,8,9,10,11];
    const result1 = arr.reduce((acc, ele)=>{
        return acc + ele;
    },0)
    const result2 = arr.every( ele => {
        return ele > 0;
    })
    const result3 = arr.every( ele => {
        return ele < 5;
    })
    console.log(`Array      ${arr}`);
    console.log(`Reduce:    ${result1}`);//66
    console.log(`Every > 0: ${result2}`);//true
    console.log(`Every < 5: ${result3}`);//false
}
// arrayMethods2();


//Array - in vs includes [array]
function arrayIn(){
    const arr = [1,2,3,4,5,6];
    const target = 3;

    if(target in arr){
        console.log(`${target} is in array`);
    } else{
        console.log(`${target} isn't in array`);
    }

    if(arr.includes(target)){
        console.log(`${target} is in array`);
    } else{
        console.log(`${target} isn't in array`);
    }
}
// arrayIn();





//Copy arrays [array]
function copyArrayLuki1(){
    const arr = ['a','b','c', 1,2,3, true, {cars:['a4','golf','aston']}];
    const arr1 = Array.from(arr);
    const arr2 = [...arr];
    const arr3 = arr.slice(0);
    const arr4 = arr.concat([]);

    arr[0] = 'luki';
    arr[7] = {names: ['james', 'jesica', 'mike']}

    console.group('Shallow copy????')
        console.log('BASE1         ', arr); //['luki', 'b', 'c', 1, 2, 3, true]
        console.log('COPY1 - FROM  ', arr1);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY2 - SPREAD', arr2);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY3 - slice ', arr3);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('COPY4 - concat', arr4);//['a', 'b', 'c', 1, 2, 3, true]
        console.log('BASE2         ', arr);//['a', 'b', 'c', 1, 2, 3, true]
    console.groupEnd();
}
// copyArrayLuki1();

//Flat array [array]
function flatArray(){
    const arr = [1,2,3,[4,5,6],[[7,8],[9,10],11],12,13];
    const flat = arr.flat(1);
    console.log('Array', flat); //Array [1, 2, 3, 4, 5, 6, Array(2), Array(2), 11, 12, 13]
    const flat2 = arr.flat(2);
    console.log('Array', flat2); //Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const flat3 = arr.flat(3);
    console.log('Array', flat3); //Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}
// flatArray();