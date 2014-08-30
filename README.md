interleave-values
========

Interleave two values producing one string. E.G 'abc' & '123' -> 'a1b2c3'.

The return value is always a string and the 2 inputs are coerced to be strings!

Installation
--------

    $ npm install -g interleave-values


Usage
--------

```javascript
var interleave = require('interleave-values');

// two strings
interleave('abc', '123');
// returns 'a1b2c3'

// two ints
interleave(123, 456);
// '142536'

// values do not have to be of equal length
interleave('abcde', '123');
// returns 'a1b2c3de'

interleave('abc', '12345');
// returns 'a1b2c345'

```

Running tests
----

    $ npm test