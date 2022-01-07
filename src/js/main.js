let lukiVademecum = {};

function myObserver(targets, rootMargin = '1px') {

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                console.log('viewPortIn');
                observer.unobserve(entry.target);
            }
            else {
                console.log('viewPortOut')
            }
        });
    }, {
        rootMargin: rootMargin,
        threshold: 0.01
    });

    targets.forEach(function (el) {
        observer.observe(el);
    });

}

function buildListOfCases(){
    const box = document.querySelector('.listOfCases__lists');
    const nameOfCases = document.querySelectorAll('.case__title');
    const list = getListOfCases(nameOfCases);
    let listOf = '';

    list.forEach(li => {
        const a = `<a href="#${li}">${li}</a>`;
        listOf += a;
    })
    
    box.innerHTML = listOf;
}

function getListOfCases(links){
    // return links.map(link => {
    //     return link.dataset.title;
    // })
    const arr = [];

    links.forEach( link => {
        arr.push(link.dataset.title);
    })

    return arr;
}

// buildListOfCases();

//Convert execel to array
lukiVademecum.convertTextToArray = (function () {
    const inputTextBox = document.querySelector('.convert__inputText');
    const convertResult = document.querySelector('.convert__result');
    const btn = document.querySelector('.convert__btn');
    const text = document.querySelector('.convert__text');
    const boxy = document.querySelector('.convertTextToArray');

    function init(){
        btn.addEventListener('click', showText);
        copyAllText();
    }
    function showText(e){
        const inputText = inputTextBox.value.split(/\n/g);
        convertResult.innerHTML = JSON.stringify(inputText);
    }
    function copyAllText() {
        convertResult.addEventListener('click', function() {
            var range = document.createRange();
            console.log('range',range);
            var selection = window.getSelection();//zwraca zaznaczony text
            // text.innerHTML = selection;
            console.log('selection',selection);
            range.selectNodeContents(convertResult);
            selection.removeAllRanges();
            selection.addRange(range);
            // selection.select();
            // selection.execCommand('copy')
            document.execCommand("copy");
            boxy.classList.add('showCopy');
        });
    }

    function removeClass(){
        inputTextBox.addEventListener('focus', ()=>{
            console.log('focus')
            boxy.classList.remove('showCopy');
        })
    }
    return init();
})();

// let lukiVademecum = {};
// lukiVademecum = {
//     init: function(){
//         console.log('lukiVademecum init2');
//     }
// };
// lukiVademecum.init();

lukiVademecum.convertTextToArray =  {
    init: function(){
        console.log('convertTextToArray')
    }
        
        // const inputTextBox = document.querySelector('.inputText');
        // const convertResult = document.querySelector('.convertResult');
        // const btn = document.querySelector('.btn');
        // const text = document.querySelector('.text');

        // // inputTextBox.addEventListener('input', showText.bind(this));
        // btn.addEventListener('click', showText);

        // function showText(e){
        //     const inputText = inputTextBox.value.split(/\n/g);
        //     convertResult.innerHTML = JSON.stringify(inputText);

        //     console.log('target', inputTextBox.value);
        // }

        // convertResult.addEventListener('click', function() {
        //     var range = document.createRange();
        //     console.log('range',range);
        //     var selection = window.getSelection();//zwraca zaznaczony text
        //     text.innerHTML = selection;
        //     console.log('selection',selection);
        //     range.selectNodeContents(convertResult);
        //     // selection.removeAllRanges();
        //     selection.addRange(range);
        // });
    
};

lukiVademecum.convertTextToArray.init();


//include
lukiVademecum.containsNodeElement = {
    init: function(){
        const conatinClosest = document.querySelector('.conatinClosest');
        conatinClosest.addEventListener('click', lukiVademecum.containsNodeElement.showResult)
    },

    showResult: function (){
        var main = document.querySelector('main');
        var list = document.querySelector('#list');
        var copyright = document.querySelector('#copyright');
        console.log('containsNodeElement');
        console.log('main.contains(list)', main.contains(list));
        console.log('main.contains(copyright)',main.contains(copyright));

        console.log('list.closest("main")',list.closest('main'));
        console.log('copyright.closest("main")',copyright.closest("main"));
    }
}

lukiVademecum.containsNodeElement.init();

//Escape newline breaks
lukiVademecum.newLineBreaks = {
    init: function(){
        const newLineBreaksBtn = document.querySelector('.newLineBreaksBtn');
        newLineBreaksBtn.addEventListener('click', lukiVademecum.newLineBreaks.showResult)
    },

    showResult: function (){
        const newLineBreaks = document.querySelector('.newLineBreaks');
        console.log('newLineBreaks',newLineBreaks)
        let text =
            '<article>\
                <h1>Title at h1 tag</h1>\
                <p>Some text at p tag without template string</p>\
            </article>';
        newLineBreaks.innerHTML = text;
    }
}

lukiVademecum.newLineBreaks.init();


//animateBackground --------------------------------------
lukiVademecum.animateBackground = function (){
    let time = 0;
    let x = 0;
    let animation = '';
    const opt = {
        radius: 150,
        radiusY: 0.4,
        maxSeeed: 0.05,
        maxRotation: 50,
        minOpacity: 0.3,
        spacer: ""
    }
    creatInvaders();
    const letters = document.querySelectorAll('.ab__word span');

    function scale(a, b, c, d, e) {
        return ((a-b) * (e-d)) / (c-b) + d;
    }
    function lerp(v0, v1, t) {
        return v0 * (1-t) + v1 * t;
    }
    function creatInvaders() {
        const word = document.querySelector('.ab__word');
        const letter = word.innerHTML.replace(/\s/g, opt.spacer).split("").reverse();
        word.innerHTML = "";
        letter.forEach((i) => {
            const l = document.createElement('span');
            l.innerHTML = i;
            word.appendChild(l);
        })
    }
    function animate(){
        if(!letters) return;

        x = lerp(x, 0.65, 0.1);
        const rotation  = -opt.maxRotation + x * opt.maxRotation * 2;
        const speed     = -opt.maxSeeed + x * opt.maxSeeed * 2;
        const modY = 1 + x * -2;

        time -= speed;

        letters.forEach((i, ind) => {
            const theta = 1 - ind / letters.length;
            const x = opt.radius * Math.sin(time + theta * Math.PI * 2);
            const y = opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2);
            const s = scale(
                y,
                -opt.radius * opt.radiusY,
                opt.radius * opt.radiusY,
                opt.minOpacity,
                1
            );

            Object.assign(i.style, {
                zIndex: Math.min(2, Math.max(-2, Math.ceil(y))),
                filter: `blur(${4 - 5 * s}px)`,
                opacity: s,
                transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`
            })
        })
        animation = requestAnimationFrame(animate);
    }
    function changeStatusOfAnimation(){
        document.querySelector('.ab__btn').addEventListener('click', changeStatus.bind(this));
    }

    function changeStatus(button){
        const btn = button.target;
        const isActive = btn.dataset.active;

        if(isActive === 'true'){
            btn.dataset.active = false;
        } else{
            btn.dataset.active = true;
        }
        btn.classList.toggle('off');

        turnOffOnAnimation(isActive);
    }

    function turnOffOnAnimation(active){
        if(active == 'false'){
            animation = requestAnimationFrame(animate);
        } else{
            cancelAnimationFrame(animation);
        }
    }
    changeStatusOfAnimation();
    animate();
};

lukiVademecum.animateBackground();

//show navbar
lukiVademecum.showNavBar = function (){
    const nav = document.querySelector('.nav');

    function addClassToNav(){
        nav.classList.add('showBackground');
    }
    function removeClassFromNav(){
        nav.classList.remove('showBackground');
    }
    // addClassToNav()
    function checkposition(){
        const positionY = window.scrollY;
        const heightOfFirstBox = getHeight() - 100;
        // console.log('positionY',positionY)
        if(positionY > heightOfFirstBox){
            addClassToNav();
        } else {
            removeClassFromNav();
        }
    }
    function intervalLuki(){
        setInterval(checkposition, 500);
    }

    function getHeight(){
        const height = document.querySelector('.ab');
        return height.offsetHeight;
    }
    intervalLuki();
}
lukiVademecum.showNavBar();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// dodac przykałdy m in z eventami
//przerobić src html


