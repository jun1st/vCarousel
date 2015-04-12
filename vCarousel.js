(function($) {
  return $.fn.verticalCarousel = function(options) {
    var $currentHighlightImage, $lastImg, $vCarousel, settings;
    $vCarousel = this;
    settings = $.extend({
      duration: 3000,
      direction: "up"
    }, options);
    $currentHighlightImage = $vCarousel.find('.current img');
    setInterval(function() {
      var $activeItem, $nextActiveItem, src;
      $activeItem = $vCarousel.find('ul li.item.active').removeClass('active');
      src = $activeItem.find('img').prop('src');
      $nextActiveItem = $activeItem.next();
      if (settings.direction === "up") {
        return $activeItem.slideUp('slow', function() {
          $activeItem.remove();
          $vCarousel.find('ul.items').append($activeItem.show());
          $nextActiveItem.addClass('active');
          return $currentHighlightImage.prop('src', src);
        });
      } else {
        return $activeItem.slideDown('slow', function() {
          $activeItem.remove();
          $vCarousel.find('ul.items').append($activeItem.show());
          $nextActiveItem.addClass('active');
          return $currentHighlightImage.prop('src', src);
        });
      }
    }, settings.duration);
    $lastImg = $vCarousel.find('ul li.item').filter(':last').find('img');
    $currentHighlightImage.prop('src', $lastImg.prop('src'));
    return this;
  };
})(jQuery);