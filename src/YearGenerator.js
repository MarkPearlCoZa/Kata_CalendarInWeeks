var dateGenerator = require("../src/FirstDayOfWeekGenerator.js");

module.exports = class calendarInWeeksGenerator {

    getPeriodsOfYear() {
        let result = [];
        let generator = new dateGenerator(2016);
        let weekCount = 0;

        do {
            result.push(generator.weekOf(weekCount));
            weekCount++;
            let nextWeek = 
        } while ();

        return result;
    }    
}
