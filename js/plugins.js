/*global $ ,jQuery ,alert */

$(document).ready(function () {
   
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    $('.carousel').carousel({
        interval: 5000
        
    });
    
 // show Color Option Div When Click To the Gear
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    
// Change Theme Color On Click
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor", "#cc1818").end()
        .eq(1).css("backgroundColor", "#21af21").end()
        .eq(2).css("backgroundColor", "#0875ff").end()
        .eq(3).css("backgroundColor", "#ec3de7").end()
        .eq(4).css("backgroundColor", "#ff8a10");
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
   
// Caching Scroll Top    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    
// Click On Scroll Button
    
    scrollButton.click(function () {
         
        $("html,body").animate({scrollTop : 0}, 600);
    });
});
// Loading Screen
$(window).load(function () {
    
    "use strict";
    
    $("body").css("overflow", "auto");
    $(".loading-overlay").fadeOut(1000);
    
});

// 
    
