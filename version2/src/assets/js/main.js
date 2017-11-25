$(document).ready(function() {
	$(document).on('click', 'a.link', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top
		}, 1000);
	});
	
	$(window).scroll(function () {
		if ($(window).scrollTop() > 715) {
			//Removing Classes
			$('#nav-bar-scroll-ed').removeClass('navbar-ed');
			$('#menu-ed').removeClass('navbar-left');
			//Adding Classes
			$('#nav-bar-scroll-ed').addClass('navbar-fixed-ed');
			$('#navbar-wrapper-ed').addClass('navbar-scroll-background-ed');
			$('#menu-ed').addClass('navbar-right');
			//CSS changes
			$('.navbar-default-ed').css('background-color', '#1b4b73');
			$('#hide-show-name-ed p').css('display', 'block');
			$('header nav.navbar-default-ed .navbar-nav-ed>li>a').css('font-family', 'helvetica_neueroman');
			$('header nav.navbar-default-ed .navbar-nav-ed>li>a').css('font-size', '20px');
		}
		if ($(window).scrollTop() < 716) {
			//Adding Classes
			$('#nav-bar-scroll-ed').addClass('navbar-ed');
			$('#menu-ed').addClass('navbar-left');
			//Removing Classes
			$('#nav-bar-scroll-ed').removeClass('navbar-fixed-ed');
			$('#navbar-wrapper-ed').removeClass('navbar-scroll-background-ed');
			$('#menu-ed').removeClass('navbar-right');
			//CSS changes
			$('.navbar-default-ed').css('background-color', 'transparent');
			$('#hide-show-name-ed p').css('display', 'none');
			$('header nav.navbar-default-ed .navbar-nav-ed>li>a').css('font-family', 'helvetica_neueblack');
			$('header nav.navbar-default-ed .navbar-nav-ed>li>a').css('font-size', '28px');
		}
	});
});