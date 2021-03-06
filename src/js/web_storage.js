//WEBSTORAGE
/*
    window.localStorage -> przechowywanie danych do momentu zapełnienia całego dysku użytkownika lub do momentu wyczyszczenia danych przez użytkownika
    window.sessionStorage -> przechowywanie danych do moementu zamknięcia przeglądarki
    .setItem(key, value); //utworzenie (imie: "basia");
    .getItem(key); //odczytanie (imie)
    .removeItem(key) //usunięcie 
    .clear()  //wyczyszczenie loacl lub session Storage  
    window.onstorage = function(e){}
    e.key // imie,
    e.oldValue  // stara wartośc przed napisaniem basia -> michal //basia
    e.newValue //nowa wartośc po zapisaniu  basia -> michal //michał
    e.url //adres strony która zapisała dane

*/
var supportOutput = document.querySelector("#support");
if (typeof Storage !== undefined) {
    //localStorage
    supportOutput.innerHTML = "Twoja przeglądarka wspiera Web Storage!";
    supportOutput.classList.add("wspiera");
    // window.localStorage.imie = "Łukasz";
    // window.localStorage.imie2 = "Aneta";
    // window.localStorage.setItem('imie3','Kasia');
    // window.onstorage = function(e) {
    //     console.log(e);
    // }
    // console.log(window.localStorage);

    //sessionStorage
    // window.sessionStorage.setItem('wiek', 30);
    // console.log(window.sessionStorage);
} else {
    supportOutput.innerHTML = "Twoja przeglądarka nie wspiera Web Storage!";
    supportOutput.classList.add("niewspiera");
}

//Ćwiczenie z formularzem i web Storage
function FormSaver(form) {
    this.form = form;
    this.fields = this.form.querySelectorAll('input[name]:not([type="submit"])');
    this.formID = this.form.getAttribute('id');
    this.fieldsValues = {};

    //przypisanie wszytkim imputom zdarzenia onchange 
    this.addSavingToFields = function () {
        for (let i = 0; i < this.fields.length; i++) {
            this.fields[i].onchange = this.saveField.bind(this);
        }
    }
    //zapisanie danych z formularza do obiektu fieldsValues
    this.saveField = function (e) {
        let that = e.target;
        this.fieldsValues[that.getAttribute('name')] = that.value;
        this.saveToLocalStorage();
    }
    //zapisanie obiektu do localStorage
    this.saveToLocalStorage = function () {
        //dane w lokalstorage moge byc tylko ciągiem znaków, wiec trzeba je przerobic na JSONa
        window.localStorage.setItem(this.formID, JSON.stringify(this.fieldsValues));
    }
    //załadowanie danych po ponownym wejściu an strone
    this.loadFieldsValues = function () {
        //odczytanie danych z localStorage
        let saveFields = window.localStorage[this.formID];

        if (saveFields) {
            //przerobienie JSONA na obiekt
            saveFields = JSON.parse(saveFields);
            //wypełnienie pól w formularzu
            for (let key in saveFields) {
                this.form.querySelector('[name="' + key + '"]').value = saveFields[key];
            }
        }
        // console.log(saveFields);
    }
    //wyczyszczenie danych z local storage po wysłaniu formularza
    this.clearLocalStorage = function () {
        // window.localStorage[this.formID] = "";
        window.localStorage.removeItem(this.formID);
    }

    //uruchomienie funkcji
    this.loadFieldsValues();
    this.addSavingToFields();
    //zdarzenie
    this.form.onsubmit = this.clearLocalStorage.bind(this);
}

//wywołanie funnkcji jesli przeglądarka obsługuje localStorage
if ('localStorage' in window) {
    let formToSave = new FormSaver(document.querySelector('#form1'));
    let formToSave2 = new FormSaver(document.querySelector('#form2'));
    let formToSave3 = new FormSaver(document.querySelector('#form3'));
}