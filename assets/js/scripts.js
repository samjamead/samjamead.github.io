jQuery(document).ready(function($){

  // Open the menu – thanks Jonathon Suh
  $('.menu-toggle').on("click", () => {
    $('.hamburger').toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  })

  $('.shaker').on("click", () => {
    $('.shakee').addClass("shakeX").delay(2000).queue( () => $('.shakee').removeClass("shakeX").dequeue())
  })

  $("#div").addClass("error").delay(1000).queue(function(){

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

  $.ajax(settings).done((response) => $(".treespan").html(response.total));

});
