jQuery(document).ready(function($){

  // Dynamically set bottom margin of body for sticky footer
  stickyFooter();

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://fluxphysics.github.io/']").attr("target","_self");
  $("a[href^='https://fluxphysics.github.io/']").attr("target","_self");

  // Open the menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

});

// Trigger sizing functions on window resize
$( window ).resize(function() {
  stickyFooter();
});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  setTimeout (function () {
    var bodyBottomMargin = $("footer").outerHeight();
    console.log(bodyBottomMargin);
    $("body").css("margin-bottom", bodyBottomMargin);
  }, 100);
}
