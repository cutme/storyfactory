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
			$(document).on('click', '.js-goto', function(e) {
				e.preventDefault();
				goToTarget($(this).attr('href'));
			});
		}
	};
	var N = {
		nav: function() {
			var trigger = $('.c-nav-trigger'), 
				b = $('body'), 
				nav = $('.c-nav'),
				nav__item = $('.c-nav__link', nav);
			
			/*
nav__item.on('click', function(e) {
				target = $(this).attr('href');
				b.removeClass('no-scroll');

				if (trigger.hasClass('is-active')) {
					nav.removeClass('is-active');
					trigger.removeClass('is-active');
					setTimeout(function() {
						goToTarget(target);
					}, 400);
				} else {
					goToTarget(target);
				}
			});
*/

			trigger.on('click', function(e) {
				e.preventDefault();
				$(this).toggleClass('is-active');
				nav.toggleClass('is-active');
				b.toggleClass('no-scroll');
			});
			
			$('> ul > li', nav).on('click', function(e) {
				if ( $('.sub-menu', this).length > 0 ) {
					e.preventDefault();
					if ($(window).width()<=768) {
						if ( $('.sub-menu', this).length > 0 ) {
							$('.sub-menu', this).slideToggle();					
						}
					}
				}
			});
			
			$('> ul > li .sub-menu a', nav).on('click', function(e) {
				e.stopPropagation();
			});
			
			$(window).resize(function() {
				trigger.removeClass('is-active');
				nav.removeClass('is-active');
				$('.sub-menu', nav).removeAttr('style');
			});
		},
		init: function() {
			N.nav();
		}
	};
	var S = {
		references: function() {
			var owl = $('.owl-carousel');
				owl.owlCarousel({
					dots: true,
					autoplay: true,
					items: 1,
					loop: true
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