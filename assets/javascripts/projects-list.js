var navPosition;
var jHeader;

function projectHoverIn(event) {
	addProjectFocus(jQuery(event.currentTarget));
}

function projectHoverOut(event) {
	removeProjectFocus(jQuery(event.currentTarget));
}

function removeProjectFocus(nodes) {
	nodes.find(".blurry").addClass('is-hidden');
	nodes.find(".list").addClass('is-hidden');
	nodes.removeClass('hover');
}

function addProjectFocus(nodes) {
	nodes.find(".blurry").removeClass('is-hidden');
	nodes.find(".list").removeClass('is-hidden');
	nodes.addClass('hover');

	// there can only be one*
	removeProjectFocus(jQuery('.content-figure-pic').not(nodes));
}

// http://knackforge.com/blog/karalmax/how-deal-hover-touch-screen-devices
function onTouchStart(event) {
	'use strict';

	var link = jQuery(event.currentTarget); //preselect the link
	if (link.hasClass('hover')) {
		return true;
	}
	else {
		addProjectFocus(link);
		event.preventDefault();
		return false; //extra, and to make sure the function has consistent return points
	}
}

// to be done when the page is ready
jQuery(function() {
	var projects = jQuery(".content-figure-pic");
	projects.hover(projectHoverIn, projectHoverOut);
	projects.on("touchstart", onTouchStart);
});
