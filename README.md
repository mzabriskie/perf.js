perf.js
=======

JavaScript performance utility

## API

### time(target:fn, callback:fn)
Measure how long a function takes to execute

##### target
The function that you would like to measure performance for

##### callback(duration, formatted)
The function that is called once performance has been measured

###### Arguments
* `duration` - Execution time in milliseconds
* `formatted` - A formatted time (e.g., 37ms)

##### Example

```js
function loop() {
	for (var i=0; i<1000000; i++) {
		// Just seeing how long it takes to loop over 1 million items
	}
}

function callback(duration, formatted) {
	console.log('Looping 1 million times took ' + formatted);
}

perf.time(loop, callback);
```

### fps(target:fn, callback:fn[, limit:int])
Measure how many frames per second a function executes

##### target
The function that will perform rendering

##### callback(fps, formatted)
The function that is called when FPS is updated

###### Arguments
* `fps` - Frames per second as a float
* `formatted` - Frames per second formated (e.g., 139.6fps)

##### limit
The total number of times to run `target`

##### Example

```js
function render() {
    document.getElementById('canvas').innerHTML = '';
    for (var i=0; i<10; i++) {
        document.getElementById('canvas').appendChild(document.createElement('div'));
    }
}

function callback(fps, formatted) {
    document.getElementById('fps').innerHTML = formatted;
}

perf.fps(render, callback);
```

### bandwidth(callback:fn)
Measure bit-rate of network connection

##### callback(bps)
The function that is called once bandwidth has been measured

###### Arguments
* `bps` - Bits per second as a float

##### Example

```js
function callback(bps) {
	console.log('Your connection speed is:');
	console.log(bps.toFixed(2) + ' bps');
	console.log((bps / 1024).toFixed(2) + ' Kbps');
	console.log((bps / (1024 * 1024)).toFixed(2) + ' Mbps');
}

perf.bandwidth(callback);
```

## License

perf.js is released under the MIT license.