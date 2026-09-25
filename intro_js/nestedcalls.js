function double(number) {
  return number * 2;
}

function addOne(number) {
  return number + 1;
}
function add(a,b){
    return a+b;
}
// console.log(addOne(double(10)))
// console.log(double(addOne(10)))
console.log(add(double(4),addOne(4)))