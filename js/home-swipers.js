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

  const sale_swiper = new Swiper('.sale-swiper', {
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
});
