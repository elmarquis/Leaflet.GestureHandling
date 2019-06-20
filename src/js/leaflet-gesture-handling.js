/*
 * * Leaflet Gesture Handling **
 * * Version 1.1.9
 */
import LanguageContent from "./language-content";

var draggingMap = false;
var gestureHandlingOptions = {
  text: {},
  duration: 1700
};

export var GestureHandling = L.Handler.extend({

  _isScrolling: false,
  _isTouching: false,
  _isFading: false,

  addHooks: function() {
    this._handleTouch = L.bind(this._handleTouch, this);

    this._setGestureHandlingOptions();
    this._disableInteractions();

    //Uses native event listeners instead of L.DomEvent due to issues with Android touch events turning into pointer events
    this._map._container.addEventListener("touchstart", this._handleTouch);
    this._map._container.addEventListener("touchmove", this._handleTouch);
    this._map._container.addEventListener("touchend", this._handleTouch);
    this._map._container.addEventListener("touchcancel", this._handleTouch);
    this._map._container.addEventListener("click", this._handleTouch);

    L.DomEvent.on(this._map._container, "mousewheel", this._handleScroll, this);
    L.DomEvent.on(this._map, "mouseover", this._handleMouseOver, this);
    L.DomEvent.on(this._map, "mouseout", this._handleMouseOut, this);

    // Listen to these events so will not disable dragging if the user moves the mouse out the boundary of the map container whilst actively dragging the map.
    L.DomEvent.on(this._map, "movestart", this._handleDragging, this);
    L.DomEvent.on(this._map, "move", this._handleDragging, this);
    L.DomEvent.on(this._map, "moveend", this._handleDragging, this);

    L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling");
  },

  removeHooks: function() {
    this._enableInteractions();

    this._map._container.removeEventListener("touchstart", this._handleTouch);
    this._map._container.removeEventListener("touchmove", this._handleTouch);
    this._map._container.removeEventListener("touchend", this._handleTouch);
    this._map._container.removeEventListener("touchcancel", this._handleTouch);
    this._map._container.removeEventListener("click", this._handleTouch);

    L.DomEvent.off(this._map._container, "mousewheel", this._handleScroll, this);
    L.DomEvent.off(this._map, "mouseover", this._handleMouseOver, this);
    L.DomEvent.off(this._map, "mouseout", this._handleMouseOut, this);

    L.DomEvent.off(this._map, "movestart", this._handleDragging, this);
    L.DomEvent.off(this._map, "move", this._handleDragging, this);
    L.DomEvent.off(this._map, "moveend", this._handleDragging, this);

    L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling");
  },

  _handleDragging: function(e) {
    if (e.type == "movestart" || e.type == "move") {
      draggingMap = true;
    } else if (e.type == "moveend") {
      draggingMap = false;
    }
  },

  _disableInteractions: function() {
    this._map.dragging.disable();
    this._map.scrollWheelZoom.disable();
    if (this._map.tap) this._map.tap.disable();
  },

  _enableInteractions: function() {
    this._map.dragging.enable();
    this._map.scrollWheelZoom.enable();
    if (this._map.tap) this._map.tap.enable();
  },

  _enableWarning: function(gesture) {
    clearTimeout(this._isFading);
    L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-" + gesture);
    L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-warning");
  },

  _disableWarning: function(gesture, delay) {
    clearTimeout(this._isFading);
    this._isFading = setTimeout(
      L.bind(function(gesture) {
        L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-" + gesture);
      }, this, gesture),
      delay || this._map.options.gestureHandlingOptions.duration
    );
    L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-warning");
  },

  _isLanguageContent: function(text) {
    return text && text.touch && text.scroll && text.scrollMac;
  },

  _isMacUser: function() {
    return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  },

  _parseGestureHandlingOptions: function() {
    var options = L.extend(this._map.options.gestureHandlingOptions, gestureHandlingOptions);

    //For backwards compatibility, merge gestureHandlingText into the new options object
    if (this._map.options.gestureHandlingText) {
      options.text = this._map.options.gestureHandlingText;
    }
    return options;
  },

  _setGestureHandlingOptions: function() {
    var opts = this._parseGestureHandlingOptions();

    //If user has supplied custom language, use that, otherwise auto set it from the language files
    var content = this._isLanguageContent(opts.text) ? opts.text : this._getLanguageContent(opts.locale);

    this._map._container.setAttribute("data-gesture-handling-touch-content", content.touch);
    this._map._container.setAttribute("data-gesture-handling-scroll-content", content.scroll);

    this._touchWarning = content.touch;
    this._scrollWarning = content.scroll;
  },

  _getUserLanguage: function() {
    return navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
  },

  _getLanguageContent: function(lang) {
    //Determine user language (eg. fr or en-US)
    lang = lang || this._getUserLanguage() || "en";

    //Lookup the appropriate language content
    var content = LanguageContent[lang];

    //If no result, try searching by the first part only (eg. en-US, just use en).
    content = (!content && lang.indexOf("-") !== -1) ? LanguageContent[lang.split("-")[0]] : content;

    // If still nothing, default to English
    content = content || LanguageContent["en"];

    //Check if they're on a mac for displaying appropriate command control (⌘ instead of Ctrl)
    content.scroll = this._isMacUser() ? content.scrollMac : content.scroll;

    return content;
  },

  _hasClass: function(element, classList) {
    for (var i = 0; i < classList.length; i++) {
      if (L.DomUtil.hasClass(element, classList[i])) {
        return true;
      }
    }
    return false;
  },

  _handleTouch: function(e) {
    //Disregard touch events on the minimap if present
    var ignore = this._hasClass(e.target, ["leaflet-control-minimap", "leaflet-interactive", "leaflet-popup-content", "leaflet-popup-content-wrapper", "leaflet-popup-close-button", "leaflet-control-zoom-in", "leaflet-control-zoom-out"]);

    if (ignore) {
      if (L.DomUtil.hasClass(e.target, "leaflet-interactive") && e.type === "touchmove" && e.touches.length === 1) {
        this._enableTouchWarning();
      } else {
        this._disableTouchWarning();
      }
    } else if (e.type !== "touchmove" && e.type !== "touchstart") {
      this._disableTouchWarning();
    } else if (e.touches.length === 1) {
      this._enableTouchWarning();
    } else {
      this._disableTouchWarning();
    }
  },

  _enableTouchWarning: function() {
    this._enableWarning('touch');
    this._disableInteractions();
  },

  _disableTouchWarning: function(delay) {
    clearTimeout(this._isTouching);
    // Set a timeout to run after touching ends
    this._isTouching = setTimeout(
      L.bind(
        function() {
          this._disableWarning('touch');
          this._enableInteractions();
        }, this),
      delay || 0
    );
  },

  _enableScrollWarning: function() {
    this._enableWarning('scroll');
    this._map.scrollWheelZoom.disable();
  },

  _disableScrollWarning: function(delay) {
    clearTimeout(this._isScrolling);
    // Set a timeout to run after scrolling ends
    this._isScrolling = setTimeout(
      L.bind(
        function() {
          this._disableWarning('scroll');
          this._map.scrollWheelZoom.enable();
        }, this),
      delay || 0
    );
  },

  _handleScroll: function(e) {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      this._disableScrollWarning();
    } else {
      this._enableScrollWarning();
      this._disableScrollWarning(this._map.options.gestureHandlingOptions.duration);
    }
  },

  _handleMouseOver: function(e) {
    this._enableInteractions();
  },

  _handleMouseOut: function(e) {
    if (!draggingMap) this._disableInteractions();
  }

});

L.Map.mergeOptions({
  gestureHandlingOptions: gestureHandlingOptions
});

L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

export default GestureHandling;
