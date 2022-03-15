window.addEventListener('DOMContentLoaded', function () {





    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');

    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;
        // let cursorFWidth = cursorFollow.width() / 2;

        gsap.to(cursor, {duration: 0.9, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });


    $('.cursor_effect').mouseenter(function () {

        gsap.to(cursor,.5,{opacity:1})


    }).mouseleave(function () {
        gsap.to(cursor,.5,{opacity:0})
    })



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

       

        

        $('.rotate').css('transform',`rotate(${scrollTop * 0.3}deg)`)










    });






    $('#menu .menu_list > li').mouseenter(function(){

        let idx = $('#menu .menu_list > li').index(this);
        $('#menu .video_section .video').removeClass('on');

        $('#menu .video_section .video').eq(idx).addClass('on');




    });




    let scrollValue = [0,1000,4000,6000,7000];

    $('#header > .menu > img').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeIn();
    });

    $('#menu > .cancle_btn').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeOut();
    });



    $('.menu_list > li').click(function (){
        $("#menu").fadeOut();
        let idx = $('.menu_list > li').index(this);

        container.scrollTo(0, scrollValue[idx], 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });



    $("#section00 .cards").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 500, // auto speed
        pauseOnHover:false, // pause on mouse hover 
        fade: false, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 2, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider 
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper 
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: true,


    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        if(currentSlide === 4){
            $('#section00').fadeOut();
        }


    });





    /*  slide,click event section */



    gsap.to('#section01', {
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section01').addClass('on');
                $('.section-title img').attr('src',`img/section02/about_top.png`)
            }
        }
    }); 


    gsap.to('#section01 .video', {
        scrollTrigger: {
            trigger: "#section01 .video_container",
            start: "top top",
            // end: () => "+=" + 300,
            end: '230% 100%',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });

    gsap.to('#section01 .video', {
        right:0,
        bottom:0,
        width: innerWidth,
        height: innerHeight,
        borderRadius:'0 0 0 0',
        scrollTrigger: {
            trigger: "#section01 .video_container",
            start: "80 top",
            // end: () => "+=" + 300,
            end: '230% 100%',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });






    gsap.to('.fix-this-2', {
        scrollTrigger: {
            trigger: ".trigger-this-2",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            onEnter: ()=>{
                $('.section-title img').attr('src',`img/section02/about_top.png`)
                $('#section02').addClass('on');
            }
            // markers: true
        }
    });

    gsap.to('#section03', {
        scrollTrigger: {
            trigger: "#section03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('.section-title img').attr('src',`img/section03/visual_top.png`)
            }
        }
    }); 

    

    gsap.to('.fix-this-4', {
        // rotation: 360,
        ease:'none',
        x: -innerWidth*5,
        scrollTrigger: {
            trigger: ".trigger-this-4",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            onEnter: ()=>{
                $('.section-title img').attr('src',`img/section04/team_top.png`)
                $('.scroll .arrow img').css('transform',`rotate(0)`);
            },
            onLeaveBack: ()=>{

            }
            // markers: true
        }
    });

    gsap.to('#section04-1', {
        scrollTrigger: {
            trigger: "#section04",
            start: "-250 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section04-1').addClass('on');
            }
        }
    });

    gsap.to('#section04', {
        scrollTrigger: {
            trigger: "#section04",
            start: "1200 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section05').addClass('on');
            }
        }
    });

    gsap.to('#section04 > #section06 .title', {
        scrollTrigger: {
            trigger: "#section06",
            start: "2600 top",
            //end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section06').addClass('on');
            }
        }
    });

    gsap.to('#section04 > #section06 .boards', {
        scrollTrigger: {
            trigger: "#section06 .boards",
            start: "7000 top",
            //end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section06').addClass('on');
            }
        }
    });



    let totalWidth = 0;
    let sectionList = $('.fix-this-10 > section');


    console.log(sectionList);
    for (let i = 0; i < sectionList.length; i++){
        totalWidth += sectionList.eq(i).width();
    }


    gsap.to('#section08', {
        scrollTrigger: {
            trigger: "#section08",
            start: "-500 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section08').addClass('on');
                $('.scroll .arrow img').css('transform',`rotate(90deg)`);
            }
        }
    });
    

    gsap.to('.fix-this-9', {
        scrollTrigger: {
            trigger: ".trigger-this-9",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });


    gsap.to('.fix-this-10', {
        // rotation: 360,
        ease:'none',
        x: - ( totalWidth - innerWidth),
        scrollTrigger: {
            trigger: ".trigger-this-10",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            onEnter: ()=>{
                $('#section08').addClass('on');
                $('.scroll .arrow img').css('transform',`rotate(0)`);
            }
            // markers: true
        }
    });

    gsap.to('#section10-1', {
        scrollTrigger: {
            trigger: "#section10-1",
            start: "-250 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section10-1').addClass('on');
            }
        }
    });


    

    gsap.to('#section13', {
        scrollTrigger: {
            trigger: "#section13",
            start: "-300 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section08').addClass('on');
            }
        }
    });


    // gsap.to('.line_wrap', {
    //     width: 1500,
    //     scrollTrigger: {
    //         trigger: "#section13",
    //         start: "2000 top",
    //         // end: () => "+=" + 300,
    //         end: 'bottom bottom',
    //         scrub: true,
    //
    //     }
    // });

})


