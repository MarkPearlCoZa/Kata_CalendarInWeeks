var moment = require('moment');

/*
module.exports = {
    

    startOfYear: function() {
        let start = moment("2016-01-01") .clone().day(1);
        return start.date();
    }
}
*/

module.exports = class Person {
    
    startOfYear() {
        return -1;
    }
}
