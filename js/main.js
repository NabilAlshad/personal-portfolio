// navbar color change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  navs: false,
  autoplayTimeout: 8000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      margin: 20,
    },
    300: {
      items: 1,
      margin: 20,
      nav: false,
    },
    400: {
      items: 1,
      nav: false,
      margin: 20,
    },
    600: {
      items: 2,
      nav: false,
    },
    800: {
      items: 2,
      nav: false,

      loop: true,
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
    },
  },
});
s;
