"use strict";
var phantom_ts_1 = require('./phantom_ts');
var data = phantom_ts_1.make('hello');
var validatedData = phantom_ts_1.validate(data);
phantom_ts_1.use(data);
if (validatedData) {
    phantom_ts_1.use(validatedData);
}
