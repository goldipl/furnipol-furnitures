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
    slidesPerView: 5,
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
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });

  let favSwiper;

  const toggleFavSwiper = () => {
    if (window.innerWidth < 760) {
      if (!favSwiper) {
        favSwiper = new Swiper('.fav-cat-swiper', {
          direction: 'horizontal',
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next.fav-swiper-next',
            prevEl: '.swiper-button-prev.fav-swiper-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            200: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
          },
        });
      }
    } else {
      if (favSwiper) {
        favSwiper.destroy(true, true);
        favSwiper = undefined;
      }
    }
  }

  toggleFavSwiper();
  window.addEventListener('resize', toggleFavSwiper);

  let gardenTimeSwiper;

  const toggleGardenTimeSwiper = () => {
    if (window.innerWidth < 760) {
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
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
          },
  });

});
