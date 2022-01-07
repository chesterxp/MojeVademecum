//animatedNavigation
function buttons_list(){
    const buttons_list = document.querySelector('.buttons_list');
    const buttons = document.querySelectorAll('.buttons_list .btn');


    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            buttons.forEach(function(btn2){
                btn2.classList.remove('active');
            })
            btn.classList.add('active');
        })
    })
}
buttons_list();
//samplePopup
function overlay(){
    const overlay = document.querySelector('.overlay');

    document.querySelector('.postcard').addEventListener('click', function(e){
        overlay.classList.add('show');
    })
    overlay.addEventListener('click', function(e){
        if(e.target.classList.contains('overlay')){
            this.classList.add('hide');
            setTimeout(hideBackground, 500);
        }
    })
    function hideBackground(){
        overlay.classList.remove('show');
        overlay.classList.remove('hide');
    }
}
overlay();

//animatedForms
function form() {
    const modal_boxs = document.querySelector('.modal-bodies');
const button_next = document.querySelector('.text-center .button');
let next_modal_body_step = 1;

button_next.addEventListener('click', function(){
    // console.log('next_modal_body_step',next_modal_body_step);
    // console.log('actual_step',actual_step);
    // console.log('next_step',next_step);
    // let actual_step = '.modal-body-step-'+next_modal_body_step;
    // let actual_step2 = document.querySelector(actual_step);
    // console.log('actual_step2',actual_step2);
    // console.log('actual_step',actual_step);
    // console.log('next_step',next_step);
    // actual_step2.classList.remove('is-showing');
    // next_modal_body_step++;
    // let next_step = '.modal-body-step-'+next_modal_body_step;
    // let next_step2 = document.querySelector(next_step);
    // next_step2.classList.add('is-showing');

})

var modal_header = document.querySelectorAll('.modal-header span');
let btn = document.querySelector('.modal-bodies');

btn.addEventListener('click', function(e){
    let x = e.target.offsetParent.classList[1];
    let number = x[(x.length)-1];
    let current = document.querySelector('.modal-body-step-'+number);
    modal_header[number-1].classList.remove('is-active');
    current.classList.remove('is-showing');
    number++;

    if(number < 4){
        let next = document.querySelector('.modal-body-step-'+number);
        modal_header[number-1].classList.add('is-active');
        next.classList.add('is-showing');
    }
    else{
        document.querySelector('.rerun-button').style.display = 'block';
    }
})
}
form();

function myObserver(target,startFunction, stopFunction) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                startFunction();
                if(stopFunction == false){
                    observer.unobserve(entry.target);
                }
            }
            else{
                if(stopFunction != false){
                    stopFunction();
                }
                return true;
            }
        });
    }, {
        rootMargin: '5px',
        threshold: 0.01
    });

    if([target].length == 1){
        observer.observe(target)
    }
    else{
        target.forEach(function (el) {
            observer.observe(el);
        });
    }
}

//parallaxEffect-----------------------------------------------------------
var parallax = {
    init: function() {
        var parallax__gallery = document.querySelector('.parallax__gallery');
        var parallax_background = document.querySelector('.parallax__background');

        myObserver(parallax__gallery, parallax.showPhoto, false);
        myObserver(parallax_background, parallax.initHeroes,parallax.stopHeroes);

        // parallax.showHeroes();
    },
    initHeroes: function(){
        var scroll_window = window.addEventListener('scroll', parallax.startHeroes);

        // checkScroll();
        // setInterval(move, 50);

        // function checkScroll(){
        //     window.addEventListener('scroll', function(){
        //         wScroll = scrollY;
        //         console.log('wScroll',wScroll);
        //     });
        // };
        // function move(){
        //     diffrents = wScroll - off;
        //     console.log('move', diffrents);
        //     if( diffrents + 200 > 0 ){
        //         parallax_capitan.style.transform = "translateY("+(diffrents/6)+"%)";
        //         parallax_hulk.style.transform = "translate("+(diffrents/8)+"%, -"+(diffrents/20)+"%)";
        //         parallax_spiderman.style.transform = "translate(-"+(diffrents/7)+"%, "+(diffrents/2)+"%)";
        //     }
        // };
    },
    startHeroes: function() {
        var parallax_background = document.querySelector('.parallax__background');
        var off = parallax_background.offsetTop;
        var wScroll = 0;
        var diffrents = 0;
        var parallax_capitan = document.querySelector('.parallax__capitan');
        var parallax_hulk = document.querySelector('.parallax__hulk');
        var parallax_spiderman = document.querySelector('.parallax__spiderman');

        wScroll = scrollY;
        // console.log('wScroll',wScroll);

        diffrents = wScroll - off;
        // console.log('move', diffrents);
        if( diffrents + 200 > 0 ){
            parallax_capitan.style.transform = "translateY("+(diffrents/6)+"%)";
            parallax_hulk.style.transform = "translate("+(diffrents/8)+"%, -"+(diffrents/20)+"%)";
            parallax_spiderman.style.transform = "translate(-"+(diffrents/7)+"%, "+(diffrents/2)+"%)";
        }
    },
    stopHeroes: function() {
        window.removeEventListener('scroll', parallax.startHeroes);
    },
    showPhoto: function(){
        var photos = document.querySelectorAll('.parallax__row img');
        photos.forEach(function(photo, index){
            setTimeout(function(){
                photo.classList.add('is-show');
            }, 200 * index)

        })
    }
}
parallax.init();

///css custom property
window.CSS.registerProperty({
    name: '--colorLuki',
    syntax: '<color>',
    inherits: true,
    initialValue: '#c0ffc5'
})

document.querySelector('.customPropertyCsssBtn').addEventListener('click', showCustomPropertyCss);

function showCustomPropertyCss(){
    const lukiExample = document.querySelector('.customPropertyCsss__text');

    const result1 = window.getComputedStyle(lukiExample).getPropertyValue('font-size');
    console.log("window.getComputedStyle(lukiExample).getPropertyValue('font-size'):    ", result1);

    const result2 = lukiExample.computedStyleMap().get('font-size');
    console.log('lukiExample.computedStyleMap().get("font-size"):    ', result2)
}