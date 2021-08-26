/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
// 緩慢滑動
// scroll to hash on click
$("a[href*='#']").on('click',function(e){

  e.preventDefault();
  var $self = $(this);

  if ( $( '#'+$self.attr('href').split('#').pop() ).length ) {
      window.setTimeout(function(){
        $('html, body').animate({

          scrollTop: $( '#'+$self.attr('href').split('#').pop() ).offset().top -140

        }, 1000);
      }, 250);
  } else {
      window.location = window.location.origin + $(this).attr('href');
  }

});

// scroll to hash if in url
$(document).ready(function(){

  if( window.location.hash && $( window.location.hash ) ){

    window.setTimeout(function(){
      $('html, body').animate({
        scrollTop: $( window.location.hash ).offset().top -140
      }, 2000);
    }, 250);
  }

});