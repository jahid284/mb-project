jQuery(function ($) {

    'use strict';


    //-------------------------------------------------------
    // counter One
    //-------------------------------------------------------
    (function () {
            $('.counterOne').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

      }());



    //-------------------------------------------------------
    // counter Two
    //-------------------------------------------------------
    (function () {
            $('.counterTwo').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

      }());



    // -------------------------------------------------------------
    // Counter Three (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-one').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#00bfa5',
            trackColor: '#b0bec5',
            scaleColor: false,
            lineWidth: 5,
            size: 220,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

        $('.chart-two').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#1de9b6',
            trackColor: '#00bfa5',
            scaleColor: false,
            lineWidth: 9,
            size: 220,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

        $('.chart-three').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#64ffda',
            trackColor: '#00bfa5',
            scaleColor: false,
            lineWidth: 2,
            size: 200,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

        $('.chart-four').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#ffccbc',
            trackColor: '#ef5350',
            scaleColor: false,
            lineWidth: 3,
            size: 200,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    
    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
        $('.progress-item').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).off('inview');
            }
        });



    // -------------------------------------------------------------
    // Progress Bar    [progress-Two]
    // -------------------------------------------------------------

        $(document).ready(progressbar);

        $(window).resize(progressbar);

         function progressbar(){
              var progressBarWidth = $(".progressBar").width();
              $(".colours span").css('width', progressBarWidth/4);
            }





}); // JQuery end
