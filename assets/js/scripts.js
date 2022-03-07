jQuery(document).ready(function($){

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
