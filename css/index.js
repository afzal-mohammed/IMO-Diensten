$(document).ready(function(){
  // set up hover panels
  // although this can be done without JavaScript, we've attached these events
  // because it causes the hover to be triggered when the element is tapped on a touch device
  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
});


// myNav = document.getElementById("navHeader");
// window.onscroll = (function() {
//   		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
// 				document.getElementById("navHeader").addClass('affix');
// 				console.log("OK");
// 			} else {
// 				document.getElementById("navHeader").removeClass('affix');
// 			}
// 		});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

    //Get the button:
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
