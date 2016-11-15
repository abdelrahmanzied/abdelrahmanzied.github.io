/*global $, alert, console*/

$(function () {

    'use strict';

    $('header').height($(window).height());
    $(window).resize(function() {
    	$('header').height($(window).height());
        
        $('header .slider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('header .slider').height()) / 3);
        });
    
    });
    
    //end resize

    // Links

    $('.site-nav-list li').click(function(){
    	$(this).addClass('active-link').siblings().removeClass('active-link');
    });

    // nav icon

    $('.handle').on('click', function() {
    	$('.site-nav-list').toggleClass('showing');
    });

    $('header .me').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('header .slider').height()) / 4);
    });

    new WOW().init();

});

              