// Flips
$(document).ready(function(){
  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
});

$(window).on('load',function(){
    $(this).scrollTop(0);
});

// Contact Us fading
var contactUsSectionHeight = $('section#contactUs').offset().top * 0.95;

$(window).scroll(function() {
  if ($(this).scrollTop() > contactUsSectionHeight) {
    $('section#contactUs').css('opacity', 1);
  } else if ($(this).scrollTop() < 20) {
    $('section#contactUs').css('opacity', 0);
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 80);

  });
});

//Go To Top Button Get the button:
   mybutton = document.getElementById("myBtn");

   // When the user scrolls down 500px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
