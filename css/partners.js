var partnersElement = $('section#partners');
var partnersElementHeight = partnersElement.offset().top - partnersElement.get(0).scrollHeight/2;



$(window).scroll(function() {
  if ($(this).scrollTop() > partnersElementHeight) {
    partnersElement.css('opacity', 1);
  } else if ($(this).scrollTop() < 20) {
    partnersElement.css('opacity', 0);
  }

});
