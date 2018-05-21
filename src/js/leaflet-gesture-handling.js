L.Map.mergeOptions({
	gestureHandlingText: {}
});

L.GestureHandler = L.Handler.extend({

	addHooks: function () {

		this._setLanguageContent();
        this._disableInteractions();
		
		//Uses native event listeners instead of L.DomEvent due to issues with Android touch events 
		//turning into pointer events
		this._map._container.addEventListener("touchstart", this._handleTouch);
		this._map._container.addEventListener("touchend", this._handleTouch);
		L.DomEvent.on(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'mousewheel', this._handleScroll, this);
	},

	removeHooks: function () {

        this._enableInteractions();
        this._removeMacClass();

		this._map._container.removeEventListener("touchstart", this._handleTouch);
		this._map._container.removeEventListener("touchend", this._handleTouch);
		L.DomEvent.off(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'mousewheel', this._handleScroll, this);
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
	
	_setLanguageContent: function() {

		var languageContent;
		
		//If user has supplied custom language, use that
		if (this._map.options.gestureHandlingText && this._map.options.gestureHandlingText.touch) {
			languageContent = this._map.options.gestureHandlingText;
		} else {
			//Otherwise auto set it from the language files

			//Determine their language e.g fr or en-US
			var lang = this._getUserLanguage();

			//If we couldn't find it default to en
			if (!lang) {
				lang = "en";
			}

			//Lookup the appropriate language content
			if (L.GestureHander_LanguageContent[lang]) {
				languageContent = L.GestureHander_LanguageContent[lang];
			} 

			//If no result, try searching by the first part only. e.g en-US just use en.
			if(!languageContent && lang.indexOf("-") !== -1) {
				lang = lang.split("-")[0];
				languageContent = L.GestureHander_LanguageContent[lang];
			}

			if(!languageContent) {
				// If still nothing, default to English
				// console.log("No lang found for", lang);
				lang = "en";
				languageContent = L.GestureHander_LanguageContent[lang];
			}

		}

		//TEST
		// languageContent = L.GestureHander_LanguageContent["vi"];

		//Check if they're on a mac for display of command instead of ctrl
		var mac = false;
		if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
			mac = true;
		}

		var scrollContent = languageContent.scroll;
		if(mac) {
			scrollContent = languageContent.scrollMac;
		}

		this._map._container.setAttribute('data-gesture-handling-touch-content', languageContent.touch);
		this._map._container.setAttribute('data-gesture-handling-scroll-content', scrollContent);




	},

	_getUserLanguage: function() {
		var	lang = navigator.languages
				? navigator.languages[0]
				: (navigator.language || navigator.userLanguage)
		return lang;
	},

    _removeMacClass: function() {
        this._map._container.classList.remove('mac');
    },

	_handleTouch: function (e) {

		//Disregard touch events on the minimap if present
		if (e.target.classList.contains('leaflet-control-minimap') || e.target.classList.contains('leaflet-interactive')) {
			return;
		}

		if ( (e.type === 'touchmove' || e.type === 'touchstart') && e.touches.length === 1) {
			e.currentTarget.classList.add('leaflet-gesture-handling-touch-warning');
			this._map.dragging.disable();
		} else {
			e.currentTarget.classList.remove('leaflet-gesture-handling-touch-warning');
			this._map.dragging.enable();
		}
	},

	_isScrolling: false,

	_handleScroll: function (e) {
		if (e.metaKey || e.ctrlKey) {
			e.preventDefault();
			this._map._container.classList.remove('leaflet-gesture-handling-scroll-warning');
			this._map.scrollWheelZoom.enable();
		} else {
			this._map._container.classList.add('leaflet-gesture-handling-scroll-warning');
			this._map.scrollWheelZoom.disable();

			clearTimeout(this._isScrolling);

			// Set a timeout to run after scrolling ends
			this._isScrolling = setTimeout(function () {
				// Run the callback
				var warnings = document.getElementsByClassName("leaflet-gesture-handling-scroll-warning");
				for (var i = 0; i < warnings.length; i++) {
					warnings[i].classList.remove('leaflet-gesture-handling-scroll-warning');
				}

			}, 1000);
		}
	}

});

L.Map.addInitHook('addHandler', 'gestureHandling', L.GestureHandler);

