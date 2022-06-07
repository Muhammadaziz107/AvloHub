const a = [12, 13, 14, 15, 16, 17];
const b = [22, 12, 13, 14, 24, 66];
const c = [44, 33, 17, 22, 46, 25];

const concatted = a.concat(b, c);

const repeatedNumber = concatted =>
  concatted.filter((item, index) => concatted.indexOf(item) !== index);
const number = repeatedNumber(concatted);
console.log(number);
