const roundToDecimal = value => {
  const temp = value * 100;
  const round = Math.round(temp);
  return round / 100;
};

// A = P(1 + rt)
const simpleInterest = (principal, rate, time) => {
  const amount = principal * (1 + rate * time);
  return roundToDecimal(amount);
};

// A = P (1 + r/n) ^ (nt)
// P: Principal
// r: interest rate
// n: number of times interest is compounded per "t"
// t: time
const compoundInterest = (principal, rate, number, time) => {
  const amount = principal * Math.pow((1 + rate/number), (number * time));
  return roundToDecimal(amount);
};

// Future Value if Payment is applied at end of each series
// PMT × {[(1 + r/n)(nt) - 1] / (r/n)}
const compoundInterestWithPaymentAtEnd = (principal, rate, number, time, payment = 0) => {
  const amount = compoundInterest(principal, rate, number, time);
  const futureAmount = payment * ( ( Math.pow((1 + rate/number), (number * time) ) - 1 ) / (rate / number) );
  return roundToDecimal(amount + futureAmount);
};

// Funture Value if Payment is applied at start of each series
// PMT × {[(1 + r/n)(nt) - 1] / (r/n)} × (1+r/n)
const compoundInterestWithPaymentAtStart = (principal, rate, number, time, payment = 0) => {
  const amount = compoundInterest(principal, rate, number, time);
  const futureAmount = payment * ( ( Math.pow( (1 + rate/number), (number * time) ) - 1) / (rate / number) ) * (1 + rate/number);
  return roundToDecimal(amount + futureAmount);
};

module.exports = {
  simpleInterest,
  compoundInterest,
  compoundInterestWithPaymentAtEnd,
  compoundInterestWithPaymentAtStart,
};
