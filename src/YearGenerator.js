let firstDayOfWeekGenerator = require('../src/FirstDayOfWeekGenerator.js');
let moment = require('moment');

module.exports = class calendarInWeeksGenerator {

    getPeriodsOfYearFor(year) {
        let firstDayOfYear = new moment(year.toString() + "-01-01");
        let lastDayOfYear = firstDayOfYear.clone().add(1, 'years').subtract(1,"days");
        let generator = new firstDayOfWeekGenerator(year);
        let weekCount = 0;
        let nextWeek = generator.weekOf(0);
        let result = [];

        do {
            result.push(nextWeek);
            weekCount++;
            nextWeek = generator.weekOf(weekCount);
        } while (nextWeek.isBefore(lastDayOfYear));

        return result;
    }    
}
