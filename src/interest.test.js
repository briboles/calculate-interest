const Interest = require('./interest');

describe('Interest', () => {
  describe('simple interest', () => {
    it('$10,000 at 5% for 5 years', () => {
      expect(
        Interest.simpleInterest(10000, 0.05, 5),
      ).toEqual(12500);
    })
  });
  describe('compoundInterest', () => {
    it('monthly compounding, ten years', () => {
      expect(
        Interest.compoundInterest(5000, 0.05, 12, 10),
      ).toEqual(8235.0474884514);
    });
  });
  describe('compoundInterestWithPaymentAtEnd', () => {
    it('monthly compounding, ten years with payments at end', () => {
      expect(
        Interest.compoundInterestWithPaymentAtEnd(5000, 0.05, 12, 10, 100)
      ).toEqual(23763.275433018127);
    });
    it('same result as compoud interest when no payment provided', () => {
      expect(
        Interest.compoundInterestWithPaymentAtEnd(5000, 0.05, 12, 10),
      ).toEqual(8235.0474884514);
    });
  });
  describe('compoundInterestWithPaymentAtStart', () => {
    // Actually test that this value is correct bro!
    it('monthly compounding, ten years with payments at start', () => {
      expect(
        Interest.compoundInterestWithPaymentAtStart(5000, 0.05, 12, 10, 100)
      ).toEqual(23827.976382787154);
    });
    it('same result as compoud interest when no payment provided', () => {
      expect(
        Interest.compoundInterestWithPaymentAtStart(5000, 0.05, 12, 10),
      ).toEqual(8235.0474884514);
    });
  });
});