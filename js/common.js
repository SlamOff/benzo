$(document).ready(function() {
	
	/*
	// ScrollTo
	$('.navbar-collapse a').mPageScroll2id();
	*/


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	/*


	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	*/



	/*
	//slick carousel
	$('.photo_carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.photo_carousel_for',
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});*/
	/*
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	*/

	/*
	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	*/



});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/