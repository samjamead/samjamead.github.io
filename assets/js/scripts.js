jQuery(document).ready(function($){

  // Open the menu – thanks Jonathon Suh
  var $hamburger = $('.hamburger');
  $('.menu-toggle').on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  });

  var $shakee = $('.shakee');
  $('.shaker').on("click", function(){
    console.log("Clicked!");
    $shakee.addClass("shakeX").delay(1500).queue(function(next){
      $(this).removeClass("shakeX");
      next();
    });
  });

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://public.ecologi.com/users/samuelmead/trees",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    $(".treespan").html(response.total);
  });

});
