const tabpar_hamburger = document.querySelector('.header-2-0 .tapbar .tapbar-wrapper-slot.hamburger');
const mobile_menu = document.querySelector('.header-2-0 .mobile-menu');
const mobile_menu_close = document.querySelector('.header-2-0 .mobile-menu-wrapper__top img');

tabpar_hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    mobile_menu.classList.add('active');
    document.body.classList.add('body-locked');
    document.getElementsByTagName('html')[0].classList.add('body-locked');
    $('.mobile-menu-img-wrapper').removeClass('active');
    $('.menu-inner-second-lvl').removeClass('active');
    $('.menu-inner-third-lvl-content').removeClass('active');
});

mobile_menu_close.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
    document.body.classList.remove('body-locked');
    document.getElementsByTagName('html')[0].classList.remove('body-locked');
    $('.mobile-menu-img-wrapper').removeClass('active');
    $('.menu-inner-second-lvl').removeClass('active');
    $('.menu-inner-third-lvl-content').removeClass('active');
});