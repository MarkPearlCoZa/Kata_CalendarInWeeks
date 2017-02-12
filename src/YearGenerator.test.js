var expect = require('chai').expect;
var moment = require('moment');
var calendarInWeeksGenerator = require("../src/YearGenerator.js");

describe('In 2016', function() {
    let generator = new calendarInWeeksGenerator();

    it('the first item should be 28 Dec 2015', function() {
        expect(generator.getPeriodsOfYearFor(2016)[0].format("DD MMM YYYY")).to.equal("28 Dec 2015");
    });

    it('the last item should be 26 Dec 2016', function() {
        expect(generator.getPeriodsOfYearFor(2016).slice(-1)[0].format("DD MMM YYYY")).to.equal("26 Dec 2016");
    });
});
