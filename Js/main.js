$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scorll-load", function () {
    $(this).removeClass("fa-times");
    $("header").removeClass("toggle");
  });
});
