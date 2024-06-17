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

$(document).ready(function() {
  if ($(window).width() > 760) {
    $('.header-2-0 .bottom-header-nav__el span').on('click', function() {
      var $wrapper = $(this).siblings('.bottom-header-nav__wrapper');

      // Remove the active class from all .bottom-header-nav__wrapper elements
      $('.bottom-header-nav__wrapper').removeClass('active');

      // Check if this span element was previously clicked
      if ($(this).data('clicked')) {
          // Remove the active class on the second click
          $wrapper.removeClass('active');
          // Reset the click state
          $(this).data('clicked', false);
      } else {
          // Add the active class on the first click
          $wrapper.addClass('active');
          // Set the click state to true
          $(this).data('clicked', true);
      }

      // Reset the click state for other span elements
      $('.header-2-0 .bottom-header-nav__el span').not(this).data('clicked', false);
    });
  }
});

// 2nd level expanded menu
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .mobile-menu-list__slot.without-link');
  const prevButtons = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper__content-menu-list .mobile-menu-list__slot img');

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






