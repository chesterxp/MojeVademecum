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
    var browser_suport = document.querySelector('.browser_suport');
    let user_localisation = document.querySelector('.user_localisation');
    let geoBtn = document.querySelector('.geoBtn');

    if (!navigator.geolocation) {
        browser_suport.innerHTML = "Twoja przeglądarka nie wspiera Geolokalizacji";
        browser_suport.style.color = "red";
    } else {
        browser_suport.innerHTML = "Twoja przeglądarka wspiera Geolokalizacje";
    }

    function geoSuccess(position) {
        user_localisation.innerHTML = "Twoja lokalizacja to:" + position.coords.latitude + " , " + position.coords.longitude;
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
        user_localisation.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
    }

    let options = {
        timeout: 5000
    };

    geoBtn.addEventListener('click', function () {
        user_localisation.innerHTML = "Czekaj ...";
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
    })
}
geoCheck();

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
            icon: "../../img/map_marker.png"
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

map.init();