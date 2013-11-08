// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


(function( $ ){

	/**
	 * Magically adds classes like 'first-row' and 'first-column' to a grid
	 * @return {[type]} [description]
	 */
	var PsuedoSelecto = new( function() {

		// Setup _root and _s for private vars
		var _root = this;
		var _s = {
			container: $('.grid'),
			cells: $('.cell'),
			testsCallback: function() {}
		};

		/* 
		 * Initialize 
		 */
		this.init = function(opts) {
			_s = $.extend(_s, opts);

			_parseCells();
			_bindUIActions();
		}

		var _updateCells = function() {
			_s.container.children(_s.cells).removeClass( function(index, css) {
				return (css.match(/\bps--\S+/g) || []).join(' ');
			});
			_parseCells();
		}

		var _parseCells = function() {
			var gridStructure = [],
					thisoffsetTop = 0,
					celloffsetTop = 0,
					rowID = 0;

			_s.container.children(_s.cells).each( function() {
				thisoffsetTop = $(this).context.offsetTop;

				if (thisoffsetTop > celloffsetTop) {
					rowID++;
					gridStructure.push([]);
				}

				gridStructure[rowID-1].push($(this));

				celloffsetTop = thisoffsetTop;
			});

			_assignCellValues(gridStructure);
		}

		var _assignCellValues = function(gs) {

			/* First Row */
			$.each(gs[0], function(index, value) {
				$(this).addClass('ps--first-row');
			});

			/* Last row */
			$.each(gs[gs.length-1], function(index, value) {
				$(this).addClass('ps--last-row');
			});

			/* First Column */
			$.each(gs, function(index, value) {
				$(this)[0].addClass('ps--first-column');
			});

			/* Last Column */
			if( gs[0].length > 1 ) {
				$.each(gs, function(index, value) {
					var cell = $(this),
							lastColPos = gs[0].length;

					if(cell.length == lastColPos) {
						cell[cell.length-1].addClass('ps--last-column');
					}
				});
			}

			_s.testsCallback.call(this, gs);
		}

		var _bindUIActions = function() {
			$(window).bind('resize', function() {
				_updateCells();
			});
		}

	})();

	function myCustomTests(gs) {
		// You can run your own operations!
		
		/* Fade out the second column */
		$.each(gs, function(index, value) {
			var cell = $(this);

			if(cell.length >= 2) {
				cell[1].addClass('ps--faded');
			}
		});
	}


	/*
	 * Initialize all our modules.
	 */

	PsuedoSelecto.init({
		container: $('.grid--1'),
		cells: $('.grid__box'),
		testsCallback: function(gs) {
			myCustomTests(gs);
		}
	});

})( jQuery );