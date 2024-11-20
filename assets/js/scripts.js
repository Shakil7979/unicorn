$(document).ready(function(){  

	$(window).on('load', function () { 
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();  
		});
	});

	$('.promotion_carsousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ["<img src='assets/images/promotion/left.png'>","<img src='assets/images/promotion/right.png'>"]
	});
 
	$('.mobile_bars').click(function (e) {
		e.preventDefault();  
	
		$('.mobile_menu').slideToggle(1000); 
	
		const icon = $(this).find('i');

		if (icon.hasClass('fa-bars')) {
			icon.removeClass('fa-bars').addClass('fa-times');  
		} else {
			icon.removeClass('fa-times').addClass('fa-bars');
		}
	}); 




});