const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Edge Cases', function () {
    it('should handle negative numbers correctly for sum', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
    });

    it('should handle negative numbers correctly for subtraction', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('should handle negative numbers correctly for division', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.3);
    });

    it('should handle very large numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1000000.5, 999999.5), 2000000);
    });

    it('should handle very small numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 0.00001, 0.00001), 0);
    });

    it('should throw an error for invalid type', function () {
      assert.throws(() => calculateNumber('INVALID', 1, 2), /Invalid type/);
    });
  });
});
