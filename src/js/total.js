/*---------------------------------------------SPIS---------------------------------

//Pokazywanie się calych sekcji z intersection observer
//Set
//Map
//Animowane przejscie do linka
//Ajax JQ
//load - html
//getJSON
//$.get - do zrobienia
//$.post - do zrobienia
//ajax
//fetch
//Galeria w JS z efektem opacity
//slider z przejściami po kliknięciu
//płynne przejscie a href
//IntersectionObserver
//PAINT
//AUDIO
//form + regEx
//Geolocalisation
//utworzenie funkcji przypominającej z jq funkcje css
-----------------------------------------------/SPIS-------------------------------*/


//Animowane przejscie do linka
function moveLinkJS() {
    var all = document.querySelectorAll('a[href^="#"]');
    all.forEach(function (a) {
        a.addEventListener('click', function (e) {
            console.log('click');
            e.preventDefault();
            var href = this.getAttribute('href');
            var destination = document.querySelector(href).offsetTop-50;
            var currentPosition = window.pageYOffset;
            var body = document.querySelector('body,html');

            animate(body, "scrollTop", "", currentPosition, destination, 600, true);
        });
    })
}
function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step == 1) clearInterval(timer);
        }, 25);
    elem.style[style] = from + unit;
}

moveLinkJS();

//Pokazywanie się calych sekcji z intersection observer
function showBoxies(elements) {
    var boxies = document.querySelectorAll('.'+elements);
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function(entry) {
            if(entry.intersectionRatio > 0) {
                // console.log('lazyLoad')
                // load(entry.target);
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }
    , {
        rootMargin: '5px',
        threshold: 0.01
    }
    );
    boxies.forEach(function (el) {
        observer.observe(el);
    });
}
showBoxies('boxx');

//SET
const tab = [1,2,3,4,56,2,3,4,3,2,1,1,2,3,4,5,6];
console.log('tab.length: ',tab.length);
//Przykład
const tab2 = new Set(tab);
    tab2.add(31);
    console.log('tab2',tab2);
    tab2.delete(56);
    console.log(tab2.has(4));


//Map
const komputer = [
    {name:'pierwszy komp',rok: 2010,number: 1},
    {name:'drugi komp',rok: 2013,number: 2},
    {name:'trzeci komp',rok: 2016,number: 3}
]
const oprogramowanie = [
    {system: 'Windows',oprogramowanie : 'legalne',number: 1},
    {system: 'Linux',oprogramowanie : 'legalne',number: 2},
    {system: 'IOS',oprogramowanie : 'legalne',number: 3}
]
const mapa = new Map();

komputer.forEach(function(komp){
    mapa.set(komp, oprogramowanie.find(function(o){
        if(o.number === komp.number){
            return true;
        }
    }));
})
var x = mapa.get(komputer[0]);//wyciągam wartości z mapy po keyu
var y = mapa.has(komputer[0])//sprawdzenie czy w mapie jest klucz -> true/false

console.log('x',x)
console.log('y',y)
console.log(mapa);


class Order {
    constructor(id, dishes) {
        this.id = id
        this.name = `Order ${id}`
        this.dishes = new Set(dishes)
    }
    removeDish(dish) {
        this.dishes.delete(dish)
    }
    addDish(dish) {
        this.dishes.add(dish)
    }
    static getErrors(dish) {
        const errors = {}
        if (!dish.name) {
            errors.name = 'Required'
        }
        if (dish.quantity === null) {
            errors.quantity = 'Required'
        } else if (dish.quantity <= 0) {
            errors.quantity = 'Value too small'
        }
        return errors
    }
}
const orders = [
    new Order(1, [
        {name: 'Steak', quantity: 1, details: 'Well done'},
        {name: 'Fish', quantity: 1}
    ]
    ),
    new Order(2, [
        {name: 'Halloumi salad', quantity: 1},
        {name: 'Greek salad', quantity: 1},
        {name: 'Espresso', quantity: 2}
    ]
    )
];
const tables = [
    {
        tableName: 'Table 1',
        capacity: 4,
        orderId: 1
    },
    {
        tableName: 'Table 2',
        capacity: 2,
        orderId: 2
    }
]

const tablesToOrders = new Map();

tables.forEach(table => {
    tablesToOrders.set(table, orders.find(o => o.id === table.orderId))
})

console.log('tablesToOrders',tablesToOrders);

//NAv
//Czyszczenie
$('.buttons .btn5').on('click', function () {
    $('#target').empty();
})
//load - html
$('.buttons .btn1').on('click', function () {
    $('#target').load('html1.html')
})

//getJSON
$('.buttons .btn2').on('click', function () {
    $('#target').empty();
    $.getJSON('users.json', function (data) {
        $.each(data, function (i, val) {
            var htm = '<div class="user">' +
                '<div class="name">' + val.name + '</div>' +
                '<div class="username">' + val.username + '</div>' +
                '<div class="email">' + val.email + '</div>' +
                '<div class="adress">' +
                '<div class="street">' + val.address.street + '</div>' +
                '<div class="suite">' + val.address.suite + '</div>' +
                '<div class="city">' + val.address.city + '</div>' +
                '</div>' +
                '<div class="phone">' + val.phone + '</div>' +
                '</div>';

            $('#target').append(htm);
        })
    });
})

//$.get - do zrobienia-------------------------------------------------------
//$.post - do zrobienia-----------------------------------------------------
//ajax-----------------------------------------------------------------------
// $('.buttons .btn3').on('click', function(){
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/albums",
//         type: "GET",
//         dataType: "json",
//         success: function(data){
//             console.log(data);
//             // $('.tresc').html(data);
//             $('#target').empty();
//             $.each(data,function(i, val){
//                 var htm2 =  `<div class="placeHolder">
//                             <div class="number">${val.id}</div>
//                             <div class="title">${val.title}</div>
//                         </div>`;
//                 $('#target').append(htm2);
//             })

//         }
//     })
// })


//fetch
//text from document
function getText() {
    fetch('js/simple.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            document.querySelector('.result2').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        })
}
//text from JSON
function getJson(){
    fetch('js/users.json')
    .then((res) => res.json())
    .then((data) => {
        var output = '';
        data.forEach(function(user){
            output += '<div class="person">'+
            '<div class="firstName">'+user.name+'</div>'+
            '<div class="lastName">'+user.username+'</div>'+
            '<div class="email">'+user.email+'</div>'+
            '</div>';
        })
        document.querySelector('.result2').innerHTML = output;
    })
}
//text from external API
function getAPIData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })
}
//send text using fetch
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('text').value;
    let body = document.getElementById('textBody').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })
}
//Galeria w JS z efektem opacity----------------------------------------------
var fadeInGallery = {
    imgs: document.querySelectorAll('#boxFoto img'),
    mainFoto: document.querySelector('#current'),
    opacity: 0.6,

    init: function () {
        var me = fadeInGallery;
        //pierwsze zdjecie ma miec właściwość opacity
        me.imgs[0].style.opacity = me.opacity;
        //ustawienie wywołania funkcji na klikniecie zdjecia
        me.imgs.forEach(function (img) {
            img.addEventListener('click', me.changeFoto);
        })

    },
    //zmiana zdjecia głównego
    changeFoto: function (e) {
        var me = fadeInGallery;
        me.imgs.forEach(function (img) {
            img.style.opacity = 1;
        })
        me.mainFoto.src = e.target.src;
        me.mainFoto.classList.add('fadeIn');
        setTimeout(function () {
            me.mainFoto.classList.remove('fadeIn');
        }, 500);
        e.target.style.opacity = me.opacity;
    }
}
// fadeInGallery.init();


//slider z przejściami po kliknięciu--------------------------------------------
var sliderFoto = {
    sliders: document.querySelectorAll('#slider img'),
    left: document.querySelector('#left'),
    right: document.querySelector('#right'),
    current: 0,
    init: function () {
        var me = sliderFoto;
        me.left.addEventListener('click', me.leftSlide);
        me.right.addEventListener('click', me.rightSlide);
        me.slide();
    },
    slide: function () {
        var me = sliderFoto;
        me.sliders.forEach(function (img) {
            img.style.display = "none";
        });
        me.sliders[me.current].style.display = "block";
    },
    leftSlide: function () {
        var me = sliderFoto;
        if (me.current == 0) {
            me.current = (me.sliders.length - 1);
        } else {
            me.current--;
        }
        me.slide();
    },
    rightSlide: function () {
        var me = sliderFoto;
        if (me.current == (me.sliders.length - 1)) {
            me.current = 0;
        } else {
            me.current++;
        }
        me.slide();
    }
}

//płynne przejscie a href
$('.btn6').on('click', function (e) {
    // e.preventDefault();
    $("html,body").animate({
        scrollTop: $('#footer').offset().top
    }, 1000);
})

// console.log($('#footer').offset().top);
// $('a[href^="#"]').on('click', function(event) {
//     var target = $( $(this).attr('href') );
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }
// });



//IntersectionObserver ----------------------------------------------------
var number = 0;

function watch() {
    var list = document.querySelectorAll('.list li');
    // var list = $('.list li');
    console.log(list.length);
    var observer = new IntersectionObserver(function (elemen) {
        elemen.forEach(function (ele) {
            if (ele.intersectionRatio > 0) {
                console.log(number, "numer")
                console.log(ele.target);
                var dom = ele.target;
                dom.id = "dom";
                if (number == 5) {
                    console.log('number', number);
                } else if (number == 10) {
                    console.log('number', number);
                } else if (number == 20) {
                    console.log('number', number);
                } else if (number % 10 == 0) {
                    console.log('number', number);
                }
                number++;
                observer.unobserve(ele.target);

            } else {
                // console.log('out of view');
            }
        });
    });

    list.forEach(function (ele) {
        observer.observe(ele);
    });
}

// watch();

//PAINT --------------------------------------------------------------
function paint() {
    var flaga = false;
    var color = "#000";
    var size = "10";
    var board = $('.board');
    // var marginBoard = board.css('border-width');
    var marginBoard = 0;
    var border = parseInt(marginBoard);
    var leftBoardStart = board.offset().left + border;
    var leftBoardEnd = leftBoardStart + board.width() - border;
    var topBoardStart = board.offset().top + border;
    var bottomBoardEnd = topBoardStart + board.height() - border;

    console.log(border);

    function draw(e) {
        if (flaga == false) {
            return;
        }
        var div = document.createElement('div');
        div.className = "point";
        var x = e.clientX;
        var y = e.clientY;
        if (x > leftBoardStart && x < leftBoardEnd && y > topBoardStart && y < bottomBoardEnd) {
            div.style.top = y + 'px';
            div.style.left = x + 'px';
            div.style.background = color;
            div.style.width = size + 'px';
            div.style.height = size + 'px';
            board.append(div);
        }

    }

    function active() {
        flaga = true;
    }

    function deactive() {
        flaga = false;
    }

    $('.kol').on('click', function () {
        var x = $(this).attr('id');
        color = x;
    });

    $('.gry').on('click', function () {
        var siz = $(this).attr('id');
        size = siz;
    });


    document.body.addEventListener('mousemove', draw);
    document.body.addEventListener('mousedown', active);
    document.body.addEventListener('mouseup', deactive);
}



//AUDIO -----------------------------------------------------------
function audio() {
    //--mobile version
    if (screen.width <= 800) {
        $('body').addClass('mobile');
    }
    $('#pause').hide();

    var newAudio = new Audio('audio/Track-01.mp3');
    var oldAudio = new Audio('audio/Track-01.mp3');
    var newSong = false;
    var startPlay = false;


    //first song init
    playMusic($('#playlist .song:first-child'));

    function playMusic(element) {

        if (element.length > 0) {
            var self = $(element);
        } else {
            var self = $(this);
        }
        var song = self.attr('song'),
            title = self.find('.titleOfSong').text(),
            band = self.find('.artist').text(),
            time = self.find('.time').text(),
            foto = self.attr('foto');
        url = 'url(../img/' + foto + ')';
        oldAudio = newAudio;

        $(' #fullTime').text(time);
        $('.titleBox .title').text(title);
        $('.titleBox .band').text(band);
        $('#songFoto').css('background', url);

        newAudio = new Audio('audio/' + song);
        $('#playlist .song').removeClass('active');
        self.addClass('active');
        $('#pause').show();
        $('#play').hide();

        //dont start playing after reload page
        if (startPlay == true) {
            oldAudio.pause();
            newAudio.play();
        } else {
            $('#pause').hide();
            $('#play').show();
        }
        startPlay = true;

        showDuration();

        if ($('body').is('.mobile')) {
            $('#playlist').hide(500);
        }
        //dont change progresBar within playing song
        newSong == true;
    }

    function showDuration() {
        $(newAudio).bind('timeupdate', function () {
            var s = parseInt(newAudio.currentTime % 60);
            var m = parseInt((newAudio.currentTime / 60) % 60);
            var a = 0;
            if (s < 10) {
                s = "0" + s;
            }
            if (m < 10) {
                m = "0" + m;
            }
            $('#duration').html(m + ":" + s);
            var fullTime = parseFloat(newAudio.duration / 60, 10);
            var minutes = parseFloat(newAudio.duration / 60, 10);
            var secound = (newAudio.duration % 100);
            var value = 0;

            if (newAudio.currentTime > 0) {
                value = Math.floor((100 / newAudio.duration) * newAudio.currentTime);
            }

            $('#lineColor').css('width', value + '%');
            if (newAudio.currentTime == newAudio.duration) {
                next();
            }
        })
    }

    function resetDuration() {
        $('#lineColor').width(0);
    }

    function play() {
        oldAudio.pause();
        newAudio.play();
        $('#play').hide();
        $('#pause').show();
        $('#duration').fadeIn('400');
        showDuration();
        if (newSong == true) {
            resetDuration();
        }
        newSong = false;
    }

    function pause() {
        newAudio.pause();
        $('#pause').hide();
        $('#play').show();
        $('#duration').fadeIn('400');
    }

    function prev() {
        newAudio.pause();
        var prev = $('#playlist .song.active').prev();
        if (prev.length == 0) {
            prev = $('#playlist .song:last-child');
        }
        playMusic(prev);
        newAudio.play();
        $('#pause').show();
        $('#play').hide();
        showDuration();
    }

    function next() {
        newAudio.pause();
        var next = $('#playlist .song.active').next();
        if (next.length == 0) {
            next = $('#playlist .song:first-child');
        }
        playMusic(next);
        newAudio.play();
        $('#pause').show();
        $('#play').hide();
        showDuration();
    }

    $('#buttonBox .button').on('click', function () {
        var btn = $(this).attr('id');
        switch (btn) {
            case 'prev':
                prev();
                break;
            case 'play':
                play();
                break;
            case 'pause':
                pause();
                break;
            case 'next':
                next();
                break;
            default:
                console.log('upssss!')
        }
    })
    $('#playlist .song').click(playMusic);
    $('#playListButton').click(function () {
        $('#playlist').show();
    })
    $('#volume').change(function () {
        newAudio.volume = parseFloat(this.value / 100);
    })
    $('#lineTime').click(function (e) {
        var width = $(this).width();
        var momentOfSong = e.clientX;
        var start = $('#lineColor').offset().left;
        //change width of progressBar
        $('#lineColor').width(momentOfSong - start);

        //change second of song
        var procent = ((momentOfSong - start) / width);
        newAudio.currentTime = Math.floor(procent * newAudio.duration);
    })

}

//form + regEx
/**
    FORMULARZE W HTML5
    input:
    data - data,
    datatime - data i czas strefowy,
    datatime-local - data i czas bez strefy czasowej,
    month -
    week -
    time - wybór godziny;
    color - wybór koloru,
    searcg - pole z lupą,
    number
    range - suwak,
    email -
    tel -
    url
    min/max -
    step - co ile,
    autofocus,
    autocomplete - on, off - autouzupełnienie,
    list
    placeholder
    required
    pattern - wyrażenie regEx, <input type="text" pattern="[0-9]{2}-[0-9]{2-3}">,
    formnovalidate - wysłanie formularza bez sprawdzenia (w tagu submit),
    novalidation - wysłanie formularza bez sprawdzenia (w tagu form),
    keygen
    progress
    output
    datalist
 */
let form1 = document.querySelector('#mainForm');

validForm(form1);

function validForm(forms) {
    const patterns = {
        telephone: /^[0-9]{9}$/,
        username: /^[a-zA-Z0-9]{5,12}$/,
        password: /^[\w@-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-\.]+)\.([a-z]{2,3})(\.[a-z])?$/,
        slug: /^[a-z\d]{8,20}$/
    }
    const inputs = forms.querySelectorAll('input');

    function validation(field, regex) {
        if (regex.test(field.value)) {
            field.parentElement.className = 'valid';
        } else {
            field.parentElement.className = 'invalid';
        }
    }

    // inputs.forEach(function(input){
    //     input.addEventListener('keyup', function(e){
    //         let name = e.target.attributes.name.value;
    //         validation(e.target, patterns[e.target.attributes.name.value]);
    //     });
    // })

    //for IE11

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            let name = e.target.attributes.name.value;
            validation(e.target, patterns[e.target.attributes.name.value]);
        });
    }
}


//Geolocalisation

/*
navigator.geolocation.getCurrentPosition(geoSuccess,geoError,options);
function geoSuccsess(position){
    position.coords.latitude - szerokość;
    position.coords.longitude - długość;
    position.coords.altitude - wysokość;
    position.coords.accuracy - miernik dokładności przekazywanych danych;
    position.coords.heading - kierunek w jakim zmierza wrządzenie, w stopniach od północy(w przeciwną stronę do wskazówek zegara);
    position.coords.speed - prętkość;
    position.timestamp  - czas danych;
}

function geoError(errorObject){
    errorObject.code = rodzaj błędu,;
    errorObject.message = ;
    errorObject.PERMISSION_DENIED - odmowa ustalenia pozycji;
    errorObject.POSITION_UNAVAILABLE - brak możliwości ustalenia pozycji;
    errorObject.TIMEOUT - upłynął maxymalny czas oczekiwania na sprawdzenie;
}

let options = {
        timeout: 5000 - max czas na sprawdzenie;
        enableHighAccuracy: true -
    };
*/
function geoCheck() {
    let czyWspiera = document.querySelector('.czyWspiera');
    let twojeDane = document.querySelector('.twojeDane');
    let geoBtn = document.querySelector('.geoBtn');

    if (!navigator.geolocation) {
        czyWspiera.innerHTML = "Twoja przeglądarka nie wspiera Geolokalizacji";
        czyWspiera.style.color = "red";
    } else {
        czyWspiera.innerHTML = "Twoja przeglądarka wspiera Geolokalizacje";
    }

    function geoSuccess(position) {
        twojeDane.innerHTML = "Twoja lokalizacja to:" + position.coords.latitude + " , " + position.coords.longitude;
    }

    function geoError(errorObj) {
        var errorMessage;
        switch (errorObj.code) {
            case errorObj.PERMISSION_DENIED:
                errorMessage = "Brak pozwolenia na znalezienie lokalizacji.";
                break;

            case errorObj.POSITION_UNAVAILABLE:
                errorMessage = "Brak dostępu do sieci.";
                break;

            case errorObj.TIMEOUT:
                errorMessage = "Przekroczono czas oczekiwania.";
                break;
        }
        twojeDane.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
    }

    let options = {
        timeout: 5000
    };

    geoBtn.addEventListener('click', function () {
        twojeDane.innerHTML = "Czekaj ...";
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
    })
}
// geoCheck();

//utworzenie funkcji przypominającej z jq funkcje css
// function myCss() {
//     NodeList.prototype.css = function (propertyOrObject, value) {
//         Array.prototype.forEach.call(this, function (elem) {
//             if (typeof propertyOrObject === "object") {
//                 var cssObject = propertyOrObject;
//                 for (var prop in cssObject) {
//                     elem.style[prop] = cssObject[prop];
//                 }
//             } else if (typeof propertyOrObject === "string" && value !== undefined) {
//                 var prop = propertyOrObject;
//                 elem.style[prop] = value;
//             } else {
//                 throw new Error("Podano złe parametry!");
//             }
//         });
//         return this;
//     }
// };
// let text = document.querySelector('.text1');
// text.css('background','red');
//route determination via google maps
var map = {
    init: function () {
        try {
            google.maps.event.addDomListener(window, "load", this.makeMap.bind(this));
        } catch (e) {
            return;
        };

        //docelowe miejsce
        this.location = "52.2398319,21.031668";
        this.mapForm = document.querySelector("#mapOptions");
        this.showRoadBTN = document.querySelector('.showRoadBTN');
        this.fromInput = document.querySelector('#from');
        this.path = new google.maps.DirectionsService(),
            this.pathRender = new google.maps.DirectionsRenderer();

        //zdarzenie na wysłąnie formularza
        this.mapForm.addEventListener('submit', function (e) {
            e.preventDefault();
            this.prepareRoute();
        }.bind(this));

        //zdarzenie na klikniecie spokaż trase
        this.showRoadBTN.addEventListener('click', function () {
            this.prepareRoute();
        }.bind(this));

        this.checkGeoSupport();
    },
    //tworzymy mape
    makeMap: function () {
        //wyciagamy wspolrzędne
        let loc = this.location.split(','),
            pos = new google.maps.LatLng(loc[0], loc[1]);
        //opcje mapy
        var mapOptions = {
            zoom: 16,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        //tworzymy mape
        this.mapObj = new google.maps.Map(document.querySelector("#map"), mapOptions);
        this.destination = pos;
        //tworzymy ikone pokazujaca nasz cel
        var marker = new google.maps.Marker({
            map: this.mapObj,
            position: pos,
            animation: google.maps.Animation.BOUNCE,
            icon: "./img/map_marker.png"
        });
    },
    //funkcja przygotowująca trase dojazdu doc celu
    prepareRoute: function (coords) {
        var renderOptions = {
            //dla jakiej mapy tworzymy element
            map: this.mapObj,
            //właściwości lini dojazdu
            polylineOptions: {
                strokeColor: "#ff0000",
                strokeWeight: 4,
                strokeOpacity: 0.8
            },
            //usunięcie markerów poczatku i konca
            suppressMarkers: true
        }
        //tworzymy linie wg właściości
        this.pathRender.setOptions(renderOptions);

        var pathData = {
            origin: coords ? coords : this.fromInput.value,
            destination: this.destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }

        this.path.route(pathData, this.handleRoute.bind(this));

    },
    //funkcja pokazująca trase dojazdu do naszego celu
    handleRoute: function (result, status) {
        //jeżeli wprowadzimy złe dane to wyświetli sie komunkat:
        if (status != google.maps.DirectionsStatus.OK || !result.routes[0]) {
            alert("Wprowadziłeś złe dane!");
            return false;
        }
        this.pathRender.setDirections(result);
        this.fromInput.value = result.routes[0].legs[0].start_address;
    },
    //sprawdzenie czy przeglądarka wspiera GeoLokalizacje i pokazanie guzika
    checkGeoSupport: function () {
        if (navigator.geolocation) {
            var findPositionButton = document.querySelector(".whereAmI");
            //pokazujemy guzik wyszukiwania naszej lokalizacji
            findPositionButton.classList.remove("hidden");
            findPositionButton.addEventListener('click', function (e) {
                e.preventDefault();
                this.getGeoData();
            }.bind(this));


        }
    },
    //sprawdzenie gdzie sie znajdujemy i wyznaczenie trasy
    getGeoData: function () {
        //wyznaczenie wspolrzednych, funkcja przyjmuje 3 opcje: success, error i options
        let successResult = function (position) {
            this.prepareRoute(position.coords.latitude + "," + position.coords.longitude);
        }.bind(this);
        let errorResult = function (errorObj) {
            alert("Wystąpił błąd! Odśwież stronę i spróbuj ponownie.");
        };
        let options = {
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(successResult, errorResult, options);
    }
}

// map.init();

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



//video and audio
/*
AUDIO
controls - kontrolki
autoplay - odpala sie na starcie // nie zawsze działa na mobile
loop - działanie w pętli
muted - odpalone audio działa bez głosu
preload(auto,metadata,none) - pobieranie danych o utworze z serwera 1-automatycznie ogarnia to przeglądarka, kiedy i ile pobrac, 2-tylko fragment danych, 3-nie pobiera nic

Video
to samo co w audio
poster - link do obrazka jako pierwsza klatka filmu
width
height

odpalenie w konkretnym momencie
video src="media/ollie.mp4#t=25,41" //od 25s do 41s
lub t=20 // od 20s
t=,120 //do 120s
t=,01:00:00 //do 1h odtwarzamy


Audio & Video API
//funkcje
.canPlayType() //sprawdzenie czy przeglądarka ogarnie okreslony typ nagrania np audio/ogg
.load() // pobranie pliku z serwera
.play() // start
.pause()

//właściwości
.buffered //zwraca wartośc zbuforowanego pliku
.currentSrc //zwraca adres z którego jest pobierany plik
.currentTime //odczytanie aktualnego czasu otwarzania lub ustawienie od kiedy ma sie rozpocząć odtwarzanie
.duration //długość odtwarzanego pliku
.ended //true/false jeśli plik się zakończył
.muted // true/false wyciszenie
.paused // true/false
.volume //odczyt ustawienie 0.1 - 1.0
.videoWidth  //zwrócenie wartości width wideo
.videoHeight//zwrócenie wartości height wideo

//zdarzenia
.durationchange - zmiana czasu trwania(np po załadowaniu pliku)
.ended - wywołanie po zakończeniu pliku
.loadstart - zaczniemy wczytywac plik
.loadedmetadata - pobranie metadanych
.pasue - pausa
.play -
.playing
.progress -
.timeupdate - aktualizacja czasu odtwarzania
.volumechange - wywołuje sie pdoczas zmiany głośności
*/
let numberOfPlayer = 0;

//My own video player
function VideoPlayer(url, place) {

    //jesli przeglądarka nie wspiera video to ukryj individual controls
    if (!document.createElement("video").canPlayType) { //sprawdzenie czy utworzone video jest obsługiwane przez przeglądarkę
        videoContainer.querySelector(".controls").style.display = "none";
        return;
    }
    //dane playera
    this.nameOfplayer = "videoPlayer" + numberOfPlayer;
    this.place = place;
    this.url = url;

    //dodajemy playera w wyznaczone miejsce
    this.place.append(this.makePlayer(this.nameOfplayer));

    //targetujemy
    this.videoContainer = document.querySelector('#' + this.nameOfplayer);

    //poszczególne guziki playera
    this.video = this.videoContainer.querySelector("video");
    this.playPause = this.videoContainer.querySelector(".playPause");
    this.progressBar = this.videoContainer.querySelector(".progressBar");
    this.loadedBar = this.videoContainer.querySelector(".loadedBar");
    this.playbackBar = this.videoContainer.querySelector(".playbackBar");
    this.currentTime = this.videoContainer.querySelector(".currentTime");
    this.totalTime = this.videoContainer.querySelector(".totalTime");
    this.fullVolume = this.videoContainer.querySelector(".fullVolume");
    this.currentVolume = this.videoContainer.querySelector(".currentVolume");
    this.backgroundVideo = this.videoContainer.querySelector('.backgroundVideo');
    this.muted = this.videoContainer.querySelector('.glyphicon-volume-up');
    this.fullScreen = this.videoContainer.querySelector('.fullScreen');

    //zdarzenia
    this.assignEventListeners();
    this.setVolume();
    numberOfPlayer++;
}
//dodajemy zdarzenia na poszczególne przyciski
VideoPlayer.prototype.assignEventListeners = function () {
    this.playPause.onclick = this.play.bind(this);
    this.video.onprogress = this.updateLoadingProgress.bind(this);
    this.video.addEventListener("timeupdate", this.updatePlayingProgress.bind(this), false);
    this.video.addEventListener("timeupdate", this.updateCurrentTime.bind(this), false);
    this.video.ondurationchange = this.setDuration.bind(this);
    this.progressBar.onclick = this.setCurrentPlayback.bind(this);
    this.fullVolume.onclick = this.adjustVolume.bind(this);
    this.video.onvolumechange = this.setVolume.bind(this);
    this.video.onended = this.resetPlayer.bind(this);
    this.backgroundVideo.onclick = this.playBig.bind(this);
    this.video.onclick = this.pauseBig.bind(this);
    this.muted.onclick = this.volumeMuted.bind(this);
    this.fullScreen.onclick = this.fullScreenOn.bind(this);
}
//tworzymy playera
VideoPlayer.prototype.makePlayer = function (name) {
    let htm = `<div id="${name}" class="videoPlayer">
                            <div class="videoBox">
                                <video>
                                    <source src="${this.url}" type="video/mp4">
                                </video>
                                <div class="backgroundVideo"></div>

                            </div>

                            <div class="controls">
                                <div class="leftControls cont">

                                    <div class="playPause glyphicon glyphicon-play">
                                        <!-- <i class="fas fa-play"></i>
                                        <i class="fas fa-pause"></i> -->
                                    </div>
                                    <!-- <div class="fas fa-pause dom"></div>
                                    <div class="fax">faxxx</div> -->
                                </div>
                                <div class="progressBar cont">
                                    <div class="playbackBar"></div>
                                    <div class="loadedBar"></div>
                                </div>
                                <div class="rightControls cont">
                                    <div class="fullScreen">
                                        <div class="playPause glyphicon glyphicon-fullscreen"></div>
                                    </div>
                                    <div class="time">
                                        <span class="currentTime">0:00</span>
                                        /
                                        <span class="totalTime">0:30</span>
                                    </div>
                                    <div class="volume">
                                        <span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>
                                        <div class="fullVolume">
                                            <div class="currentVolume"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    return htm;
}
//zdarzenie play
VideoPlayer.prototype.play = function (e) {
    if (this.video.paused) {
        this.video.play();
        e.target.classList.remove("glyphicon-play");
        e.target.classList.add("glyphicon-pause");
        this.backgroundVideo.style.display = "none";
    } else {
        this.video.pause();
        e.target.classList.remove("glyphicon-pause");
        e.target.classList.add("glyphicon-play");
        this.backgroundVideo.style.display = "block";
    }
}
//zdarzenie playBig
VideoPlayer.prototype.playBig = function (e) {
    if (this.video.pause) {
        this.backgroundVideo.style.display = "none";
        this.playPause.classList.remove("glyphicon-play");
        this.playPause.classList.add("glyphicon-pause");
        this.video.play();
    }
}
//klikniec video podowuje zatrzymanie
VideoPlayer.prototype.pauseBig = function (e) {
    this.video.pause();
    this.playPause.classList.remove("glyphicon-pause");
    this.playPause.classList.add("glyphicon-play");
    this.backgroundVideo.style.display = "block";
}
//pokazanie paska bufora
VideoPlayer.prototype.updateLoadingProgress = function () {
    if (this.video.buffered.length > 0) {
        let percentLoaded = (this.video.buffered.end(0) / this.video.duration) * 100;
        this.loadedBar.style.width = percentLoaded + "%";
    }
}
//pokazania paska czasu trwania
VideoPlayer.prototype.updatePlayingProgress = function () {
    let procentPlayed = (this.video.currentTime / this.video.duration) * 100;
    this.playbackBar.style.width = procentPlayed + '%';
}
//pokaż łączny czas pliku
VideoPlayer.prototype.setDuration = function () {
    this.totalTime.innerHTML = this.formatTime(this.video.duration);
}
//zmiana formaty czasu
VideoPlayer.prototype.formatTime = function (seconds) {
    var seconds = Math.round(seconds), //zaokrąglenie matematyczne
        minutes = Math.floor(seconds / 60), //zaokrąglenie w dół
        remainingSeconds = seconds - minutes * 60; //310 - 5*60

    if (remainingSeconds == 0)
        remainingSeconds = "00";
    else if (remainingSeconds < 10)
        remainingSeconds = "0" + remainingSeconds;

    return minutes + ":" + remainingSeconds;
}
//pokazanie aktualnego momentu pliku
VideoPlayer.prototype.updateCurrentTime = function () {
    this.currentTime.innerHTML = this.formatTime(this.video.currentTime);
}
//przewiniecie materiału po kliknieciu na progressbar
VideoPlayer.prototype.setCurrentPlayback = function (e) {
    let leftPos = this.progressBar.getBoundingClientRect().left, //200
        clickPos = e.pageX, //800
        pixelsFromLeft = clickPos - leftPos, //800-200=600
        percent = (pixelsFromLeft / this.progressBar.offsetWidth); //600/1200=0.5

    let newTime = this.video.duration * percent; //310*0.5=155s
    this.video.currentTime = newTime; //155s
}
//zmiana głośności
VideoPlayer.prototype.adjustVolume = function (e) {
    var leftPos = this.fullVolume.getBoundingClientRect().left,
        clickPos = e.pageX,
        pixelsFromLeft = clickPos - leftPos,
        percent = (pixelsFromLeft / this.fullVolume.offsetWidth);

    this.video.volume = percent;

    this.setVolume();
}
//zmiana wyglądu paska volume
VideoPlayer.prototype.setVolume = function () {
    var percent = this.video.volume * 100;
    this.currentVolume.style.width = percent + "%";
}
//reset plaera i zmiana button pasue na play
VideoPlayer.prototype.resetPlayer = function () {
    this.playPause.classList.remove("glyphicon-pause");
    this.playPause.classList.add("glyphicon-play");
}
//wyciszenie playera
VideoPlayer.prototype.volumeMuted = function () {
    if (this.video.muted) {
        this.video.muted = false;
        this.muted.classList.add('glyphicon-volume-up');
        this.muted.classList.remove('glyphicon-volume-off');
    } else {
        this.video.muted = true;
        this.muted.classList.remove('glyphicon-volume-up');
        this.muted.classList.add('glyphicon-volume-off');
    }
}
VideoPlayer.prototype.fullScreenOn = function () {
    console.log("fullscreen")
    var elem = this.video;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

}

let myOwnVideoPlayer = $('#myOwnVideoPlayer');

let myUrl = 'src/media/ollie.mp4#t=3';
let myUrl2 = 'src/media/ollie.mp4#t=12';
// let videoPlayer1 = new VideoPlayer(myUrl, myOwnVideoPlayer);
// let videoPlayer2 = new VideoPlayer(myUrl2, myOwnVideoPlayer);

let url3 = 'src/media/ollie.mp4';
let place3 = $('.showRoad');
// let videoPlayer3 = new VideoPlayer(url3,place3);

//File API
/*
FileReader - odczytywanie informacji o pliku oraz ich zawartości
FileWriter - tworzenie w locie plików oraz możliwośc ich zapisywania
FileSystem - system plików dla domeny

Blob
size - wielkość danych
type - typ danych
slice()

File
jw
name - nazwa pliku z rozszerzeniem
lastModifiedDate - ostatnia data modyfikacji

FileList
length - ilośc plików w tablicy
item() - wybór konkretnego elementu np item(0) pierwszy element

FileReader - interfejs za pomoca którego możemy tworzyc nowe obiekty
WŁAŚCIWOŚCI
readyState //0,1,2 czy dane są załadowane czy też nie
result - miesce przechpwywania wyniku naszych danych
error - błąd

METODY
readAsText(file) - odczytany plik result bedzie miał forme textową
readAsDataURL(file) - zwróci zawartość pliku w formacie data URL (base64)
readAsArrayBuffer(file) - odczytanie pliku w sposób binarny
readAsBinaryString - oczytanie pliku w sposób binarny?
abort() - przerwanie wczytywania pliku(w przypadku duzych plików może to troche trwać, pliki sa wczytywane asynchronicznie)

EVENTY
loadstart - zdarzenie odpala sie na starcie
loadend - na zakońćzeniu
load - po załadowaniu poprawnie danych
error - przy wystąpieniu błędu
progress - pasek postepu ładowanych danych
abort - przerwanie wczytywania pliku

*/

//sprawdzenie czy przeglądarka obsługuje File API
(function checkFielAPI() {
    if (!window.FileReader) return false
}());

let fileInput = document.querySelector('#fileInput'),
    start = document.querySelector('#startFile'),
    stop = document.querySelector('#stopFile'),
    progress = document.querySelector('progress');

//po załadowaniu pliku
fileInput.onchange = function () {
    //nasz wczytany plik file
    let file = this.files[0],
        //tworzymy obiekt File Reader
        reader = new FileReader();

    reader.onload = function () {
        console.log(this.result);
    }

    //pokazanie danych wczytanego pliku
    document.querySelector("#fileName").innerHTML = "Nazwa: " + file.name;
    document.querySelector("#fileSize").innerHTML = "Rozmiar: " + file.size;
    document.querySelector("#fileType").innerHTML = "Typ: " + file.type;
    document.querySelector("#fileLastModifiedDate").innerHTML = "Ostatnio zmodyfikowany: " + file.lastModifiedDate.toLocaleDateString();

    // reader.readAsText(file);
    // reader.readAsBinaryString(file);

    //dodanie zdjecia na stronie
    // if(file.type.match("image.*")) {
    //     reader.onload = function() {
    //         var img = new Image();
    //         img.src = this.result;
    //         document.querySelector("#playground").appendChild(img);
    //     }
    //     reader.readAsDataURL(file);
    // }

    reader.onloadstart = function () {
        console.log("Start odczytywania. readyState: " + this.readyState);
    }
    reader.onload = function () {
        console.log("Wczytywanie zakończone sukcesem. readyState: " + this.readyState);
    }
    reader.onloadend = function () {
        console.log("Zakończono odczytywanie. readyState: " + this.readyState);
    }
    reader.onprogress = function (e) {
        if (e.lengthComputable) {
            var percent = (e.loaded / e.total) * 100;
            progress.value = percent;
        }
    }
    reader.onabort = function () {
        console.log("Przerwano odczytywanie pliku. readyState: " + this.readyState);
    }
    reader.onerror = function () {
        console.log("Wystąpił błąd" + "(" + this.error.code + "): " + this.error.message);
    }
    start.onclick = function () {
        reader.readAsBinaryString(file);
    }
    stop.onclick = function () {
        reader.abort(); // w FF nie zgłasza błędu
    }
    /*
    //Tworzenie obiektów Blob
    if(!window.FileReader) return;
    var fileInput = document.querySelector("#fileInput");
    fileInput.onchange = function() {
        var file = this.files[0],
            reader = new FileReader();
        reader.onload = function() {
            var blob = new Blob([this.result], {type: "image/jpeg"});
            // var blob = blob.slice(0, 19131);
            var fileURL = window.URL.createObjectURL(blob);
            var img = new Image();
            img.src = fileURL;
            document.querySelector("#playground").appendChild(img);
            window.URL.revokeObjectURL(fileURL);
        }
        reader.readAsArrayBuffer(file);
    }
    */
}

//axios
let axios_btn = document.querySelector('.axios_btn');
axios_btn.addEventListener('click', showAxiosData);

function showAxiosData() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            addAxiosData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function addAxiosData(data) {
    let html = `<div class="userr">
        <div class="id">${data.id}</div>
        <div class="name">${data.name}</div>
        <div class="email">${data.email}</div>
        <div class="phone">${data.phone}</div>
        <div class="website">${data.website}</div>
        </div>`;

    let axios_result = document.querySelector('.axios_result');
    axios_result.innerHTML = html;
}

//lazyLoad
var targets = document.querySelectorAll("img[data-src],source[data-srcset]");

function load(el) {
    if (el.getAttribute('data-src')) {
        el.src = el.getAttribute('data-src');
    } else if (el.getAttribute('data-srcset')) {
        el.srcset = el.getAttribute('data-srcset');
    }
    el.classList.add('my_loaded');
    el.classList.remove('my_lazy');
}
// console.log('lazy');

function createObserver(elements) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                console.log('lazyLoad')
                load(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '20px'
    });
    elements.forEach(function (el) {
        observer.observe(el);
    });
}

// createObserver(targets);
//OOP JS syntax
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// let book1 = new Book('Book1', 'James Bond', '2015');

// console.log(book1.getSummary());

// //inherit
// Magazine.prototype = Object.create(Book.prototype); //inherit function which are prototype to Book
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// let mag1 = new Magazine('Mag1', 'Rihana', '2017', 'Januar');

// console.log(mag1.getSummary());
// console.log(mag1);
// //use Magazine constructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);