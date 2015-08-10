jQuery(function ($) {




	'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("sticky-nav");
	    } else {
	        $(".navbar-fixed-top").removeClass("sticky-nav");
	    }
	});









    // -------------------------------------------------------------
    // Twitter Feed on Blog Page Widget
    // -------------------------------------------------------------
    (function () {


        if ($('#twitterWidget').length > 0) { 
            var twitterConfig = {
                id: "567185781790228482", //put your Widget ID here
                domId: "twitterWidget",
                maxTweets: 3,
                enableLinks: true,
                showUser: true,
                showTime: true,
                showInteraction: false
            };

            twitterFetcher.fetch(twitterConfig);
        }

    }());





}); // JQuery end