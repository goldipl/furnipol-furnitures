const tabpar_hamburger = document.querySelector('.header-2-0 .tapbar .tapbar-wrapper-slot.hamburger');
const mobile_menu = document.querySelector('.header-2-0 .mobile-menu');
const mobile_menu_close = document.querySelector('.header-2-0 .mobile-menu-wrapper__top img');

tabpar_hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    mobile_menu.classList.add('active');
});

mobile_menu_close.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
});