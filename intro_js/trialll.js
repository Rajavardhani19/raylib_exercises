function f(number){
    console.log(number);
     return g(number);
}
function g(number){
    console.log(number+1);
    return h(number);
}
function h(number){
    console.log(number - 1);
}
console.log(f(3));