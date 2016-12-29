// assumes there is one nav and one .hero

var navPosition;
var jHeader;
var jReplacement;

function onScroll() {
	var scrollTop = jQuery(this).scrollTop();

	if (scrollTop > navPosition) {
		jHeader.addClass('navbar-fixed-top');
    jReplacement.show();
	} else {
		jHeader.removeClass('navbar-fixed-top');
    jReplacement.hide();
	}
}

// to be done when the page is ready
jQuery(document).ready(function() {
	jHeader = jQuery("nav");
  jHeader.before("<div class='nav-replacement'></div>");

	navPosition = jHeader.offset().top;

  jReplacement = jQuery(".nav-replacement");
  jReplacement.hide();
  jReplacement.height( jHeader.height());

	jQuery(window).scroll(onScroll);
});
