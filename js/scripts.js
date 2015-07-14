
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
