//scroll function for navbar
$('#nav-index').addClass("active");

  $("#nav-index").click(function() {
        $('html, body').animate({
            scrollTop:        $("#home").offset().top-66
        }, 1000);
    return false;
    });
  
  $("#nav-about").click(function() {
        $('html, body') .animate({
            scrollTop:        $("#about").offset().top-64
        }, 1000);
    return false;
    });
  
  $("#nav-work").click(function() {
        $(' html,body') .animate({
            scrollTop:        $("#work").offset().top-64
        }, 1000);
    return false;
    });
  
  $("#nav-contact").click(function() {
    $(this).addClass("active");
        $('html,body ') .animate({
            scrollTop:        $("#contact").offset().top-112
        }, 1000);
    return false;
    });

    $('#about').waypoint(function() {
  
    $(".container ul li").children().removeClass("active");
    $("#nav-about").addClass("active");
    
  }, { offset: 112 });
  
    $('#work').waypoint(function() {

    $(".container ul li").children().removeClass("active");
    $("#nav-work").addClass("active");

  }, { offset: 112 });
  
    $('#contact').waypoint(function() {

    $(".container ul li").children().removeClass("active");
    $("#nav-contact").addClass("active");

  }, { offset: 101 });
  
    $('#home').waypoint(function() {

    $(".container ul li").children().removeClass("active");
    $("#nav-index").addClass("active");

  }, { offset: 0 });



//copy email address
function copyEmail() {
  navigator.clipboard.writeText
    ("jorgekupfer@gmx.de");
    btn.style.backgroundColor = 'salmon';
}