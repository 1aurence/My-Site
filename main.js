$(document).ready(function() {
  $("main").css("opacity", 0);
  $("#info").hide();

  setTimeout(() => {
    $("#info").show();
    $("#info").addClass("animated bounceInUp");
  }, 1000);

  setTimeout(() => {
    $("main").show();
    $("main").addClass("animated fadeInUp");
  }, 2600);
  $("h1").addClass("animated rotateIn");

  $("h1").hover(function() {
    $("h1").removeClass("animated rotateIn");

    $(this).toggleClass("animated shake");
  });

  $("a").hover(function() {
    $(this).toggleClass("animated pulse");
  });
});
