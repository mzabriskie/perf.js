(function (global) {

    var perf = {};

    // perf.time
    (function (perf) {
        /**
         * Format duration (e.g., 37ms, 22m:45s:13ms, etc.)
         * @param {Number} millis
         * @returns {String}
         */
        function duration(millis) {
            var intervals = {
                    'd': 86400000,
                    'h': 3600000,
                    'm': 60000,
                    's': 1000,
                    'ms':1
                },
                sb = '';

            for (var k in intervals) {
                if (!intervals.hasOwnProperty(k)) continue;

                var unit = Math.floor(millis / intervals[k]);
                millis %= intervals[k];

                if (unit > 0 || (sb.length === 0 && k === 'ms')) {
                    if (sb.length > 0) sb += ':';
                    sb += unit + k;
                }
            }
            return sb;
        }

        /**
         * Measure how long a function takes to execute
         * @param {Function} target
         * @param {Function} callback
         */
        perf.time = function (target, callback) {
            var now = Date.now();
            target.apply(this, arguments);
            var diff = Date.now() - now;

            callback.call(this, diff, duration(diff));
        };
    })(perf);


    // perf.fps
    (function (perf) {
        // The higher this value, the less the FPS will be affected by quick changes
        // Setting this to 1 will show you the FPS of the last sampled frame only
        var FPS_FILTER = 50;

        /**
         * Measure how many frames per second a function executes
         * Based on http://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
         * @param {Function} target
         * @param {Function} callback
         */
        perf.fps = function (target, callback) {
            var fps = 0, now, last = Date.now() - 1;

            setInterval(function () {
                target.apply(this, arguments);

                var frame = 1000 / ((now = Date.now()) - last),
                    sample = fps + (frame - fps) / FPS_FILTER;

                // Some browsers encounter NaN occasionally (Firefox, Chrome)
                // Drop the frame if this is the case
                if (!isNaN(sample) && sample.toString() !== 'Infinity') {
                    fps = sample;
                }
                last = now;
            }, 1);

            callback.call(this, fps, fps.toFixed(1) + 'fps');
            setInterval(function () { callback.call(this, fps, fps.toFixed(1) + 'fps'); }, 1000);
        };
    })(perf);

    // perf.bandwidth
    (function (perf) {
        var BITS = 8, // Bits in a byte
            IMAGE_SIZE = 2095282 * BITS; // Bit size of download

        /**
         * Measure bit-rate of network connection
         * @param {Function} callback
         */
        perf.bandwidth = function (callback) {
            var img = new Image(), now;

            img.onload = function () {
                var diff = (Date.now() - now) / 1000;
                callback.call(this, IMAGE_SIZE / diff);
            };

            now = Date.now();
            img.src = 'http://db.tt/tXnz4GRs?r=' + Math.floor(Math.random() * now);
        };
    })(perf);

	// Expose perf
	if (typeof define === 'function' && define.amd) {
		define('perf', [], function() { return perf; });
	} else {
		global.perf = perf;
	}

})(window);