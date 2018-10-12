jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
  });
});
