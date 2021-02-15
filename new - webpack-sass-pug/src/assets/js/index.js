import '../../sass/styles.scss';
import $ from 'jquery';
import Swiper from 'swiper';
import './gspa.js';
// import './video.js';
// import './countdown.js';


var mySwiper = new Swiper(".swiper-container", {
  // slidesPerView: 4,
  // spaceBetween: 10,
  // mousewheel: true,
  // keyboard: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      cssMode: false,
      mousewheel: true,
      keyboard: true,
      autoplay: false,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      cssMode: true,
      autoplay: false,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
      cssMode: false,
      autoplay: false,
      // speed: 3000,
      continuous: true,
      mousewheel: true,
      keyboard: true,
      loop: true,
    },
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});


$(document).ready(function ($) {
//   //mini-menu
// if ($(window).width() < 992) {
//   $('.mini-menu').click(function () {
//     $('.menu').toggleClass('active', 'fast');
//     $('.mini-menu').toggleClass('active', 'fast');
//   });
//   $('.menu').click(function () {
//     $('.menu').toggleClass('active', 'fast');
//     $('.mini-menu').toggleClass('active', 'fast');
//   });
//   $('.mini-menu.active').click(function () {
//     $('.menu').toggleClass('active', 'fast');
//     $('.mini-menu').toggleClass('active', 'fast');
//   });
// }
  // quando for usar submenu retirar if acima
  // MOSTRANDO AS SUB-CATEGORIA NO MOBILE
  // $(".menu a").on("click", function () {
  //   if ($(window).width() < 768) {
  //     if ($(this).next().is("ul")) {
  //       $(".menu ul li ul").slideUp();

  //       if ($(this).next("ul").is(":visible")) {
  //         $(this).next("ul").slideUp();
  //       }

  //       else {
  //         $(this).next("ul").slideDown();
  //       }

  //       return false;
  //     }

  //     else {
  //       return true;
  //     }
  //   }
  // });

  // ROLAGEM AUTOMATICA AO CLICAR NOS ELEMENTOS DO MENU
  if ($(window).width() < 768) {
    $(".menu-mover").click(function (event) {
      var mover = $(this).attr('href');
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $(mover).offset().top - 1
      }, 1000);
      return false;
    });
  } else {
    $(".menu-mover").click(function (event) {
      var mover = $(this).attr('href');
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $(mover).offset().top + 1
      }, 1000);
      return false;
    });
  }

});



$(document).ready(function () {
  // abrir e fechar em duvidas
  $('.duvidas__item h3').on('click', function () {
    $(".duvidas__item .duvidas-item__content").slideUp();
    $(".duvidas__item").removeClass("active");

    if ($(this).next(".duvidas__item .duvidas-item__content").is(":visible")) {
      $(this).next(".duvidas__item .duvidas-item__content").slideUp();
      $(this).parent(".duvidas__item").removeClass("active");
    } else {
      $(this).next(".duvidas__item .duvidas-item__content").slideDown();
      $(this).parent(".duvidas__item").addClass("active");
    }

  });
});
