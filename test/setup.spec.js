var assert = require('assert');
var expect = require('chai').expect
var dateGenerator = require("../src/DateGenerator.js");

describe('Given a Date Generator', function() {
    var generator = new dateGenerator();

    describe('In 2016', function() {
        it('the first Monday of the first week of 2016 is the 28th of Dec 2015', function() {
            expect(generator.startOfYear()).to.equal(28);
        });
    });

    describe('In 2015', function() {
        it('the first Monday of the first week of 2015 is the 28th of Dec 2015', function() {
            expect(generator.startOfYear()).to.equal(28);
        });
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
