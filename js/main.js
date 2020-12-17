
$(window).scroll(function () {
  let usersroll = $(window).scrollTop();

  if (usersroll >="50") {

    $("#btnup").fadeIn(500);
    $("#navbar").css("backgroundColor", "white");
    $("#navbar").css("boxShadow", "0px 12px 30px -13px rgba(0,0,0,0.4)");
    $("nav img").attr("src","images/logo-red.png")
    $("nav a").css("color", "rgb(0,0,0)");
  }
  else {
    $("#btnup").fadeOut(500);
    $("#navbar").css("backgroundColor", "transparent")
    $("#navbar").css("boxShadow", "none");
    $("nav img").attr("src","images/logo-white.png")
    $("nav a").css("color", "white");
  }
});

$("#btnup").click(function () {
$("body,html").animate({ scrollTop: "0" }, 1000)
});



$("#navbar a").click(function () {
let idOfLink = $(this).attr("href")
let  secoffset = $(idOfLink).offset().top;
$("html,body").animate({ scrollTop:secoffset }, 1000)
});



