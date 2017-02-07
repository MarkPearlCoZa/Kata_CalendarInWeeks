var assert = require('assert');
var expect = require('chai').expect;
var moment = require('moment');

var dateGenerator = require("../src/DateGenerator.js");

describe('In 2016', function() {
    let generator = new dateGenerator(2016);

    it('the first Monday of the first week of 2016 is the 28th of Dec 2015', function() {
        expect(generator.startOfYear().isSame(moment("2015-12-28"))).to.be.true;
    });

    it('the Monday of the second week of 2016 is the 4th of Jan 2016', function() {
        expect(generator.weekOf(2).isSame(moment("2016-01-04"))).to.be.true;
    });
});

describe('In 2017', function() {
    let generator = new dateGenerator(2017);
    it('the first Monday of the first week of 2015 is the 28th of Dec 2015', function() {
        expect(generator.startOfYear().isSame(moment("2017-01-02"))).to.be.true;
    });
});

/* 

2016
Mon 28 Dec 2015
Tue 29 Dec 2015
Wed 30 Dec 2015
Thu 31 Dec 2015
Fri 1 Jan 2016
Sat 2
Sun 3
Mon 4
Mon 11
Mon 25


2017
Mon 2 Jan 2017
Mon 9 Jan 2017
*/
