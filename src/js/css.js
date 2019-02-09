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

const test = 'dom';

console.log(`Jakis tekst ${test}`);


//formularze
const modal_boxs = document.querySelector('.modal-bodies ');
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
console.log(modal_header);

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