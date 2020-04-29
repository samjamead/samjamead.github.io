jQuery( document ).ready(function($){

  // Stick the footer to the bottom of the page
  stickyFooter();

  // Sets initial height of iFrame
  keepRatio();

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://samjamead.github.io/']").attr("target","_self");
  $("a[href^='https://samjamead.github.io/']").attr("target","_self");

});

// Smoooooth scrolling
$('.smooth-scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

// Trigger sizing functions on window resize
$( window ).resize(function() {
  stickyFooter();
  keepRatio();
});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $('footer').outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

// Get absolute width of iFrame and set height using known ratio (for Youtube it's 0.5625)
function keepRatio() {
  var iframeWidth = $( "iframe" ).width();
  $('iframe').height(iframeWidth * 0.5625);
}
