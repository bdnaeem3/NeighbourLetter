$(document).ready(function () {

    // Bootstrap ScrollSpy

    $('body').scrollspy({ target: '#sticky-menu' })


    // Activating wow.js

    new WOW().init();


    // Counter

    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }


    // Remove Popup | upsell-without-zip.html

    $('.map-wrapper .close-btn').on('click', function () {
        $('.map-wrapper').removeClass('popup-on');
        $('.map-wrapper form').fadeOut(200);
    });


    // Smooth Scroll

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){
                window.location.hash = hash;
            });
        }
    });
    
    
    // Revert Button Color
    
    $('.revert-btn-color button').on('click', function () {
        var p = $(this).parent();

        $('button', p).toggleClass('btn-primary');
    });

});


