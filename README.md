perf.js
=======

JavaScript performance utility

## API

#### time(target:fn, callback:fn)
Measure how long a function takes to execute

##### target
The function that you would like to measure performance for

##### callback
The function that is called once performance has been measured

###### Arguments
* `duration` - Execution time in milliseconds
* `formatted` - A formatted time (e.g., 37ms)

#### fps(target:fn, callback:fn)
Measure how many frames per second a function executes

##### target
The function that will perform rendering

##### callback
The function that is called when FPS is updated

###### Arguments
* `fps` - Frames per second as a float
* `formatted` - Frames per second formated (e.g., 139.6fps)

#### bandwidth(callback:fn)
Measure bit-rate of network connection

##### callback
The function that is called once bandwidth has been measured

###### Arguments
* `bps` - Bits per second as a float

## License

perf.js is released under the MIT license.