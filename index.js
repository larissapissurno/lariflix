(function() {
  'use strict';

  function onInit() {
    applyOpacityWhenScrolling();
    initCarousel();
  }

  function applyOpacityWhenScrolling() {
    document.addEventListener("scroll", function(e) {
      var headerElement = document.getElementsByClassName('grid-template-areas-header')[0];

      if (window.pageYOffset === 0) {
        headerElement.style["background-color"] = 'rgb(46, 46, 46, 0)';
        return;
      }

      headerElement.style["background-color"] = 'rgb(46, 46, 46, 1)';
      return;
    });
  }

  function initCarousel() {
    const config = {
      carouselClassName: 'carousel',
      carouselItems: window.carouselItems
    };
    new Carousel(config);
  }

  onInit();
})();
