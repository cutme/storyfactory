/*jshint expr:true */

function exist(o) {
	return ($(o).length > 0) ? true : false;
}

function goToTarget(target) {
	var v = $('html, body'), o = $(target).offset().top;
	v.animate({
		scrollTop: o
	}, {
		duration: 1500,
		easing: 'easeOutCubic'
	});
}

jQuery(function($) {

	var L = {
		init: function() {
			
		}
	};
	var N = {
		nav: function() {
			
		},
		init: function() {
			N.nav();
		}
	};
	var S = {
		references: function() {
			var owl = $('.owl-carousel');

//				owl.on('initialized.owl.carousel', function(event) { alert('s'); });
				
				owl.owlCarousel({
					autoplay: true,
					items: 1
				});
		},
		init: function() {
			exist('#references') && S.references();
		}
	};
	
	


	$(document).ready(function() {
		L.init();
		N.init();
		S.init();		
	});
});