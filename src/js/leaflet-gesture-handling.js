/*
* * Leaflet Gesture Handling **
* * Version 1.1.8
*/
import LanguageContent from "./language-content";

L.Map.mergeOptions({
    gestureHandlingOptions: {
        text: {},
        duration: 1000
    }
});

var draggingMap = false;

export var GestureHandling = L.Handler.extend({
    addHooks: function() {
        this._handleTouch = this._handleTouch.bind(this);

        this._setupPluginOptions();
        this._setLanguageContent();
        this._disableInteractions();

        //Uses native event listeners instead of L.DomEvent due to issues with Android touch events
        //turning into pointer events
        this._map._container.addEventListener("touchstart", this._handleTouch);
        this._map._container.addEventListener("touchmove", this._handleTouch);
        this._map._container.addEventListener("touchend", this._handleTouch);
        this._map._container.addEventListener("touchcancel", this._handleTouch);
        this._map._container.addEventListener("click", this._handleTouch);

        L.DomEvent.on(
            this._map._container,
            "wheel",
            this._handleScroll,
            this
        );
        L.DomEvent.on(this._map, "mouseover", this._handleMouseOver, this);
        L.DomEvent.on(this._map, "mouseout", this._handleMouseOut, this);

        // Listen to these events so will not disable dragging if the user moves the mouse out the boundary of the map container whilst actively dragging the map.
        L.DomEvent.on(this._map, "movestart", this._handleDragging, this);
        L.DomEvent.on(this._map, "move", this._handleDragging, this);
        L.DomEvent.on(this._map, "moveend", this._handleDragging, this);
    },

    removeHooks: function() {
        this._enableInteractions();

        this._map._container.removeEventListener(
            "touchstart",
            this._handleTouch
        );
        this._map._container.removeEventListener(
            "touchmove",
            this._handleTouch
        );
        this._map._container.removeEventListener("touchend", this._handleTouch);
        this._map._container.removeEventListener(
            "touchcancel",
            this._handleTouch
        );
        this._map._container.removeEventListener("click", this._handleTouch);

        L.DomEvent.off(
            this._map._container,
            "wheel",
            this._handleScroll,
            this
        );
        L.DomEvent.off(this._map, "mouseover", this._handleMouseOver, this);
        L.DomEvent.off(this._map, "mouseout", this._handleMouseOut, this);

        L.DomEvent.off(this._map, "movestart", this._handleDragging, this);
        L.DomEvent.off(this._map, "move", this._handleDragging, this);
        L.DomEvent.off(this._map, "moveend", this._handleDragging, this);
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
        if (this._map.tap) {
            this._map.tap.disable();
        }
    },

    _enableInteractions: function() {
        this._map.dragging.enable();
        this._map.scrollWheelZoom.enable();
        if (this._map.tap) {
            this._map.tap.enable();
        }
    },

    _setupPluginOptions: function() {
        //For backwards compatibility, merge gestureHandlingText into the new options object
        if (this._map.options.gestureHandlingText) {
            this._map.options.gestureHandlingOptions.text = this._map.options.gestureHandlingText;
        }
    },

    _setLanguageContent: function() {
        var languageContent;
        //If user has supplied custom language, use that
        if (
            this._map.options.gestureHandlingOptions &&
            this._map.options.gestureHandlingOptions.text &&
            this._map.options.gestureHandlingOptions.text.touch &&
            this._map.options.gestureHandlingOptions.text.scroll &&
            this._map.options.gestureHandlingOptions.text.scrollMac
        ) {
            languageContent = this._map.options.gestureHandlingOptions.text;
        } else {
            //Otherwise auto set it from the language files

            //Determine their language e.g fr or en-US
            var lang = this._getUserLanguage();

            //If we couldn't find it default to en
            if (!lang) {
                lang = "en";
            }

            //Lookup the appropriate language content
            if (LanguageContent[lang]) {
                languageContent = LanguageContent[lang];
            }

            //If no result, try searching by the first part only. e.g en-US just use en.
            if (!languageContent && lang.indexOf("-") !== -1) {
                lang = lang.split("-")[0];
                languageContent = LanguageContent[lang];
            }

            if (!languageContent) {
                // If still nothing, default to English
                // console.log("No lang found for", lang);
                lang = "en";
                languageContent = LanguageContent[lang];
            }
        }

        //TEST
        // languageContent = LanguageContent["bg"];

        //Check if they're on a mac for display of command instead of ctrl
        var mac = false;
        if (navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
            mac = true;
        }

        var scrollContent = languageContent.scroll;
        if (mac) {
            scrollContent = languageContent.scrollMac;
        }

        this._map._container.setAttribute(
            "data-gesture-handling-touch-content",
            languageContent.touch
        );
        this._map._container.setAttribute(
            "data-gesture-handling-scroll-content",
            scrollContent
        );
    },

    _getUserLanguage: function() {
        var lang = navigator.languages
            ? navigator.languages[0]
            : navigator.language || navigator.userLanguage;
        return lang;
    },

    _handleTouch: function(e) {
        //Disregard touch events on the minimap if present
        var ignoreList = [
            "leaflet-control-minimap",
            "leaflet-interactive",
            "leaflet-popup-content",
            "leaflet-popup-content-wrapper",
            "leaflet-popup-close-button",
            "leaflet-control-zoom-in",
            "leaflet-control-zoom-out"
        ];

        var ignoreElement = false;
        for (var i = 0; i < ignoreList.length; i++) {
            if (L.DomUtil.hasClass(e.target, ignoreList[i])) {
                ignoreElement = true;
            }
        }

        if (ignoreElement) {
            if (
                L.DomUtil.hasClass(e.target, "leaflet-interactive") &&
                e.type === "touchmove" &&
                e.touches.length === 1
            ) {
                L.DomUtil.addClass(this._map._container,
                    "leaflet-gesture-handling-touch-warning"
                );
                this._disableInteractions();
            } else {
                L.DomUtil.removeClass(this._map._container, 
                    "leaflet-gesture-handling-touch-warning"
                );
            }
            return;
        }
        // screenLog(e.type+' '+e.touches.length);
        if (e.type !== "touchmove" && e.type !== "touchstart") {
            L.DomUtil.removeClass(this._map._container,
                "leaflet-gesture-handling-touch-warning"
            );
            return;
        }
        if (e.touches.length === 1) {
            L.DomUtil.addClass(this._map._container, 
                "leaflet-gesture-handling-touch-warning"
            );
            this._disableInteractions();
        } else {
            e.preventDefault();
            this._enableInteractions();
            L.DomUtil.removeClass(this._map._container, 
                "leaflet-gesture-handling-touch-warning"
            );
        }
    },

    _isScrolling: false,

    _handleScroll: function(e) {
        if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            L.DomUtil.removeClass(this._map._container,
                "leaflet-gesture-handling-scroll-warning"
            );
            this._map.scrollWheelZoom.enable();
        } else {
            L.DomUtil.addClass(this._map._container,
                "leaflet-gesture-handling-scroll-warning"
            );
            this._map.scrollWheelZoom.disable();

            clearTimeout(this._isScrolling);

            // Set a timeout to run after scrolling ends
            this._isScrolling = setTimeout(function() {
                // Run the callback
                var warnings = document.getElementsByClassName(
                    "leaflet-gesture-handling-scroll-warning"
                );
                for (var i = 0; i < warnings.length; i++) {
                    L.DomUtil.removeClass(warnings[i],
                        "leaflet-gesture-handling-scroll-warning"
                    );
                }
            }, this._map.options.gestureHandlingOptions.duration);
        }
    },

    _handleMouseOver: function(e) {
        this._enableInteractions();
    },

    _handleMouseOut: function(e) {
        if (!draggingMap) {
            this._disableInteractions();
        }
    }

});

L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

export default GestureHandling;
