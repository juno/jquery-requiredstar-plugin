/*!
 * Required Star jQuery Plugin v1.0
 * @link https://github.com/juno/jquery-requiredstar-plugin
 * @author Junya Ogura <http://sooey.com/>
 */
;(function($) {
  $.fn.requiredStar = function(options) {
    var opts = $.extend({}, $.fn.requiredStar.defaults, options);

    return this.each(function() {
      if ($(this).is('.' + opts.requiredClass)) {
        updateValidity($(this), opts); // update validity with default value
        var c = function() { updateValidity($(this), opts); };
        $(this).keypress(c).change(c);
      }
    });
  };

  $.fn.requiredStar.defaults = {
    requiredClass: 'required',
    validClass: 'valid'
  };

  function updateValidity(e, opts) {
    e.is('.' + opts.requiredClass) && !e.val() ? e.removeClass(opts.validClass) : e.addClass(opts.validClass);
  };
})(jQuery);
