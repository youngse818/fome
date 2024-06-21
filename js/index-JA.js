/* 연동 안돼서 메모장! */



    // let winW = document.all? document.body.clientWidth : window.innerWidth;
    // console.log(winW) // 현재 넓이

    // let countTOP = document.querySelector('.sec01').offsetWidth * 4.5 + document.querySelector('.sec04').offsetWidth * 1
    // console.log(countTOP) ////10483

    // let nowS = this.scrollY
    // console.log(nowS);	// 현재 스크롤 탑 값



    // 아코디언 도중 나머지 값 못구했을 때....
    // const tog_BTN = document.querySelectorAll('.toggle_btn')
    // tog_BTN.forEach((el) => {
    //     el.addEventListener('click', function(){
    //         const tog_CONT = this.querySelector('.sub_ul')
    //         const Plus = this.querySelector('.icon i')
    //         // console.log(tog_CONT)
    //         tog_CONT.classList.add('on')
    //         Plus.classList.add('active')



    //         let open = tog_CONT.classList.contains('on')
    //         console.log(open)
    //         if(open == 'true'){
    //             tog_BTN.addEventListener('click', function(){
    //                 tog_CONT.classList.remove('on')
    //             })
    //         }
    //         // return;
    //     });
    // });










//가로스크롤 만들어보기
// // 가로 스크롤
// const BOX_wrap = document.querySelector(".box_wrap")
// const BOX_inner = document.querySelector(".box_inner")
// // console.log(BOX_inner)

// // 가로 넓이 값 
// let BOX_innerW = BOX_inner.getBoundingClientRect().width 
// // console.log(BOX_innerW)// 200vw

// // 가로 높이 값
// let BOX_innerH = BOX_inner.getBoundingClientRect().height 
// // console.log(BOX_innerH) //500

// // 사각형 만들기(= px로 치환)
// BOX_wrap.style.height = `${BOX_innerW}px`
// // console.log(BOX_wrap.style.height)

// // 가로 스크롤 시작점
// let BOX_wrapTOP = BOX_wrap.getBoundingClientRect().top //2832
// let BOX_wrapTOPY = BOX_wrap.getBoundingClientRect().top + window.scrollY; //2832
// // console.log(BOX_wrapTOPY)
// let Garo = document.querySelector(".sec04").clientHeight //2384
// // console.log(Garo)

// // 다음 스크롤 요소 
// let B_scroll = document.querySelector(".box_scroll")
// let B_scrollNEXT = B_scroll.getBoundingClientRect().top + window.scrollY //가로 스크롤 후 다음 섹션 위치값 정의 = 4272
// // console.log(B_scrollNEXT)
// let B_scrollCONT = document.querySelector(".box_next") // 회전할 녀석
// // console.log(B_scrollCONT)

// window.addEventListener('scroll', function(){
//     const START =  document.querySelector(".sec04").getBoundingClientRect().top;
//     hscroll = this.scrollY
//     // console.log(hscroll) //목표 도달 값 : 15500

//     if(hscroll >= START){
//         window.addEventListener('scroll', function(){

//             let transX = hscroll / ( BOX_innerW ) * 2
//             // console.log(transX)
//             if(hscroll >= Garo){
//                 // console.log(BOX_wrapTOP)
//                 BOX_inner.style.transform = `translateX(${-transX}%)`
//             }else{}

//             //회전 값 정의
//             let rotate = (hscroll - BOX_innerW)/(BOX_wrapTOP) * 10
//             console.log(rotate)
//             if(hscroll > Garo){
//                 B_scrollCONT.style.transform = 'rotate(0deg)'
//             }else{
//                 B_scrollCONT.style.transform = `rotate(${-rotate}deg)`
//             }
//         })
//     }else{}
// })