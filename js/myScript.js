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
    $("#myCarousel").carousel({
         interval: 5000
     });
});