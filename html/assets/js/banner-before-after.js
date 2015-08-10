jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // bannerFive banner-left
    // -------------------------------------------------------------

   
       $(window).load(function(){
          $("#banner1").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
          });
        });



    // -------------------------------------------------------------
    // bannerFive banner-right
    // -------------------------------------------------------------


       $(window).load(function(){
          $("#banner2").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
          });
        });





}); // JQuery end
