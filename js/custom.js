$(window).load(function () {

//isotope
var $grid = $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
  percentPosition: true,
    packery: {
    gutter: 20
  }
  });

/*
$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });
*/
});