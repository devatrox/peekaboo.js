;(function($) {

  $.fn.peekaboo = function(options) {

    var $this = $(this);

    var settings = $.extend({
      offsetTop: 0,
      offsetRight: 0,
      offsetBottom: 0,
      offsetLeft: 0,
      width: false,
      position: 'left',
      direction: 'horizontal',
      startOpen: false,
      startDelay: 200,
      duration: 300,
      easing: 'ease',
      buttonText: ''
    }, options);

    var height = parseInt($this.height());
    var width = parseInt((settings.width ? settings.width : $this.width()));

    $(window).on('resize', function() {
      height = parseInt($this.height());
      width = parseInt((settings.width ? settings.width : $this.width()));
    });

    $this.css({ width: width, height: height });

    // Check if Modernizr exists, else fake it
    var support;

    if (typeof Modernizr !== "undefined") {
      support = Modernizr;
    } else {
      console.warn("peekaboo might not work in older browsers right now. Install Modernizr to enable basic support");
      support = {
        csstransitions: true,
        csstransforms: true,
      };
    }

    if (!support.csstransitions) {
      console.log("Using $.fn.animate");
      $.fn.transition = $.fn.animate;
    }

    var isOpen = false;

    var toggle = function(delay) {
      if (typeof(delay) === "undefined") delay = 0;
      $this.toggleClass('peekaboo--open peekaboo--closed');

      if (isOpen === true) {

        $this.transition({
          translate: [0, 0]
        }, settings.duration, settings.easing, function() {
          isOpen = false;
        });

      } else {

        switch (settings.position) {

          case "right":
            $this.transition({
              x: '-' + width,
              delay: delay
            }, settings.duration, settings.easing, function() {
              isOpen = true;
            });
            break;

          case "top":
            $this.transition({
              y: height,
              delay: delay
            }, settings.duration, settings.easing, function() {
              isOpen = true;
            });
            break;

          case "bottom":
            $this.transition({
              y: '-' + height,
              delay: delay
            }, settings.duration, settings.easing, function() {
              isOpen = true;
            });
            break;

          default:
            $this.transition({
              x: width,
              delay: delay
            }, settings.duration, settings.easing, function() {
              isOpen = true;
            });
        }
      }
    };

    $this.addClass('peekaboo peekaboo--' + settings.position + ' peekaboo--closed')
      .wrapInner('<div class="peekaboo__content"/>')
      .append('<button class="peekaboo__toggle">' + settings.buttonText + '</button>');

    if (settings.position == "right") {
      $this.css({right: 0 - width + settings.offsetRight, top: 0 + settings.offsetTop});
    } else if (settings.position == "top") {
      $this.css({top: 0 - height + settings.offsetTop, left: 0 + settings.offsetLeft});
    } else if (settings.position == "bottom") {
      $this.css({bottom: 0 - height + settings.offsetBottom, left: 0 + settings.offsetLeft});
    } else {
      $this.css({left: 0 - width + settings.offsetLeft, top: 0 + settings.offsetTop});
    }

    var $content = $('.peekaboo__content', this);
    var $button = $('.peekaboo__toggle', this);

    if (settings.startOpen === true) {
      toggle(settings.startDelay);
    }

    $button.click(function(event) {
      event.preventDefault();
      toggle();
    });
  };
})(jQuery);
