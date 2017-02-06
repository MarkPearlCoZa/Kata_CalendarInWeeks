var moment = require('moment');

module.exports = {
    startOfYear: function() {
        var start = moment("2016-01-01").day(1);
        return start.date();
    }
}
