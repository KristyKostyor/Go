
new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".button-left",
    prevEl: ".button-right",
  },
});
