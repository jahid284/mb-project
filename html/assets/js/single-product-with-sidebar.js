jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    //   producr-slider
    // -------------------------------------------------------------
    (function () {

        $('.product-slider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false,
            slideshow: false
        })

        // Navigation 
        $('.prev').on('click', function(){
            $('.product-slider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.product-slider').flexslider('next')
            return false;
        })
    }());



    $(function () {
         

        
    });





}); // JQuery end
