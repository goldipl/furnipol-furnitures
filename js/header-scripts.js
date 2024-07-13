document.addEventListener('DOMContentLoaded', () => {
    const furnitures_menu_swiper = new Swiper('.menu-furnitures-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 7,
      navigation: {
        nextEl: '.swiper-button-next.menu-furnitures-swiper-next',
        prevEl: '.swiper-button-prev.menu-furnitures-swiper-prev',
      },
      breakpoints: {
        1600: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1240: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
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
      breakpoints: {
        1600: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1240: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
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

// Fixed header
document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header-2-0 .top-header');
	const headerOffset = header.offsetTop;

	window.addEventListener('scroll', () => {
		if (window.scrollY > headerOffset) {
			header.classList.add('fixed-header');
		} else {
			header.classList.remove('fixed-header');
		}
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
    const cartIcon = document.querySelector('.top-header .cart');

    // Function to handle click events outside the cart preview box
    const handleClickOutside = (event) => {
      if (cartPreviewBox && !cartPreviewBox.contains(event.target) && event.target !== cartHeaderIconBtn) {
        cartPreviewBox.classList.remove('active');
        document.removeEventListener('click', handleClickOutside);
      }
    };

    // Click event listener on cart icon button
    cartHeaderIconBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartPreviewBox) {
        // Toggle active class
        cartPreviewBox.classList.toggle('active');

        if (cartPreviewBox.classList.contains('active')) {
          // Add event listener to handle clicks outside only when cart preview box is active
          document.addEventListener('click', handleClickOutside);
        } else {
          // If cart preview box is closed, remove the event listener
          document.removeEventListener('click', handleClickOutside);
        }
      }
    });

    // Prevent propagation of click events from cart preview box to document
    cartIcon.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});

// Mobile furnitures opening menu
$(document).ready(() => {
  $('.header-2-0 .bottom-header-nav__el.furnitures-element span a').click((e) => {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.header-2-0 .mobile-menu').addClass('active');
    $('body').addClass('body-locked');
    $('html').addClass('body-locked');
    $('.mobile-menu-img-wrapper').removeClass('active');
    $('.menu-inner-second-lvl').removeClass('active');
    $('.menu-inner-third-lvl-content').removeClass('active');
    $('.mobile-menu-img-wrapper.rooms-inner-menu').removeClass('active');
    $('.menu-inner-second-lvl.furnitures-inner-menu').addClass('active');
  });
});

// Mobile rooms opening menu
$(document).ready(() => {
  $('.header-2-0 .bottom-header-nav__el.rooms-element span a').click((e) => {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.header-2-0 .mobile-menu').addClass('active');
    $('body').addClass('body-locked');
    $('html').addClass('body-locked');
    $('.mobile-menu-img-wrapper').removeClass('active');
    $('.menu-inner-second-lvl').removeClass('active');
    $('.menu-inner-third-lvl-content').removeClass('active');
    $('.menu-inner-second-lvl.furnitures-inner-menu').removeClass('active');
    $('.mobile-menu-img-wrapper.rooms-inner-menu').addClass('active');
  });
});