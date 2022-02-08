$(document).ready(function () {
  // Hides / Unhides the Menu
  $("#menu-1").click(function () {
    $(".menu-drop").slideToggle();
  });

  // Jquery for animation effects and chained effects
  $("h2").click(function () {
    var h2 = $("h2");
    h2.animate({ opacity: "0.4" }, "slow");
    h2.css("color", "blue").slideDown(250).slideUp(250).slideDown(250);
    h2.animate({ opacity: "1" }, "slow");
  });
});
