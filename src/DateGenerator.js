var moment = require('moment');

module.exports = {
    doSomething: function() {
        var firstDayOfYear = moment("2016-01-01");
        var daysBack = (firstDayOfYear.weekday() * -1);
        var start = firstDayOfYear.day(daysBack);
        console.log(daysBack);
        console.log(start.format());
        return -1;
    }
}