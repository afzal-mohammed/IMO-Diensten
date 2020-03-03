var footerElement = $('footer#footer');
var footerSectionHeight = footerElement.offset().top - footerElement.get(0).scrollHeight;

$(window).scroll(function() {

  if ($(this).scrollTop() > footerSectionHeight) {
    footerElement.css('opacity', 1);
  } else if ($(this).scrollTop() < 20) {
    footerElement.css('opacity', 0);
  }

});
