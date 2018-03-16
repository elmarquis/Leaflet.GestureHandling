L.GestureHandler = L.Handler.extend({

	addHooks: function () {

        this._disableInteractions();
        this._checkIfMacAddClass();

		L.DomEvent.on(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchstart', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchend', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchmove', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'mousewheel', this._handleScroll, this);
	},

	removeHooks: function () {

        this._enableInteractions();
        this._removeMacClass();

		L.DomEvent.off(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchstart', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchend', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchmove', this._handleTouch, this);
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

    _checkIfMacAddClass: function() {
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
            this._map._container.classList.add('mac');
        }
    },

    _removeMacClass: function() {
        this._map._container.classList.remove('mac');
    },

	_handleTouch: function (e) {
		
		//Disregard touch events on the minimap if present
		if (e.target.classList.contains('leaflet-control-minimap') || e.target.classList.contains('leaflet-interactive')) {
			return;
		}

		if (e.type === 'pointerdown' || e.type === 'pointerup') {
			this._map.dragging.enable();
			return;
		}
		if (e.type === 'touchmove' && e.touches.length === 1) {
			this._map._container.classList.add('leaflet-gesture-handling-touch-warning');
			this._map.dragging.disable();
		} else {
			this._map._container.classList.remove('leaflet-gesture-handling-touch-warning');
			this._map.dragging.enable();
		}
	},

	_isScrolling: false,

	_handleScroll: function (e) {
		if (e.metaKey || e.ctrlKey) {
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
