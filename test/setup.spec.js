var assert = require('assert');
var expect = require('chai').expect
var dateGenerator = require("../src/DateGenerator.js");

describe('In 2016', function() {
    it('the first Monday of the first week of the year is', function() {
        expect(dateGenerator.startOfYear()).to.equal(28);
    });
});
