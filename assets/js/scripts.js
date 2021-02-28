jQuery(document).ready(function($){

  // Active page highlight
  var bodyid = $("body").attr('id');
  $("#nav-" + bodyid).addClass('active');

  // Dynamically set bottom margin of body for sticky footer
  stickyFooter();

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://samjamead.github.io/']").attr("target","_self");
  $("a[href^='https://samjamead.github.io/']").attr("target","_self");

  // Open the menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
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
