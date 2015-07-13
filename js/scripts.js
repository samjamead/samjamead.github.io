
	$('a.smooth_scroll').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');
