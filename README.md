A simple popup blocker detector. usage:

    new PopupWarning({
      error: function () {
        window.location = 'popup-url';
      },

      success: function () {
        window.open('popup-url');
      }
    });
