/* -- MAIN SECTION --*/
$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false // Removes ooo

	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false,
	});/*-- END MAIN SECTION --*/

	/*-- SKILLS SECTION --*/
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$('.chart').easyPieChart({
         //your options goes here
    });

});/*-- END SKILLS SECTION --*/


