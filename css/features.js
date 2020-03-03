var featuresSectionHeight = $('section#features').offset().top - $('section#features').get(0).scrollHeight/2;

$(window).scroll(function(){
  if($(this).scrollTop()>featuresSectionHeight){
    $('section#features').css('opacity',1);
}else if($(this).scrollTop()<$('section#features').offset().top){
    $('section#features').css('opacity',0);
}
});
