const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  }, 
});

const swiperTwo = new Swiper('.channel-slider-two', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-btn-next',
    prevEl: '.channel-btn-prev',
  }, 
});

const swiperThree = new Swiper('.channel-slider-three', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-right',
    prevEl: '.channel-button-left',
  }, 
});