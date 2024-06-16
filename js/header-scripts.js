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
});


