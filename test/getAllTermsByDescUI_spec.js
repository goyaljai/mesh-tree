var assert = require('assert')
  , meshTreeFuncs = require('../index.js')
  , co = require('co');

// getAllTermsByDescUI
describe('get all terms by UI', function () {
  describe('D000001', function () {
    var resultExpected = ['A23187, Antibiotic', 'Antibiotic A23187', 'A23187', 'A 23187', 'A-23187', 'Calcimycin'];
    it('should return all terms for concept Calcimycin: ' + resultExpected.toString(), function (done) {
      co(meshTreeFuncs.getAllTermsByDescUI('D000001')).then(function (result) {
        assert.deepEqual(result.sort(), resultExpected.sort());
        done();
      });
    })
  })
  describe('D009369', function () {
    var resultExpected = ['Cancers', 'Cancer', 'Benign Neoplasm', 'Neoplasm, Benign', 'Neoplasms, Benign', 'Benign Neoplasms', 'Tumor', 'Tumors', 'Neoplasia', 'Neoplasm', 'Neoplasms'];
    it('should return all terms for concept Neoplasms: ' + resultExpected.toString(), function (done) {
      co(meshTreeFuncs.getAllTermsByDescUI('D009369')).then(function (result) {
        assert.deepEqual(result.sort(), resultExpected.sort());
        done();
      });
    })
  })
  describe('D005138', function () {
    var resultExpected = ['Eyebrow', 'Eyebrows'];
    it('should return all terms for concept Eyebrows: ' + resultExpected.toString(), function (done) {
      co(meshTreeFuncs.getAllTermsByDescUI('D005138')).then(function (result) {
        assert.deepEqual(result.sort(), resultExpected.sort());
        done();
      });
    })
  })
});