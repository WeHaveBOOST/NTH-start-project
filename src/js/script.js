import ready from 'Utils/documentReady.js';
import getScrollSize from 'Utils/getScrollSize.js';
import Swiper, { Navigation, Pagination, Autoplay  } from 'swiper';
// import { Fancybox } from "@fancyapps/ui";

Swiper.use([Navigation, Pagination, Autoplay]);

ready (function() {
  // Добавление кастомного свойства с системной шириной скролла
  document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);

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

  // function Fixed (
  //   target,
  //   fixationPoint = 0,
  //   fixationClass = 'active',
  //   position = 'top',
  //   hideOnKeepScrollingBottom = false,
  //   relatedElements = []
  // ) {
  //   const isTargetHTMLElement = isHTMLElement(target);
  //   if (isTargetHTMLElement === false &&
  //     typeof target !== 'string') {
  //     return console.error('Fixed(): Invalid type of first argument, expected HTMLElement | String');
  //   }

  //   const isFixationPointHTMLElement = isHTMLElement(fixationPoint);
  //   if (isFixationPointHTMLElement === false &&
  //     typeof fixationPoint !== 'string' &&
  //     typeof fixationPoint !== 'number') {
  //     return console.error('Fixed(): Invalid type of second argument, expected HTMLElement | String | Number');
  //   }

  //   const targetElement = isTargetHTMLElement ? target : document.querySelector(target);
  //   const fixationPointElement = isFixationPointHTMLElement || typeof fixationPoint === 'number' ? fixationPoint : document.querySelector(fixationPoint);

  //   let resultfixationPoint = undefined;
  //   window.addEventListener('scroll', () => {
  //     const scrollY = window.scrollY || window.pageYOffset;

  //     if (typeof fixationPoint !== 'number') {
  //       resultfixationPoint = position === 'bottom' ? fixationPointElement.offsetTop + fixationPointElement.offsetHeight : fixationPointElement.offsetTop;
  //     } else {
  //       resultfixationPoint = fixationPointElement;
  //     }

  //     if (scrollY > resultfixationPoint) {
  //       targetElement.classList.add(fixationClass);
  //     } else {
  //       targetElement.classList.remove(fixationClass);
  //     }
  //   });

  //   function isHTMLElement(element) {
  //     return element instanceof HTMLElement;
  //   }
  // }

  const dialog = document.querySelector('#testDialog');
  if (dialog) {
    const closeDialog = dialog.querySelector('button');
    const triggerOne = document.querySelector('#testDialogShow');
    const triggerTwo = document.querySelector('#testDialogShowModal');

    dialog.addEventListener('cancel', () => {
      console.log('dialog cancel');
    });

    dialog.addEventListener('close', () => {
      console.log('dialog close');
    });

    triggerOne.addEventListener('click', () => {
      dialog.show();
    });

    triggerTwo.addEventListener('click', () => {
      dialog.showModal();
    });

    closeDialog.addEventListener('click', () => {
      dialog.close();
    });
  }

});

// import $ from 'jquery'; // Перед использованием установить как зависимость
// $(function() {
//   console.log('jQuery героически сработал!');
// });
