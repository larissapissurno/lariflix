(function() {
  "use strict";

  window.Carousel = class Carousel {
    arrow = { Right: "right", Left: "left" };
    carouselItemsDiv = null;

    constructor(carouselClassName, carouselItems) {
      this.carousel = document.querySelector(`.${carouselClassName}`);
      this.carouselItems = carouselItems;
    }

    init = () => {
      this.createArrows();

      this.insertCarouselItems();
    };

    createArrows = () => {
      this.createArrow(this.arrow.Left);
      this.createArrow(this.arrow.Right);
    };

    createArrow = direction => {
      const arrow = document.createElement("div");
      arrow.setAttribute("id", `carousel-arrow-${direction}`);
      arrow.classList.add("carousel-arrow");
      arrow.classList.add(direction);

      const arrowIcon = document.createElement("i");
      arrowIcon.classList.add("fa");
      arrowIcon.classList.add(`fa-angle-${direction}`);

      arrow.append(arrowIcon);

      arrow.addEventListener("click", e => this.scrollCarouselTo(direction));

      this.carousel.append(arrow);

      return arrow;
    };

    insertCarouselItems = () => {
      if (!this.carouselItems || !this.carouselItems.length) {
        return;
      }

      this.carouselItemsDiv = document.createElement("div");
      this.carouselItemsDiv.classList.add("carousel-items-list");

      this.carouselItems.map((item, index) => {
        const carouselItem = document.createElement("div");
        let style = `background-image: url(assets/images/posters/${item.url});`;
        style += "background-position: center;";
        style += "background-repeat: no-repeat;";
        style += "background-size: cover;";

        carouselItem.classList.add("carousel-item");
        carouselItem.setAttribute("style", style);

        this.carouselItemsDiv.append(carouselItem);
        this.setClickEventOnCarouselItem(carouselItem, item.url);
      });

      this.carousel.append(this.carouselItemsDiv);
    };

    setClickEventOnCarouselItem = (carouselItem, url) => {
      const content = document.getElementsByClassName("content")[0];

      carouselItem.addEventListener("click", function(e) {
        content.style.backgroundImage = `url(./assets/images/posters/${url})`;
      });
    };

    scrollCarouselTo = direction => {
      let x = this.carouselItemsDiv.offsetWidth;
      const y = 0;

      if (direction === this.arrow.Left) {
        x = this.carouselItemsDiv.offsetWidth * -1;
      }

      this.carouselItemsDiv.scrollBy(x, y);
    };
  };
})();
