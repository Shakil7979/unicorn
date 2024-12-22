$(document).ready(function(){  

	$(window).on('load', function () { 
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();  
		});
	});

	AOS.init();

	$('.promotion_carsousel_2').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ["<img src='assets/images/promotion/left.png'>","<img src='assets/images/promotion/right.png'>"]
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
 
	// $(".single_partner img").hover(
	// 	function () { 
	// 		$(".single_partner img").not(this).css("opacity", "0.3");
	// 	},
	// 	function () { 
	// 		$(".single_partner img").css("opacity", "1");
	// 	}
	// ); 

	// $(".single_partner img").on("click", function () {
	// 	// Set opacity 0.3 for all images
	// 	$(".single_partner img").css("opacity", "0.3");
		
	// 	// Set opacity 1 for the clicked image
	// 	$(this).css("opacity", "1");
	//   });

	// $(".single_partner img").on("mouseenter", function () {
	// 	// Remove active class from all images
	// 	$(".single_partner img").removeClass("active").css("opacity", "0.3");
		
	// 	// Add active class to the hovered image
	// 	$(this).addClass("active").css("opacity", "1");
	//   });
	  
	//   // Ensure all images have the same behavior even when the cursor leaves
	//   $(".single_partner img").on("mouseleave", function () {
	// 	// Do nothing, the active image remains unchanged
	//   });

	$(".partner_content_box").on("mouseenter", function () {
		$(".single_partner img").on("mouseenter", function () {
		  // Remove active class from all images
		  $(".single_partner img").removeClass("active").css("opacity", "0.3");
	  
		  // Add active class to the hovered image
		  $(this).addClass("active").css("opacity", "1");
		});
	  });
	  
	  // Reset opacity when mouse leaves the box
	  $(".partner_content_box").on("mouseleave", function () {
		$(".single_partner img").removeClass("active").css("opacity", "1");
	  });
	  
	  
	  
	  

	$(".single_game ul li").hover(
		function () { 
			const currentClass = $(this).attr("class");
			 
			$("." + currentClass).css("border", "4px solid #fff");
		},
		function () { 
			const currentClass = $(this).attr("class");
			$("." + currentClass).css("border", "4px solid transparent");
		}
	);  

}); 

 

$(document).ready(function () { 
    let lastHovered = null;
    let lastClicked = null;

    // Show the .explore_main by default
    $(".explore_left").hide();
    $(".explore_main").show(); // Default section

    // Handle hover over the map items
    $("[class^='map_']").hover(
        function () { 
            let mapNumber = $(this).attr("class").split('_')[1];

            // Set last hovered map number
            lastHovered = mapNumber;

            // If no section is clicked, show the hovered section
            if (!lastClicked) {
                $(".explore_left").hide();  
                $(".explore_" + mapNumber).show();
            }
        },
        function () { 
            // On mouseout, restore the default .explore_main view if no section is clicked
            if (!lastClicked) {
                $(".explore_left").hide();  
                $(".explore_main").show(); // Show default
            }
        }
    );

    // Handle click on map items
    $("[class^='map_']").on("click", function () {
        let mapNumber = $(this).attr("class").split('_')[1];

        // Set the last clicked map number
        lastClicked = mapNumber;

        // Show the clicked section
        $(".explore_left").hide();
        $(".explore_" + mapNumber).show();
    });

    // Clear lastHovered and reset to .explore_main on page unload
    $(window).on("beforeunload", function () {
        lastHovered = null;
        lastClicked = null;
    });
});


$(document).ready(function () {
    // Initially show cusro_content_1
    $(".cursor_point_single").hide();
    $(".cusro_content_1").show();

    // Function to handle content display
    function showContent(contentClass) {
        $(".cursor_point_single").hide(); // Hide all
        $(contentClass).show(); // Show the specific content
    }

    // Hover and click for cursor_content_show_1
    // $(".cursor_content_show_1").on("mouseenter click", function () {
    //     showContent(".cusro_content_1");
    // });

    // Hover and click for cursor_content_show_2
    $(".cursor_content_show_2").on("mouseenter click", function () {
        showContent(".cusro_content_2");
    });

    // Hover and click for cursor_content_show_3
    $(".cursor_content_show_3").on("mouseenter click", function () {
        showContent(".cusro_content_3");
    });

    // Hover and click for cursor_content_show_4
    $(".cursor_content_show_4").on("mouseenter click", function () {
        showContent(".cusro_content_4");
    });

    // Click outside the container resets to cusro_content_1
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".single_beta_img").length) {
            showContent(".cusro_content_1");
        }
    });
});
