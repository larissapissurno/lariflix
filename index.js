(function () {
    onInit = function () {
        applyOpacityWhenScrolling();
    }

    applyOpacityWhenScrolling = function () {
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
    
            $('.grid-template-areas-header').css({
                'background-color': function () {
                    if (window.pageYOffset === 0) {
                        return 'rgb(46, 46, 46, 0)';
                    }
                    
                    return 'rgb(46, 46, 46, 1)';
                }
            });
        });
    }

    onInit();
})();