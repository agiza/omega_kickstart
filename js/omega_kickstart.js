(function ($) {
  /**
   *  Add a relevant body class when Commerce Kickstart Demo mode is on.
   */
  Drupal.behaviors.activeBarClass = {
    attach: function(context, settings) {            
      var isDemo = $('div#activebar-container').size();
      //console.log('isDemo: ' + isDemo);
      if(isDemo) {
        $('body').addClass('activebar-container');
      }
    }
  };
})(jQuery);