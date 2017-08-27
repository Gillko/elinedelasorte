$(document).ready(function() {
	$(document).on('click', 'a.link', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top
		}, 1000);
	});

	$('.btn[data-toggle="collapse"]').on('click', function(){
		$(this)
		.data('text-original', $(this).text())
		.text($(this).data('text-alt') )
		.data('text-alt', $(this).data('text-original'));
	});
});