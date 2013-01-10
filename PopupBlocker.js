window.PopupWarning = function (options) {
  this.options = options;
  this.test();
}

PopupWarning.prototype.test = function() {
  var popup = window.open('/popup_detection.html', 'popup_tester', 'width=1,height=1,left=0,top=0');

  if ( !popup || popup.closed || typeof popup == 'undefined' || typeof popup.closed == 'undefined' )
    return this.options.error();

  window.focus();
  popup.blur();

  //
  // Chrome popup detection requires that the popup validates itself
  // - so we need to give
  // the popup time to load, then call js on the popup itself
  //
  if ( navigator && (navigator.userAgent.toLowerCase()).indexOf('chrome') > -1 ) {
    _this = this;
    var timer = setTimeout(function () { _this.isChromePopupsPermitted(popup) }, 60);
    // waiting for results from chrome
    return false;
  }

  popup.close();
  this.options.success();
};

PopupWarning.prototype.isChromePopupsPermitted = function(popup) {
  if ( popup && popup.chromePopupsPermitted && popup.chromePopupsPermitted() == true ) {
    popup.close();

    return this.options.success();
  }

  //
  // If the popup js fails - popups are blocked
  //
  this.options.error();
};
