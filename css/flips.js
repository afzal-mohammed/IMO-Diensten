
var flipsElement = $('section#flips');
var flipsSectionHeight = $('div#carouselExampleSlidesOnly').get(0).scrollHeight * 0.3;

$(window).scroll(function(){
  if($(this).scrollTop()> ($('div#carouselExampleSlidesOnly').get(0).scrollHeight * 0.3)){
    flipsElement.css('opacity',1);
}else{
    flipsElement.css('opacity',0);
}
});
