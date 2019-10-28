(function () {
    'use strict';

    function onInit () {
        applyOpacityWhenScrolling();
        const config = {
            carouselClassName: 'carousel',
            carouselItems: window.carouselItems
        }
        var carousel = new Carousel(config);
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

    onInit();
})();