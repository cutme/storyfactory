function exist(n){return $(n).length>0}function goToTarget(n){var t=$("html, body"),e=$(n).offset().top;t.animate({scrollTop:e},{duration:1500,easing:"easeOutCubic"})}jQuery(function(n){var t={init:function(){}},e={nav:function(){},init:function(){e.nav()}},i={references:function(){var t=n(".owl-carousel");t.owlCarousel({autoplay:!0,items:1})},init:function(){exist("#references")&&i.references()}};n(document).ready(function(){t.init(),e.init(),i.init()})});