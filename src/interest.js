// A = P(1 + rt)
const simpleInterest = (principal, rate, time) => {
  return principal * (1 + rate * time);
};

// A = P (1 + r/n) ^ (nt)
// P: Principal
// r: interest rate
// n: number of times interest is compounded per "t"
// t: time
const compoundInterest = (principal, rate, number, time) => {
  return principal * Math.pow((1 + rate/number), (number * time));
};

// Future Value if Payment is applied at end of each series
// PMT × {[(1 + r/n)(nt) - 1] / (r/n)}
const compoundInterestWithPaymentAtEnd = (principal, rate, number, time, payment = 0) => {
  const amount = compoundInterest(principal, rate, number, time);
  const futureAmount = payment * ( ( Math.pow((1 + rate/number), (number * time) ) - 1 ) / (rate / number) );
  return amount + futureAmount;
};

// Funture Value if Payment is applied at start of each series
// PMT × {[(1 + r/n)(nt) - 1] / (r/n)} × (1+r/n)
const compoundInterestWithPaymentAtStart = (principal, rate, number, time, payment = 0) => {
  const amount = compoundInterest(principal, rate, number, time);
  const futureAmount = payment * ( ( Math.pow( (1 + rate/number), (number * time) ) - 1) / (rate / number) ) * (1 + rate/number);
  return amount + futureAmount;
};

module.exports = {
  simpleInterest,
  compoundInterest,
  compoundInterestWithPaymentAtEnd,
  compoundInterestWithPaymentAtStart,
};
