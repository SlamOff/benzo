$(document).ready(function() {
	// contact click
	$('.adress h6').each(function(indx, el){
		$(this).click(function(){
			$('.adress p').slideToggle();
		});
	});
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// tooltip
	$("a.toolt").tooltip();


	
	//slick carousel
	$('.chainsaw_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.chainsaw_prev',
		nextArrow: '.chainsaw_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	$('.brushcutters_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.brushcutters_prev',
		nextArrow: '.brushcutters_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	$('.trimmers_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.trimmers_prev',
		nextArrow: '.trimmers_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	$('.clear_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.clear_prev',
		nextArrow: '.clear_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	$('.concretecutters_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.concretecutters_prev',
		nextArrow: '.concretecutters_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	$('.cloth_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.cloth_prev',
		nextArrow: '.cloth_next',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});
	
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