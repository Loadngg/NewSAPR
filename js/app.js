// Scroll Top on reload
// $(window).on('beforeunload', function(){
//     $(window).scrollTop(0);
// });

// Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]'); 
    for (let smoothLink of smoothLinks) { 
    smoothLink.addEventListener('click', function(event) { 
    event.preventDefault(); 
    const yOffset = -100; 
    const id = smoothLink.getAttribute('href'); 
    const element = document.querySelector(id) 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; 

    window.scrollTo({top: y, behavior: 'smooth'}); 
    }) 
}

// Slick
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        infinity: true,
		fade: true,
  		cssEase: 'linear',
        autoplay:true,
        autoplaySpeed:2000,
    });
});

// overflow
// function showOverflow(blockId) {
//     currBlockId = blockId;
//     block = document.getElementById(currBlockId);
//     iframe = block.firstElementChild;
//     iframe.src = iframe.dataset.src;
//     block.classList.remove('hidden'); 
//     setTimeout(function(){
//         block.classList.remove('transparent')
//     }, 20)
// };

// function hideOverflow() {
//     block.classList.add('transparent'); 
//     setTimeout(function(){
//         block.classList.add('hidden')
//         iframe.src = "about:blank";
//     }, 500);
// }

// Animation
// const animItems = document.querySelectorAll('.anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemH = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemH / animStart;
//             if (animItemH > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemH)) {
//                 animItem.classList.add('show');
//             }
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//         scrollTop = window.scrollY || document.documentElement.scrollTop;
//         return {
//             top: rect.top + scrollTop,
//             left: rect.left + scrollLeft
//         }
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, 300) 
// }

// Nav
// let navBtn = document.getElementById('nav_toggle');
// let nav = document.getElementById('nav');
// let navLinks = document.getElementsByClassName('nav__link');

// navBtn.onclick = function (event) {
//     event.preventDefault();

//     if (nav.classList.contains('active')) {
//         nav.classList.add('hide');
//         setTimeout(function(){
//             nav.classList.remove('active');
//             header.classList.remove('active');
//         }, 300);
//         navBtn.classList.remove('active');
//     } else {
//         nav.classList.add('active');
//         nav.classList.remove('hide');
//         navBtn.classList.add('active');
//         header.classList.add('active');
//     }
// }

// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', function() {
//         nav.classList.add('hide');
//         setTimeout(function(){
//             nav.classList.remove('active');
//             header.classList.remove('active');
//         }, 300);
//         navBtn.classList.remove('active');  
//     });
// }