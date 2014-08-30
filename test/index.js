var interleave = require('../');

describe('Interleave Values', function() {
	
	it('should return a string given 2 strings', function(done) {
		interleave('abc', '123').should.be.string;
		done();
	});
	
	it('should return a string given 1 string and 1 number', function(done) {
		interleave('abc', 123).should.be.string;
		done();
	});
	
	it('should return a string given 2 numbers', function(done) {
		interleave(123, 456).should.be.string;
		done();
	});
	
	it('should handle 2 strings', function(done) {
		interleave('abc', '123').should.equal('a1b2c3');
		done();
	});
	
	it('should handle 1 string', function(done) {
		interleave('abc').should.equal('abc');
		done();
	});
	
	it('should handle 0 strings', function(done) {
		interleave().should.equal('');
		done();
	});
	
	it('should handle 2 ints', function(done) {
		interleave(123, 456).should.equal('142536');
		done();
	});
	
	it('should handle 2 floats', function(done) {
		interleave(1.23, 4.56).should.equal('14..2536');
		done();
	});
	
	it('should handle nulls', function(done) {
		interleave(null, null).should.equal('');
		done();
	});
	
	it('should handle undefined', function(done) {
		interleave(undefined, undefined).should.equal('');
		done();
	});
	
	it('should handle null & undefined', function(done) {
		interleave(null, undefined).should.equal('');
		done();
	});
	
	it('should handle null & 1 string', function(done) {
		interleave(null, 'abc').should.equal('abc');
		done();
	});
	
	it('should handle the 1st string been longer than the second', function(done) {
		interleave('abcde', '123').should.equal('a1b2c3de');
		done();
	});
	
	it('should handle the 2nd string been longer than the first', function(done) {
		interleave('abc', '12345').should.equal('a1b2c345');
		done();
	});
	
});