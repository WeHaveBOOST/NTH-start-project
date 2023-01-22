// /* global document console */

import ready from 'Utils/documentReady.js';
import getScrollSize from 'Utils/getScrollSize.js';
import Swiper, { Navigation, Pagination, Autoplay  } from 'swiper';
// import { Fancybox } from "@fancyapps/ui";

Swiper.use([Navigation, Pagination, Autoplay]);

ready(function() {
  // Добавление кастомного свойства с системной шириной скролла
  document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);

  const body = document.querySelector('body');

  // new Swiper("cssSelector", {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   speed: 1000,
  //   navigation: {
  //     prevEl: "cssSelector .swiper-button-prev",
  //     nextEl: "cssSelector .swiper-button-next",
  //   },
  //   pagination: {
  //     el: "cssSelector .swiper-pagination",
  //     type: "fraction",
  //     formatFractionCurrent: function(num) {
  //       return `0${num}`;
  //     },
  //     formatFractionTotal: function(num) {
  //       return `0${num}`;
  //     },
  //   },
  //   breakpoints: {
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     992: {
  //       allowTouchMove: false,
  //       slidesPerView: 4,
  //     },
  //     1200: {
  //       slidesPerView: 5,
  //     },
  //     1704: {
  //       slidesPerView: 7,
  //     },
  //   },
  //   on: {
  //     init: function (swiper) {

  //     },
  //     slideChange: function (swiper) {

  //     },
  //   },
  // });


  new Swiper(".test-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
      prevEl: ".test-slider .swiper-button-prev",
      nextEl: ".test-slider .swiper-button-next",
    },
    pagination: {
      el: ".test-slider .swiper-pagination",
    },
    on: {
      init: function (swiper) {

      },
      slideChange: function (swiper) {

      },
    },
  });

});

// import $ from 'jquery'; // Перед использованием установить как зависимость
// $(function() {
//   console.log('jQuery героически сработал!');
// });
