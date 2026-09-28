

// //compund interest
// let increment = 0;
// let prev_inter = 0
// // function compound_interest(principal_amounnt,interest,years,increment,prev_inter){
// function compound_interest(principal_amounnt, interest, years) {
//     increment += 1
//     if (increment == years) {
//         return principal_amounnt + prev_inter;
//     }
//     principal_amounnt += (principal_amounnt * interest / 100)
//     prev_inter = principal_amounnt * interest / 100;
//     //    return compound_interest(principal_amounnt,interest,2,increment,prev_inter);
//     return compound_interest(principal_amounnt, interest, years);
// }
// console.log(compound_interest(1000, 10, 2));

//even numbers
// function even_Numbers(number, last_number) {
//     if (number >= last_number) {
//         return " ";
//     }
//     value = (number + 2) - 1;
//     return "\n" + value + even_Numbers(number + 2, last_number)
// }
// console.log(even_Numbers(1, 11));

//integer to binary representation
function quotient(number) {
    if (number === 0 || number === 1) {
        return 0;
    }
    number -= 2;
    return 1 + quotient(number);
}

function binaryConversion(number) {
    if (number === 0) {
        return " ";
    }
    let value = number % 2;
    return binaryConversion(quotient(number))+ value;
}
console.log(binaryConversion(10));


