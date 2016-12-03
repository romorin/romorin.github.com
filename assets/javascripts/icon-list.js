var lists;
// should be roughtly half of the icon width
const FUDGE_WIDTH = 30;

function adjustListWidth(index, element) {
  var jElement = jQuery(element);
  var boxSize = jElement.innerWidth();
  var iconsWidth = 0;

  jElement.children().each(function(i,e) { iconsWidth += jQuery(e).outerWidth(); });

  var numLines = Math.ceil(iconsWidth / boxSize);
  var equalWidth = iconsWidth / numLines;
  var padding = (boxSize - equalWidth - FUDGE_WIDTH)/2;
  jElement.css("padding-left", padding);
  jElement.css("padding-right", padding);
}

function adjustIconListsWidth() {
  lists.each(adjustListWidth);
}

// to be done when the page is ready
jQuery(function() {
  lists = jQuery(".content-figures-item.list");
  jQuery(window).on("resize", adjustIconListsWidth);
  adjustIconListsWidth();
});
