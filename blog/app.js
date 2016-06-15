        //Shrinks navbar
        $(window).scroll(function() {
            if ($(document).scrollTop() > 40) {
                $('nav').addClass('shrink');

            } else {
                $('nav').removeClass('shrink');
            }
        });
        //Smooth Scroll
        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 500);
                        return false;
                    }
                }
            });
        });