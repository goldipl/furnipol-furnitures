document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.hero-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next.hero-swiper-next',
      prevEl: '.swiper-button-prev.hero-swiper-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const saleSwiper = new Swiper('.sale-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.sale-swiper-next',
      prevEl: '.swiper-button-prev.sale-swiper-prev',
    },
    breakpoints: {
      1240: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });

  let gardenTimeSwiper;

  const toggleGardenTimeSwiper = () => {
    if (window.innerWidth < 1220) {
      if (!gardenTimeSwiper) {
        gardenTimeSwiper = new Swiper('.garden-time-swiper', {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next.garden-time-swiper-next',
            prevEl: '.swiper-button-prev.garden-time-swiper-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            760: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          },
        });
      }
    } else {
      if (gardenTimeSwiper) {
        gardenTimeSwiper.destroy(true, true);
        gardenTimeSwiper = undefined;
      }
    }
  }

  toggleGardenTimeSwiper();
  window.addEventListener('resize', toggleGardenTimeSwiper);

  const bundle_swiper = new Swiper('.bundle-promo-swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 1,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.bundle-promo-swiper-next',
      prevEl: '.swiper-button-prev.bundle-promo-swiper-prev',
    },
    breakpoints: {
      760: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      200: {
        slidesPerView: 'auto',
        centeredSlides: true,
        slidesPerView: 1,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
    },
  });

  const living_room_tabs_swiper = new Swiper('.living-room-tabs-swiper', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.living-room-tabs-swiper-next',
      prevEl: '.swiper-button-prev.living-room-tabs-swiper-prev',
    },
    breakpoints: {
      // Mobile view
      0: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // Desktop view
      1220: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });

  const bedroom_tabs_swiper = new Swiper('.bedroom-tabs-swiper', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.bedroom-tabs-swiper-next',
      prevEl: '.swiper-button-prev.bedroom-tabs-swiper-prev',
    },
    breakpoints: {
      // Mobile view
      0: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // Desktop view
      1220: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });

  const children_room_tabs_swiper = new Swiper('.children-room-tabs-swiper', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.children-room-tabs-swiper-next',
      prevEl: '.swiper-button-prev.children-room-tabs-swiper-prev',
    },
    breakpoints: {
      // Mobile view
      0: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // Desktop view
      1220: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });

  const bathroom_tabs_swiper = new Swiper('.bathroom-tabs-swiper', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.bathroom-tabs-swiper-next',
      prevEl: '.swiper-button-prev.bathroom-tabs-swiper-prev',
    },
    breakpoints: {
      // Mobile view
      0: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // Desktop view
      1220: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });

  const kitchen_tabs_swiper = new Swiper('.kitchen-tabs-swiper', {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.kitchen-tabs-swiper-next',
      prevEl: '.swiper-button-prev.kitchen-tabs-swiper-prev',
    },
    breakpoints: {
      // Mobile view
      0: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // Desktop view
      1220: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });
  

});
