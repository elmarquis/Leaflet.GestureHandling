/*!
 * Gesture-handling plugin for LeafletJS.
 * @author Andrew Marquis
 */
/* global L */
L.GestureHandler = L.Handler.extend({

	addHooks: function () {
		L.DomEvent.on(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchstart', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchend', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'touchmove', this._handleTouch, this);
		L.DomEvent.on(this._map._container, 'mousewheel', this._handleScroll, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'click', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchstart', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchend', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'touchmove', this._handleTouch, this);
		L.DomEvent.off(this._map._container, 'mousewheel', this._handleScroll, this);
	},

	_handleTouch: function (e) {
		
		//Disregard touch events on the minimap
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

L.Map.addInitHook('addHandler', 'gestureCooperative', L.GestureHandler);

document.addEventListener('DOMContentLoaded', function () {
	if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
		document.body.classList.add('mac');
	}
}, false);
