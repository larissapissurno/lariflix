(function () {
    'use strict';

    function onInit () {
        applyOpacityWhenScrolling();
        applyClickScrollEvents();
    }

    function applyOpacityWhenScrolling() {
        document.addEventListener('scroll', function(e) {
            var header = document
                .getElementsByClassName('grid-template-areas-header')[0];
            if (window.pageYOffset === 0) {
                header.style['background-color'] = 'rgb(46, 46, 46, 0)';
                return;
            }
            header.style['background-color'] = 'rgb(46, 46, 46, 1)';
            return;
        });
    }

    function applyClickScrollEvents() {
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

            arrowRight.setAttribute('style', `right: -${right}px`);
            arrowLeft.setAttribute('style', `left: ${left}px`);
        })
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

    onInit();
})();