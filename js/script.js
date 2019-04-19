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
	});

});
/*-- END MAIN SECTION --*/

