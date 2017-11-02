$(document).ready(function() {
	$(document).on('click', 'a.link', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top
		}, 1000);
	});
});