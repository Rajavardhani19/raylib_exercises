function parentheses(number){
    if (number === 0){
        return "";
    }
    const result = "(" + parentheses(number - 1)
     return result + ")";
}
console.log($(parentheses(5)))