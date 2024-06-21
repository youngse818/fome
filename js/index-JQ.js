$(function () {
    gsap.registerPlugin(ScrollTrigger);
    let S1_PC = gsap.matchMedia();
    S1_PC.add("(min-width: 1025px)", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec01',
                end: () => '+=' + document.querySelector('.sec01').offsetWidth * 4.2,
                scrub: 1,
                // markers: true, // 개발가이드선
                pin: true,
            }
        })

            .fromTo('header', { top: '-100px' }, { top: '0', ease: 'none', duration: 7 }, 0)
            .fromTo('.sec01 .vidi .vidi_bg', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7 }, 0)
            .fromTo('.sec01 .text1', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 15 }, 0)
            .fromTo('.sec01 .text1 .in_txt1', { x: '0' }, { x: '-250', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec01 .text1 .in_txt3', { x: '0' }, { x: '270', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec01 .text2 .bar', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 35 }, 0)
            .fromTo('.sec01 .text2 .bar', { y: '0' }, { y: '75', ease: 'none', duration: 7, delay: 45 }, 0)
            .fromTo('.sec01 .text2 .show1', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 60 }, 0)
            .fromTo('.sec01 .text2 .show1', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 70 }, 0)
            .fromTo('.sec01 .text2 .show2', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 85 }, 0)
            .fromTo('.sec01 .text2 .show2', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 95 }, 0)
            .fromTo('.sec01 .text2 .show3', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 110 }, 0)
            .fromTo('.sec01 .text2 .show3', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 120 }, 0)
            .fromTo('.sec01 .text', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 130 }, 0)
    });

    let S1_MO = gsap.matchMedia();
    S1_MO.add("(max-width: 1024px)", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec01',
                end: () => '+=' + document.querySelector('.sec01').offsetWidth * 5,
                scrub: 1,
                pin: true,
            }
        })

            .fromTo('header', { top: '-100px' }, { top: '0', ease: 'none', duration: 7 }, 0)
            .fromTo('.sec01 .vidi .vidi_bg', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7 }, 0)
            .fromTo('.sec01 .text1', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 15 }, 0)
            .fromTo('.sec01 .text1 .in_txt1', { x: '0', y: '0' }, { x: '-20', y: '0', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec01 .text1 .in_txt3', { x: '0', y: '0' }, { x: '20', y: '0', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec01 .text1 .in_txt1', { x: '-20', y: '0' }, { x: '-20', y: '-40', ease: 'none', duration: 7, delay: 35 }, 0)
            .fromTo('.sec01 .text1 .in_txt3', { x: '20', y: '0' }, { x: '20', y: '40', ease: 'none', duration: 7, delay: 35 }, 0)
            .fromTo('.sec01 .text2 .show1', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 45 }, 0)
            .fromTo('.sec01 .text2 .show1', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 55 }, 0)
            .fromTo('.sec01 .text2 .show2', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 65 }, 0)
            .fromTo('.sec01 .text2 .show2', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 75 }, 0)
            .fromTo('.sec01 .text2 .show3', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 85 }, 0)
            .fromTo('.sec01 .text2 .show3', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 95 }, 0)
            .fromTo('.sec01 .text', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 105 }, 0)
    });
});


//생각하고~~
// $(function(){
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: '.sec03',
//             end: () => '+=' + document.querySelector('.sec03').offsetWidth * 3,
//             scrub: 1,
//             pin:true,
//         }
//     })

//     .fromTo('.sec03 .sub_bg p.p1',{x:'0'},{x:'-40%', ease: 'none',duration:7},0)
//     .fromTo('.sec03 .sub_bg p.p2',{x:'0'},{x:'40%', ease: 'none',duration:7},0)
//     .fromTo('.sec03 .product ul .li1',{opacity: '0'},{opacity: '1', ease: 'none',duration:7, delay: 10},0)
//     .fromTo('.sec03 .product ul .li1',{opacity: '1'},{opacity: '0', ease: 'none',duration:7, delay: 20},0)
//     .fromTo('.sec03 .product ul .li2',{opacity: '0'},{opacity: '1', ease: 'none',duration:7, delay: 30},0)
//     .fromTo('.sec03 .product ul .li2',{opacity: '1'},{opacity: '0', ease: 'none',duration:7, delay: 40},0)
//     .fromTo('.sec03 .product ul .li3',{opacity: '0'},{opacity: '1', ease: 'none',duration:7, delay: 50},0)
//     .fromTo('.sec03 .product ul .li3',{opacity: '1'},{opacity: '0', ease: 'none',duration:7, delay: 60},0)
// });



$(function () {
    gsap.registerPlugin(ScrollTrigger);
    let S4_PC = gsap.matchMedia();
    S4_PC.add("(min-width: 1281px)", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec04',
                end: () => '+=' + document.querySelector('.sec04').offsetWidth * 3,
                scrub: 1,
                pin: true,
            }
        })
            .fromTo('.sec04 .box_wrap', { x: '0' }, { x: '-25%', ease: 'none', duration: 7 }, 0)
            .fromTo('.sec04 .box_wrap > div:nth-of-type(5)', { x: '0' }, { x: '-132.2%', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .box_wrap > div:nth-of-type(6)', { x: '0' }, { x: '-264.8%', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .box_wrap > div:nth-of-type(7)', { x: '0' }, { x: '-397.2%', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .box_wrap .close figure img.logo', { opacity: '0' }, { opacity: '1', ease: 'none', duration: 7, delay: 7 }, 0)
            .fromTo('.sec04 .box_wrap > div:nth-of-type(4)', { opacity: '1' }, { opacity: '0.7', ease: 'none', duration: 7, delay: 7 }, 0)
            .fromTo('.sec04 .box_wrap > div:nth-of-type(5)', { opacity: '1' }, { opacity: '0.7', ease: 'none', duration: 7, delay: 7 }, 0)
            .fromTo('.sec04 .count_box .time', { y: '0', opacity: '0' }, { y: '-45%', opacity: '1', ease: 'none', duration: 7, delay: 10 }, 0)
            .fromTo('.sec04 .count_box .time', { y: '-45%', opacity: '1' }, { y: '-50%', opacity: '0', ease: 'none', duration: 7, delay: 20 }, 0)
            .fromTo('.sec04 .count_box .person', { y: '-150%', opacity: '0' }, { y: '-158%', opacity: '1', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec04', { backgroundColor: 'black' }, { backgroundColor: 'white', ease: 'none', duration: 7, delay: 35 }, 0)
            .fromTo('.sec04 .count_box > div figcaption > p', { color: 'var(--subW)' }, { color: 'black', ease: 'none', duration: 7, delay: 37 }, 0)
            .fromTo('.sec04 .count_box > div figcaption .text p', { color: 'var(--subW)' }, { color: 'black', ease: 'none', duration: 7, delay: 40 }, 0)
            .fromTo('.sec04 .count_box > div figcaption .text .p1', { color: 'white' }, { color: 'black', ease: 'none', duration: 7, delay: 40 }, 0)
            .fromTo('header nav > ul > li', { color: 'white' }, { color: 'black', ease: 'none', duration: 7, delay: 40 }, 0)
            .fromTo('header nav ul li', { textShadow: '0px 0px 2px var(--my-blue)' }, { textShadow: '0px 0px 2px var(--my-red)', ease: 'none', duration: 7, delay: 40 }, 0)
    });

    let S1_MO = gsap.matchMedia();
    S1_MO.add("(max-width: 1280px)", () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec04',
                end: () => '+=' + document.querySelector('.sec04').offsetWidth * 4,
                scrub: 1,
                pin: true,
            }
        })
            .fromTo('.sec04', { backgroundColor: 'white' }, { backgroundColor: 'black', ease: 'none', duration: 7, delay: 0 }, 0)
            .fromTo('.sec04 .box_wrap', { y: '0' }, { y: '-130%', ease: 'none', duration: 7, delay: 0 }, 0)
            .fromTo('.sec04 .textBB_box .p1', { x: '-150', }, { x: '0', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .textBB_box .p1', { x: '-150', }, { x: '0', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .textBB_box .p3', { x: '150' }, { x: '0', ease: 'none', duration: 7, delay: 5 }, 0)
            .fromTo('.sec04 .textBB_box', { opacity: '1' }, { opacity: '0', ease: 'none', duration: 7, delay: 7 }, 0)
            .fromTo('.sec04 .box_wrap', { x: '50%' }, { x: '-100%', ease: 'none', duration: 20, delay: 10 }, 0)
            .fromTo('.sec04 .count_box ', { y: '0' }, { y: '-70%', ease: 'none', duration: 7, delay: 20 }, 0)
            .fromTo('.sec04 .count_box .time', { y: '0%' }, { y: '-50%', ease: 'none', duration: 7, delay: 25 }, 0)
            .fromTo('.sec04 .count_box .time', { y: '-50%', opacity: '1' }, { y: '-70%', opacity: '0', ease: 'none', duration: 7, delay: 35 }, 0)
            .fromTo('.sec04 .count_box .person', { y: '-150%', opacity: '0' }, { y: '-200%', opacity: '1', ease: 'none', duration: 7, delay: 40 }, 0)
            .fromTo('.sec04', { backgroundColor: 'black' }, { backgroundColor: 'white', ease: 'none', duration: 7, delay: 45 }, 0)
            .fromTo('.sec04 .count_box > div figcaption > p', { color: 'var(--subW)' }, { color: 'black', ease: 'none', duration: 7, delay: 50 }, 0)
            .fromTo('.sec04 .count_box > div figcaption .text p', { color: 'var(--subW)' }, { color: 'black', ease: 'none', duration: 7, delay: 50 }, 0)
            .fromTo('.sec04 .count_box > div figcaption .text .p1', { color: 'white' }, { color: 'black', ease: 'none', duration: 7, delay: 50 }, 0)
            .fromTo('header nav > ul > li', { color: 'white' }, { color: 'black', ease: 'none', duration: 7, delay: 50 }, 0)
    });
});



$(function () {
    var swiper = new Swiper(".event", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {// px 이상~~
            10:{
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            881:{
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            961:{
                slidesPerView: 1.4,
                spaceBetween: 50,
            },
            1281: {
                slidesPerView: 1.7,
                spaceBetween: 30,
            },
            1661: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    // const E_slider = $(".event .swiper-slide")
    // let E_dot = $(".sec04 .swiper-pagination-bullet-active::before")
    // E_slider.hover(function(){
    //     swiper.autoplay.stop();
    // },function(){
    //     swiper.autoplay.start();
    // });
});



// // top_btn :  제이쿼리
// $(function(){
//     const top_BTN = $("#top_btn")
//     top_BTN.hide()
//     $(window).scroll(function(){
//         const BTN_show = $(".sec04 .slider").offset().top;
//         thisS = $(this).scrollTop();
//         console.log(BTN_show)

//         if(thisS >= BTN_show){
//             top_BTN.css('display','block')
//         }else(
//             top_BTN.css('display','none')
//         )
//     });

//     top_BTN.click(function(){
//         $("html,body").animate({scrollTop: $("#wrap").offset().top}, 700)
//     });
// })




//높이값 체크
// $(function(){
//     let BOX_wrapTOP = $(".box_wrap").offset().top
//     // console.log(BOX_wrapTOP) //2832

//     let Garo = $(".sec04").height()
//     // console.log(Garo) //2384

//     let B_scrollNEXT = $(".box_scroll").offset().top //가로 스크롤 후 다음 섹션 위치값 정의 = 4272
//     // console.log(B_scrollNEXT)
// });