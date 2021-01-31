$(function() {
  let $image = $('.image-wrapper img');

  $image.mouseover(function() {
    
    // előző
    let $actualImage = $(this);
    if (!$actualImage.hasClass('scale-half')) {
      return;
    }
    $actualImage.removeClass('scale-half');
  });

  $image.mouseleave(function(){
    $(this).addClass('scale-half');
  });
});
