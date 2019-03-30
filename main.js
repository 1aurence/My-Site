$(document).ready(function() {
  $("main").css("opacity", 0);
  $("#info").css("opacity", 0);

  setTimeout(() => {
    $("#info").css("opacity", 1);
    $("#info").addClass("animated bounceInUp");
  }, 1000);

  setTimeout(() => {
    $("main").css("opacity", 1);
    $("main").addClass("animated fadeInUp");
  }, 2600);
  $("h1").addClass("animated heartBeat");

  setTimeout(() => {
    $("h1").removeClass("animated heartBeat");
  }, 1500);

  $("h1").css("pointer-events", "none");

  setTimeout(() => {
    $("h1").css("pointer-events", "auto");
  }, 3000);

  $("h1").hover(function() {
    $(this).toggleClass("animated shake");
  });

  $("a").hover(function() {
    $(this).toggleClass("animated jello");
  });
});
