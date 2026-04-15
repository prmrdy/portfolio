/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {
  // Keep the full navigation visible instead of collapsing items into a menu.
  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.children().length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }

  breaks = [];
  $btn.addClass('hidden');
  $btn.removeClass('close');
  $hlinks.addClass('hidden');
  $btn.attr("count", 0);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

updateNav();
