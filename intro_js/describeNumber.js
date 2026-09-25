// function describeNumber(number){
//     if (number > 0){
//         return "positive";
//     }
//     if (number < 0){
//         return "negative";
//     }
//     return "zero";
// }
function describeNumber(number){
    if (number > 0){
        return "positive"
    }
    else if (number < 0){
        return "negative"
    }
    return "zero"
}
console.log(describeNumber(12));
console.log(describeNumber(-12));
console.log(describeNumber(0));
