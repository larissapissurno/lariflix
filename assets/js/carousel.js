(function() {
    'use strict';

    window.Carousel = function() {
        this.build();
    }

    Carousel.prototype.build = function() {
        const arrowLeft = document.getElementById('carousel-arrow-left');
        const arrowRight = document.getElementById('carousel-arrow-right');

        arrowLeft.addEventListener('click', function(e) {
            scrollTo('first-item');
            arrowLeft.setAttribute('style', 'left: 0;');
            arrowRight.setAttribute('style', 'right: 0;');
            
        })

        arrowRight.addEventListener('click', function(e) {
            scrollTo('last-item');
            const right = calculateRightPosition();
            const left = calculateLeftPosition();

            if (!right && !left) return;

            arrowRight.setAttribute('style', `right: -${right}px`);
            arrowLeft.setAttribute('style', `left: ${left}px`);
        })

        window.alert('Carousel.prototype.build');
    }

    function scrollTo(className) {
        console.log(`scrooling to: ${className}`);
        
        var element = document.getElementsByClassName(className)[0];
        element.scrollIntoView();
    }

    function calculateRightPosition() {
        const carouselOffsetWidth = document.getElementsByClassName('carousel')[0]
        .offsetWidth;
        const positionsArrow =  document.getElementById('carousel-arrow-right')
            .getBoundingClientRect();

        const totalWidth = positionsArrow.left + positionsArrow.width; 
        return carouselOffsetWidth - totalWidth;
    }

    function calculateLeftPosition() {
        const positionsArrow =  document.getElementById('carousel-arrow-left')
            .getBoundingClientRect();

        return positionsArrow.left * -1;
    }
})();