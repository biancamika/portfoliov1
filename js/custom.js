$(window).on('load', function () {
//isotope start

var $grid = $('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
  percentPosition: true,
  packery: {
  gutter: 0
  }
});

//layout isotope after images load

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


//filter in isotope
$('.links').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

});