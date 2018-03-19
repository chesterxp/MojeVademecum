/*-------SPIS---------------
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



*/

//Czyszczenie 
    $('.buttons .btn5').on('click', function(){
        $('#target').empty();
    })
//load - html
    $('.buttons .btn1').on('click', function(){
        $('#target').load('html1.html')
    })

//getJSON
    $('.buttons .btn2').on('click', function(){
        $('#target').empty();
        $.getJSON('users.json', function(data){
            $.each(data, function(i, val){
                var htm = '<div class="user">'+
                    '<div class="name">'+val.name+'</div>'+
                    '<div class="username">'+val.username+'</div>'+
                    '<div class="email">'+val.email+'</div>'+
                    '<div class="adress">'+
                        '<div class="street">'+val.address.street+'</div>'+
                        '<div class="suite">'+val.address.suite+'</div>'+
                        '<div class="city">'+val.address.city+'</div>'+
                    '</div>'+
                    '<div class="phone">'+val.phone+'</div>'+
                '</div>';

                $('#target').append(htm);
            })
        });
    })

//$.get - do zrobienia-------------------------------------------------------
//$.post - do zrobienia-----------------------------------------------------
//ajax-----------------------------------------------------------------------
    $('.buttons .btn3').on('click', function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/albums",
            type: "GET",
            dataType: "json",
            success: function(data){
                console.log(data);
                // $('.tresc').html(data);
                $('#target').empty();
                $.each(data,function(i, val){
                    var htm2 =  `<div class="placeHolder">
                                <div class="number">${val.id}</div>
                                <div class="title">${val.title}</div>
                            </div>`;
                    $('#target').append(htm2);
                })
                
            }
        })
    })


//fetch
    //text from document
    function getText(){
        fetch('js/simple.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            document.querySelector('.result2').innerHTML = data;
        })
        .catch(function(err){
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
    function getAPIData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
    }
    //send text using fetch
    function addPost(e){
        e.preventDefault();
        let title = document.getElementById('text').value;
        let body = document.getElementById('textBody').value;
    
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                "Content-type" : 'application/json'
            },
            body:JSON.stringify({title:title, body:body})
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
    }
//Galeria w JS z efektem opacity----------------------------------------------
    var fadeInGallery = {
        imgs : document.querySelectorAll('#boxFoto img'),
        mainFoto : document.querySelector('#current'),
        opacity : 0.6,

        init:function(){
            var me = fadeInGallery;
            //pierwsze zdjecie ma miec właściwość opacity
            me.imgs[0].style.opacity = me.opacity;
            //ustawienie wywołania funkcji na klikniecie zdjecia
            me.imgs.forEach(function(img){
                img.addEventListener('click', me.changeFoto);
            })
            
        },
        //zmiana zdjecia głównego
        changeFoto:function(e){
            var me = fadeInGallery;
            me.imgs.forEach(function(img){
                img.style.opacity = 1;
            })
            me.mainFoto.src = e.target.src;
            me.mainFoto.classList.add('fadeIn');
            setTimeout(function(){
                me.mainFoto.classList.remove('fadeIn');
            }, 500);
            e.target.style.opacity = me.opacity;
        }
    }
    // fadeInGallery.init();


//slider z przejściami po kliknięciu--------------------------------------------
    var sliderFoto = {
        sliders : document.querySelectorAll('#slider img'),
        left : document.querySelector('#left'),
        right : document.querySelector('#right'),
        current : 0,
        init: function(){
            var me = sliderFoto;
            me.left.addEventListener('click', me.leftSlide);
            me.right.addEventListener('click',me.rightSlide);
            me.slide();
        },
        slide:function(){
            var me = sliderFoto;
            me.sliders.forEach(function(img){
                img.style.display = "none";
            });
            me.sliders[me.current].style.display = "block";
        },
        leftSlide:function(){
            var me = sliderFoto;
            if(me.current == 0){
                me.current = (me.sliders.length - 1);   
            }
            else{
                me.current--;
            }
            me.slide();
        },
        rightSlide : function(){
            var me = sliderFoto;
            if(me.current == (me.sliders.length - 1)){
                me.current = 0;
            }
            else{
                me.current++;
            }
            me.slide(); 
        }
    }

//płynne przejscie a href

    $('.btn6').on('click', function(e){
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
    function watch(){
        var list = document.querySelectorAll('.list li');
        // var list = $('.list li');
        console.log(list.length); 
        var observer = new IntersectionObserver(function (elemen){
            elemen.forEach(function(ele) {
            if (ele.intersectionRatio > 0) {
                console.log(number, "numer")
                console.log(ele.target);
                var dom = ele.target;
                dom.id = "dom";
                if (number == 5){
                    console.log('number', number);
                }
                else if(number == 10){
                    console.log('number', number);
                }
                else if(number == 20){
                    console.log('number', number);
                }
                else if(number%10 == 0){
                    console.log('number', number);
                }
                number++;
                observer.unobserve(ele.target);

            } else {
            // console.log('out of view');
            }
        });
        });

        list.forEach(function(ele){
        observer.observe(ele);
        });
    }

    // watch();

//PAINT --------------------------------------------------------------
    function paint(){
        var flaga = false;
        var color = "#000";
        var size = "10";
        var board = $('.board');
        // var marginBoard = board.css('border-width');
        var marginBoard = 0;
        var border = parseInt(marginBoard);
        var leftBoardStart = board.offset().left + border;
        var leftBoardEnd = leftBoardStart + board.width()- border;
        var topBoardStart = board.offset().top + border;
        var bottomBoardEnd = topBoardStart + board.height() - border;

        console.log(border);

        function draw(e){
            if(flaga == false){
                return;
            }
            var div = document.createElement('div');
            div.className = "point";
            var x = e.clientX;
            var y = e.clientY;
            if( x > leftBoardStart && x < leftBoardEnd && y > topBoardStart && y < bottomBoardEnd){
                div.style.top = y + 'px';
                div.style.left = x + 'px';
                div.style.background = color;
                div.style.width = size + 'px';
                div.style.height = size + 'px';
                board.append(div);
            }
            
        }

        function active(){
            flaga = true;
        }
        function deactive(){
            flaga = false;
        }

        $('.kol').on('click', function(){
            var x  = $(this).attr('id');
            color = x;
        });

        $('.gry').on('click', function(){
            var siz = $(this).attr('id');
            size = siz;
        });


        document.body.addEventListener('mousemove', draw);
        document.body.addEventListener('mousedown', active);
        document.body.addEventListener('mouseup', deactive);
    }



//AUDIO -----------------------------------------------------------
    function audio(){
        //--mobile version
        if(screen.width <= 800 ){
            $('body').addClass('mobile');
        }
        $('#pause').hide();

        var newAudio = new Audio('audio/Track-01.mp3');
        var oldAudio = new Audio('audio/Track-01.mp3');
        var newSong = false;
        var startPlay = false;


        //first song init
        playMusic($('#playlist .song:first-child'));

        function playMusic(element){
            
            if(element.length > 0){
                var self = $(element);
            }
            else{
                var self = $(this);
            }
            var song = self.attr('song'),
                title = self.find('.titleOfSong').text(),
                band = self.find('.artist').text(),
                time = self.find('.time').text(),
                foto = self.attr('foto');
                url = 'url(../img/'+foto+')';
                oldAudio = newAudio;

            $(' #fullTime').text(time);
            $('.titleBox .title').text(title);
            $('.titleBox .band').text(band);
            $('#songFoto').css('background', url);

            newAudio = new Audio('audio/'+song);
            $('#playlist .song').removeClass('active');
            self.addClass('active');
            $('#pause').show();
            $('#play').hide();

            //dont start playing after reload page
            if(startPlay == true){
                oldAudio.pause();
                newAudio.play();     
            }
            else{
                $('#pause').hide();
                $('#play').show();
            }
            startPlay = true; 

            showDuration();

            if($('body').is('.mobile')){
                $('#playlist').hide(500);
            }
            //dont change progresBar within playing song
            newSong == true;
        }
        function showDuration(){
            $(newAudio).bind('timeupdate', function(){
                var s = parseInt(newAudio.currentTime%60);
                var m = parseInt((newAudio.currentTime/60)%60);
                var a = 0;
                if(s < 10){
                    s = "0" + s;
                }
                if(m <10){
                    m = "0" + m;
                }
                $('#duration').html(m+":"+s);
                var fullTime = parseFloat(newAudio.duration/60,10);
                var minutes = parseFloat(newAudio.duration/60, 10);
                var secound = (newAudio.duration%100);
                var value = 0;

                if(newAudio.currentTime > 0){
                    value = Math.floor((100/newAudio.duration)*newAudio.currentTime);
                }

                $('#lineColor').css('width', value+'%');
                if(newAudio.currentTime == newAudio.duration){
                    next();
                }
            })
        }
        function resetDuration(){
            $('#lineColor').width(0);
        }
        function play(){
            oldAudio.pause();
            newAudio.play();
            $('#play').hide();
            $('#pause').show();
            $('#duration').fadeIn('400');
            showDuration();
            if(newSong == true){
                resetDuration();
            }
            newSong = false;
        }
        function pause(){
            newAudio.pause();
            $('#pause').hide();
            $('#play').show();
            $('#duration').fadeIn('400');
        }
        function prev(){
            newAudio.pause();
            var prev = $('#playlist .song.active').prev();
            if(prev.length == 0){
                prev = $('#playlist .song:last-child');
            }
            playMusic(prev);
            newAudio.play();
            $('#pause').show();
            $('#play').hide();
            showDuration();
        }
        function next(){
            newAudio.pause();
            var next = $('#playlist .song.active').next();
            if(next.length ==0){
                next = $('#playlist .song:first-child');
            }
            playMusic(next);
            newAudio.play();
            $('#pause').show();
            $('#play').hide();
            showDuration();
        }

        $('#buttonBox .button').on('click', function(){
            var btn = $(this).attr('id');
            switch(btn){
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
        $('#playListButton').click(function(){
            $('#playlist').show();
        })
        $('#volume').change(function(){
            newAudio.volume = parseFloat(this.value / 100);
        })
        $('#lineTime').click(function(e){
            var width = $(this).width();
            var momentOfSong = e.clientX;
            var start = $('#lineColor').offset().left;
            //change width of progressBar
            $('#lineColor').width(momentOfSong-start);

            //change second of song
            var procent = ((momentOfSong-start)/width);
            newAudio.currentTime = Math.floor(procent*newAudio.duration);
        })

    }
    

