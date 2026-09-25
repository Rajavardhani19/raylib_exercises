// function line(number) {
//   if (number === 0) {
//     return " ";
//   }
//   const result = "*" + line(number - 1);
//   return result;
// }
// function pattern(num, result, middle) {
//   if (num === 0) {
//     return result;
//   }
//   if (middle === 1) {
//     let getline = line(num);
//     result = getline;
//     middle = middle + 1;
//     return pattern(num - 1, result, middle);
//   }
//   let getline = line(num);
//   result = getline + "\n" + result + "\n" + getline;
//   return pattern(num - 1, result, middle);
// }
// console.log(pattern(3, 0, 1));

// function decrease(number) {
//   if (number === 0) {
//     return " ";
//   }
//   let result = "\n";
//   result = result + pattern(number - 1);
//   return result + decrease(number - 1);
// }

// function increase(number) {
//   if (number === 0) {
//     return " ";
//   }
//   let result = "\n";
//   result = result + pattern(number);
//   return increase(number - 1) + result;
// }
// function patternFull(number) {
//   const result = increase(number) + decrease(number);
//   return result;
// }
// console.log(patternFull(3, 0));
function pattern(number,s) {
  if(number===)

}
