//--------utworzenie funkcji css dla js
    (function() {
        NodeList.prototype.css = function(propertyOrObject, value) {
            Array.prototype.forEach.call(this, function(elem) {
                if(typeof propertyOrObject === "object") {
                    var cssObject = propertyOrObject;
                    for(var prop in cssObject) {
                        elem.style[prop] = cssObject[prop];
                    }
                } else if(typeof propertyOrObject === "string" && value !== undefined) {
                    var prop = propertyOrObject;
                    elem.style[prop] = value;
                } else {
                    throw new Error("Podano złe parametry!");
                }
            });
            return this;
        } 
    })();
    let text = document.querySelector('.text1');
    // text.style['padding-top']= '30px';

    // text.css('background','pink');
    let klasy = text.classList;
    text.classList.remove(klasy[0]);
    // console.log(klasy);
    text.classList.add('pink','green2');

    let btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', function(){
        text.classList.toggle('pink');  
    })

    // let dom = text.dataset.dom;
    // dom = 'dupa';
    text.dataset.domBig += ' dupy'

    // console.log(dom);
//forms
/*
    let range = document.querySelector('#range');
    let rangeOut = document.querySelector('#outRange'),
        inputColor = document.querySelector('#inputColor'),
        outputColor = document.querySelector('#outputColor')

    range.addEventListener('input',function(e){
        rangeOut.value = e.target.value;
    })

    // range.oninput = function(e){
    //     rangeOut.value = e.target.value;
    // }

    inputColor.addEventListener('change', function(e){
        outputColor.style.background = e.target.value;
        outputColor.value = e.target.value;
    })

    let pierwsze = document.querySelector('#pierwszePole');
    pierwsze.validationMessage = false;
    // pierwsze.setCustomValidity("Wprowadx pole leszczu");

    // console.log(pierwsze.willValidate);
    //

    // let sub1 = document.querySelector('#sub1');
    // let form1 = document.querySelector('#form1');
    // console.log(form1)

    // form1.onsubmit = function(e){
    //     e.preventDefault();

    // }

    // form1.addEventListener('submit',sprawdzFrom);

    // function sprawdzFrom(form){
    //     let inputs = form.querySelectorAll('input');
    //     console.log(inputs);
    // }

    let forms = document.querySelectorAll('form');

    const patterns = {
        name: /^[a-zA-Z]+$/,
        telephone: /^[0-9]{9}$/,
        username: /^[a-zA-Z0-9]{5,12}$/,
        password: /^[\w@-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-\.]+)\.([a-z]{2,3})(\.[a-z])?$/,
        slug: /^[a-z\d]{8,20}$/,
        age: /^[0-9]{2}$/
    }
    let boxxy = [];

    function validationField(pole, regEx){

        console.log(pole);
        console.log(regEx);

        if(regEx.test(pole.value)){
            console.log('pasuje');
        }
        else{
            console.log('nie pasuje');
            boxxy.push(pole.name)
            // return false;
        }
    }



    forms.forEach(function(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            
            let inputs = form.querySelectorAll('input');
            inputs.forEach(function(input){
                // console.log(input)
                // console.log(input.name)
                validationField(input, patterns[input.name]);
                
                // console.log(input.value)
            })

            console.log(boxxy);

        });

        console.log(boxxy);
    })
    // console.log(forms);

*/
//geolocalisation

function geoCheck(){
    let czyWspiera = document.querySelector('.czyWspiera');
    let twojeDane = document.querySelector('.twojeDane');
    let geoBtn = document.querySelector('.geoBtn');

    if(!navigator.geolocation){
        czyWspiera.innerHTML = "Twoja przeglądarka nie wspiera Geolokalizacji";
        czyWspiera.style.color = "red";
    } else{
        czyWspiera.innerHTML = "Twoja przeglądarka wspiera Geolokalizacje";
        czyWspiera.style.color = "white"; 
    }


    function geoSuccess(position){
        twojeDane.innerHTML = `Twoje pozycje to: ${position.coords.latitude} , ${position.coords.longitude}.`
    }

    function geoError(errorObj) {

        var errorMessage;
    
        switch(errorObj.code) {
            case errorObj.PERMISSION_DENIED :
                errorMessage = "Brak pozwolenia na znalezienie lokalizacji.";
                break;
    
            case errorObj.POSITION_UNAVAILABLE :
                errorMessage = "Brak dostępu do sieci.";
                break;
    
            case errorObj.TIMEOUT :
                errorMessage = "Przekroczono czas oczekiwania.";
                break;
        }
    
        twojeDane.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
    
    }

    let options ={
        timeout: 5000

    }

    geoBtn.addEventListener('click', function(){
        twojeDane.innerHTML = "Czekaj ...";

        navigator.geolocation.getCurrentPosition(geoSuccess,geoError,options);
    })

}

geoCheck();
