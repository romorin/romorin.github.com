var navPosition;
var jHeader;

function projectHoverIn(event) {
	addProjectFocus(jQuery(event.currentTarget));
}

function projectHoverOut(event) {
	removeProjectFocus(jQuery(event.currentTarget));
}

function removeProjectFocus(nodes) {
	nodes.children().addClass('is-hidden');
	nodes.removeClass('hovering');
}

function addProjectFocus(nodes) {
	nodes.children().removeClass('is-hidden');
	nodes.addClass('hovering');

	// there can only be one*
	removeProjectFocus(jQuery('.hover-list').not(nodes));
}

// http://knackforge.com/blog/karalmax/how-deal-hover-touch-screen-devices
function onTouchStart(event) {
	'use strict';

	var link = jQuery(event.currentTarget); //preselect the link
	if (link.hasClass('hovering')) {
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
	var projects = jQuery(".hover-list");
	projects.hover(projectHoverIn, projectHoverOut);
	projects.on("touchstart", onTouchStart);
});
