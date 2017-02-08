var expect = require('chai').expect;
var moment = require('moment');
var calendarInWeeksGenerator = require("../src/YearGenerator.js");

describe('In 2016', function() {
    let generator = new calendarInWeeksGenerator();

    it('the first item return should be 2015-12-28', function() {
        expect(generator.getPeriodsOfYear()[0].format("DD MMM YYYY")).to.equal("28 Dec 2015");
        //expect(generator.getPeriodsOfYear()[0].isSame(moment("2015-12-28"))).to.be.true;
    });
});
