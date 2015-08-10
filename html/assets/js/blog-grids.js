jQuery(function ($) {

    'use strict';

       

    // -------------------------------------------------------------
    //   portfolio  (four)
    // -------------------------------------------------------------

         $(window).load(function(){

            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.portfolioFilter a').click(function(){
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                 });
                 return false;
            }); 
        });




    // -------------------------------------------------------------
    //   portfolio  (three)
    // -------------------------------------------------------------

         $(window).load(function(){

            var $container = $('.portfolio-Container');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.portfolio-Filter a').click(function(){
                $('.portfolio-Filter .current').removeClass('current');
                $(this).addClass('current');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                 });
                 return false;
            }); 
        });



    // -------------------------------------------------------------
    //   masonary-slider     [masonary-four]
    // -------------------------------------------------------------
        $(window).load(function(){

            var $containter = $('#masonary-filter-four');
            $containter.masonry({
                    itemSelector: '.item-four',
                });
        });



    // -------------------------------------------------------------
    //   masonary-slider   [masonary-three]
    // -------------------------------------------------------------
        $(window).load(function(){

            var $containter = $('#masonary-filter-three');
            $containter.masonry({
                    itemSelector: '.item-three',
                });
        });



    // -------------------------------------------------------------
    //   masonary-slider   [masonary-two]
    // -------------------------------------------------------------
        $(window).load(function(){

            var $containter = $('#masonary-filter-two');
            $containter.masonry({
                    itemSelector: '.item-two',
                });
        });




    






}); // JQuery end
