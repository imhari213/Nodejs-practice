/*$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});*/

$('ul.nav li.dropdown,li.dropdown ul.dropdown-menu').mouseout(function(){
  $('ul.nav li.dropdown').removeClass('open');
});
$('ul.nav li.dropdown,ul.nav li.dropdown a.dropdown, li.dropdown ul.dropdown-menu').mouseenter(function(){
  $('ul.nav li.dropdown').addClass('open');
  

});

$('ul.nav li.dropdown').mouseout(function(){
  console.log("mouseout" + " " + $(this));

  $('li.dropdown ul.dropdown-menu,li.dropdown ul.dropdown-menu li').mouseenter(function(){
     $('ul.nav li.dropdown').addClass('open');  
    console.log($(this));
  })



  // $('ul.nav li.dropdown').removeClass('open');
  
});


