$(document).ready(function(){
    $(window).scrollTop(0);
});

$(".btn-back").click(function(){
    $(".detail-container").addClass("inactive");
    setTimeout(function(){
        $("#app").load("./index.html");
    }, 300);
});
