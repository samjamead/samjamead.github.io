
	var check = "Scripts.js is loaded!";

	console.log(check);

	$("a[href^='http://']").attr("target","_blank");

	$('a.smooth_scroll').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$(document).scroll(function() {
			var beta = $(this).scrollTop();
			if (beta < $(window).height()) {
				$(".scroll_top").css({"opacity":"0"});
			} else {
				$(".scroll_top").css({"opacity":"1"});
			}
	});


	// Chris Coyer's fluid videos.
	$(function() {

	  var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),

		var $fluidEl = $("article");

		$allVideos.each(function() {

		  $(this)
		    // jQuery .data does not work on object/embed elements
		    .attr('data-aspectRatio', this.height / this.width)
		    .removeAttr('height')
		    .removeAttr('width');

		});

		$(window).resize(function() {

		  var newWidth = $fluidEl.width();
		  $allVideos.each(function() {

		    var $el = $(this);
		    $el
		        .width(newWidth)
		        .height(newWidth * $el.attr('data-aspectRatio'));

		  });

		}).resize();

	});
