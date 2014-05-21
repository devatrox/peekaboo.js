;(function($) {

  $.fn.peekaboo = function(options) {

    var $this = $(this);

    var settings = $.extend({
      y: 100,
      width: 400,
      position: 'left',
      startOpen: false,
      startDelay: 200,
      duration: 300,
      easing: 'ease',
      buttonText: ''
    }, options);

    if (!$.support.transition) $.fn.transition = $.fn.animate;

    var open = false;

    var toggle = function(delay) {
      if (typeof(delay)==='undefined') delay = 0;

      if (open === true) {
        if($.support.transform) {
          $this.transition({
            x: 0,
            duration: settings.duration,
            delay: delay,
            easing: settings.easing
          }, function() {
            $this.toggleClass('peekaboo--open peekaboo--closed');
            open = false;
          });
        } else {
          $this.css(settings.position, '-' + settings.width + 'px').toggleClass('peekaboo--open peekaboo--closed');
          open = false;
        }

      } else {
        if($.support.transform) {
          $this.transition({
            x: (settings.position == 'left' ? settings.width : '-' + settings.width),
            duration: settings.duration,
            delay: delay,
            easing: settings.easing
          }, function() {
            $this.toggleClass('peekaboo--open peekaboo--closed');
            open = true;
          });
        } else {
          $this.css(settings.position, 0).toggleClass('peekaboo--open peekaboo--closed');
          open = true;
        }
      }
    };

    $this.css({ width: settings.width, top: settings.y })
      .css(settings.position, '-' + settings.width + 'px')
      .addClass('peekaboo peekaboo--' + settings.position + ' peekaboo--closed')
      .wrapInner('<div class="peekaboo__content"/>')
      .append('<button class="peekaboo__toggle">' + settings.buttonText + '</button>');

    var $content = $('.peekaboo__content', this);
    var $button = $('.peekaboo__toggle', this);

    $this.css({ height: this.height() });

    if (settings.startOpen === true) {
      toggle(settings.startDelay);
    }

    $button.click(function(event) {
      event.preventDefault();
      toggle();
    });
  };
})(jQuery);
