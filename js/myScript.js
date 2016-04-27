$(document).ready(function(){
    $("#home").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#home").fadeIn("slow");
        }
        else {
            $("#home").fadeOut("fast");
        }
    });
    $("#links").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#links").fadeIn("slow");
        }
        else {
            $("#links").fadeOut("fast");
        }
    });
    $("#myCarousel").carousel({
         interval: 5000
     });
    $("#home").click(function (){
                $('html, body').animate({
                    scrollTop: $(".header").offset().top
                }, 500);
            });
    $("#main-btn").click(function (){
                $('html, body').animate({
                    scrollTop: $("#main").offset().top
                }, 500);
            });
    $("#pargrupu-btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".par-grupu").offset().top
                }, 500);
            });
});