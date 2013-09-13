perf.js
=======

JavaScript performance utility

## API

#### time(target:fn, callback:fn)
Measure how long a function takes to execute

##### target
The function that you would like to measure performance for

##### callback(duration, formatted)
The function that is called once performance has been measured

###### Arguments
* `duration` - Execution time in milliseconds
* `formatted` - A formatted time (e.g., 37ms)

#### fps(target:fn, callback:fn[, limit:int])
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

#### bandwidth(callback:fn)
Measure bit-rate of network connection

##### callback(bps)
The function that is called once bandwidth has been measured

###### Arguments
* `bps` - Bits per second as a float

## License

perf.js is released under the MIT license.