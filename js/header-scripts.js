document.addEventListener('DOMContentLoaded', () => {
    const furnitures_menu_swiper = new Swiper('.menu-furnitures-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 7,
      navigation: {
        nextEl: '.swiper-button-next.menu-furnitures-swiper-next',
        prevEl: '.swiper-button-prev.menu-furnitures-swiper-prev',
      },
    });
    const rooms_menu_swiper = new Swiper('.menu-rooms-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 7,
      navigation: {
        nextEl: '.swiper-button-next.menu-rooms-swiper-next',
        prevEl: '.swiper-button-prev.menu-rooms-swiper-prev',
      },
    });
    const available_menu_swiper = new Swiper('.menu-available-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next.menu-available-swiper-next',
        prevEl: '.swiper-button-prev.menu-available-swiper-prev',
      },
    });
});

// 2nd level expanded menu
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .mobile-menu-list__slot.without-link');
  const prevButtons = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .mobile-menu-list__slot .prev-icon');

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          const childMenu = item.querySelector('.menu-inner-second-lvl');
          if (childMenu) {
              childMenu.classList.add('active');
          }
          const childMenuImgs = item.querySelector('.mobile-menu-img-wrapper');
          if (childMenuImgs) {
              childMenuImgs.classList.add('active');
          }
      });
  });

  prevButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent the event from bubbling up
          const parentMenu = button.closest('.menu-inner-second-lvl');
          if (parentMenu) {
              parentMenu.classList.remove('active');
          }
          const parentImgWrapper = button.closest('.mobile-menu-img-wrapper');
          if (parentImgWrapper) {
              parentImgWrapper.classList.remove('active');
          }
      });
  });
});

// 3rd level expanded menu
document.addEventListener('DOMContentLoaded', () => {
  const secondLvlMenuItems = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .second-lvl-menu-wrapper__el');
  const prevSecondLvlButtons = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .menu-inner-third-lvl-content .prev-icon-third-lvl');

  secondLvlMenuItems.forEach(item => {
      item.addEventListener('click', () => {
          const childSecondMenu = item.querySelector('.menu-inner-third-lvl-content');
          if (childSecondMenu) {
            childSecondMenu.classList.add('active');
          }
      });
  });

  prevSecondLvlButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent the event from bubbling up
          const parentSecondLvlMenu = button.closest('.menu-inner-third-lvl-content');
          parentSecondLvlMenu.classList.remove('active');
      });
  });
});

// Close icon 
document.addEventListener('DOMContentLoaded', () => {
  const closeIcons = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper .close-icon')

  closeIcons.forEach(item => {
      item.addEventListener('click', () => {
        mobile_menu.classList.remove('active');
        document.body.classList.remove('body-locked');
        document.getElementsByTagName('html')[0].classList.remove('body-locked');
      });
  });
});

// Images menu
document.addEventListener('DOMContentLoaded', () => {
  const menuImgItems = document.querySelectorAll('.header-2-0 .mobile-menu-img-wrapper-bottom__slot');

  menuImgItems.forEach(item => {
      item.addEventListener('click', () => {
          const childImgMenu = item.querySelector('.menu-inner-third-lvl-content');
          if (childImgMenu) {
            childImgMenu.classList.add('active');
          }
      });
  });
});

// Cart preview box on desktop devices, so above 1220px screen width
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1220) {
    const cartHeaderIconBtn = document.querySelector('.header-2-0 .top-header__buttons .cart > a');
    const cartPreviewBox = document.querySelector('.header-2-0 .cart-preview-box');

    cartHeaderIconBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartPreviewBox) {
        cartPreviewBox.classList.toggle('active');
      }
    });
  }
});

