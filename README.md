A simple popup blocker detector. usage:

    new PopupWarning({
      error: function () {
        window.location = 'popup-url';
      },

      success: function () {
        window.open('popup-url');
      }
    });


Code based on code found at: http://thecodeabode.blogspot.com/2010/11/window-open-popup-blocker-detect-for.html
