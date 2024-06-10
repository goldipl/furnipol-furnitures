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
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next.sale-swiper-next',
      prevEl: '.swiper-button-prev.sale-swiper-prev',
    },
    breakpoints: {
      1240: {
        slidesPerView: 6,
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
          slidesPerView: 1,
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
});
