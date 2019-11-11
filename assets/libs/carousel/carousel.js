(function() {
  'use strict';

  window.Carousel = function(config) {
    this.carousel = document.getElementsByClassName(config.carouselClassName)[0];
    this.carouselItems = config.carouselItems;
    this.build();
  }
  
  Carousel.prototype.build = function() {
    const self = this;
    self.createArrowLeft();

    self.insertCarouselItems();

    self.createArrowRight();
  }

  Carousel.prototype.createArrowLeft = function() {
    const arrowLeft = createArrow('left');
    this.carousel.append(arrowLeft);

    arrowLeft.addEventListener('click', function(e) {
      const arrowRight = document.getElementById('carousel-arrow-right');

      arrowLeft.classList.add('hide');
      arrowRight.classList.add('hide');
      scrollTo('first-item');
      
      setTimeout(() => {
        arrowLeft.classList.remove('hide');
        arrowRight.classList.remove('hide');

        const right = calculateRightPosition();

        arrowLeft.setAttribute('style', 'left: 0;');
        arrowRight.setAttribute('style', `right: ${right}px;`);

      }, 500);  
    });
  }

  Carousel.prototype.createArrowRight = function() {
    const arrowRight = createArrow('right');
    this.carousel.append(arrowRight);

    arrowRight.addEventListener('click', function(e) {
      const arrowLeft = document.getElementById('carousel-arrow-left');
      
      arrowLeft.classList.add('hide');
      arrowRight.classList.add('hide');
      scrollTo('last-item');

      setTimeout(() => {
        arrowLeft.classList.remove('hide');
        arrowRight.classList.remove('hide');

        const right = calculateRightPosition();
        const left = right * -1;

        if (right || left) {
          arrowRight.setAttribute('style', `right: ${right}px`);
          arrowLeft.setAttribute('style', `left: ${left}px`);
        }
      }, 500);     
    });
  }

  Carousel.prototype.insertCarouselItems = function() {
    const self = this;

    if (!self.carouselItems || !self.carouselItems.length) { return; }

    self.carouselItems.map((item, index) => {
      const carouselItem = document.createElement('div');
      let style = `background-image: url(assets/images/posters/${item.url});`;
      style += 'background-position: center;';
      style += 'background-repeat: no-repeat;';
      style += 'background-size: cover;';

      carouselItem.classList.add('carousel-item');
      carouselItem.setAttribute('style', style);

      if (index === 0) {
        carouselItem.classList.add('first-item');
      }

      if (index === (self.carouselItems.length - 1)) {
        carouselItem.classList.add('last-item');
      }

      self.carousel.append(carouselItem);
      setClickEventOnCarouselItem(carouselItem, item.url)
    });
  }

  function scrollTo(className) {
    console.log(`scrooling to: ${className}`);
    
    var element = document.getElementsByClassName(className)[0];
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  function calculateRightPosition() {
    const arrowRight = document.getElementById('carousel-arrow-right');

    var positions = arrowRight.getBoundingClientRect();
    var currentPosition = +arrowRight.style.right.replace('px','');
    var parentWidth = arrowRight.parentElement.offsetWidth;

    const right = currentPosition - (parentWidth - positions.right);

    return right;
  }

  function createArrow(direction) {
    const arrow = document.createElement('div');
    arrow.setAttribute('id', `carousel-arrow-${direction}`);
    arrow.classList.add('carousel-arrow');
    arrow.classList.add(direction);

    const arrowLeftIcon = document.createElement('i');
    arrowLeftIcon.classList.add('fa');
    arrowLeftIcon.classList.add(`fa-arrow-${direction}`);
    
    arrow.append(arrowLeftIcon);

    return arrow;
  }

  function setClickEventOnCarouselItem(carouselItem, url) {
    const content = document.getElementsByClassName('content')[0];

    carouselItem.addEventListener('click', function(e) {
      content.style.backgroundImage = `url(./assets/images/posters/${url})`;
    })
  }
})();