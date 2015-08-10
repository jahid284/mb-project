jQuery(function ($) {

    'use strict';




    // -------------------------------------------------------------
    // For the Second level Dropdown menu, highlight the parent 
    // -------------------------------------------------------------
    (function () {

        $( ".dropdown-menu" )
        .mouseenter(function() {
            $(this).parent('li').addClass('active');
        })
        .mouseleave(function() {
            $(this).parent('li').removeClass('active');
        });

    }());


    



    // -------------------------------------------------------------
    // initialize popover
    // -------------------------------------------------------------
    (function () {

        $('[data-toggle="popover"]').popover()

    }());



    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {
        
        if ($('#countdownThree').length > 0) { 

            $("#countdownThree").countdown({
                date: "30 august 2015 12:00:00",
                format: "on"
            });
        }

    }()); 





    // -------------------------------------------------------------
    // Twitter Feed on Blog Page Widget
    // -------------------------------------------------------------
    (function () {

        if ($('#twitterWidget').length > 0) {

            var twitterConfig = {
                id: "567185781790228482", //put your Widget ID here
                domId: "twitterWidget",
                maxTweets: 1,
                enableLinks: false,
                showUser: false,
                showTime: false,
                showInteraction: false
            };

            twitterFetcher.fetch(twitterConfig);
        
        }

    }());




    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools:false}); 
    }());




    




}); // JQuery end
