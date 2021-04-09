const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
     1300: {
      slidesPerView: 4
    },
     1100: {
      slidesPerView: 3
    },
     700: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  }, 
});

const swiperTwo = new Swiper('.channel-slider-two', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
     1100: {
      slidesPerView: 2
    },
  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-btn-next',
    prevEl: '.channel-btn-prev',
  }, 
});

const swiperThree = new Swiper('.channel-slider-three', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
 breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
     1300: {
      slidesPerView: 4
    },
     1100: {
      slidesPerView: 3
    },
     700: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-right',
    prevEl: '.channel-button-left',
  }, 
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
})

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiperTwo.destroy();
  swiperThree.destroy();
}