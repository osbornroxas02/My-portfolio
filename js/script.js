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
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		         easing: 'easeInOut',
		         barColor: '#fff',
		         trackColor: '#74b9ff', /*instead of false*/
		         scaelColor: 'false',
		         lineWidth: 4,
		         size: 152,
		         onStep: function(from, to, percent) {
	         		$(this.el).find('.percent').text(Math.round(percent));
	         	}
   		 	});

		} /*-- END SKILLS SECTION --*/


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

				$(".counter").each(function() {
					var element = $(this);
					var endVal = parseInt(element.text());

					element.countup(endVal);
				})

				countUpFinished = true;
		}

	}); 


});








