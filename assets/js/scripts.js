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

	$(document).on('click','.mobile_bars',function(){
		$('.mobile_menu').slideToggle();
	})




});