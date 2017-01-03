
// Add active class to relevant nav item
$(function () {
  $('.navbar-nav > li > a').each(function(){
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    }
  });
});

// Add target="_blank" to all external links
$("a[href^='http://']").attr("target","_blank");
$("a[href^='https://']").attr("target","_blank");

// Unless it's because of Github pages
$("a[href^='http://mead.fm/']").attr("target","_self");
$("a[href^='https://mead.fm/']").attr("target","_self");

// Smoooooth scrolling
$('a.smooth_scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $( '.site-footer' ).outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
  console.log(bodyBottomMargin);
}

stickyFooter();

// Trigger sizing functions on window is resize
$( window ).resize(function() {
  stickyFooter();
});
