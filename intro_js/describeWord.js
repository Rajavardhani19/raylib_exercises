function describeWord(word){
    let describe="empty"
    if (word.length > 0){
        describe="non-empty"
    }
    return describe;
}
console.log(describeWord("hello"));
console.log(describeWord(""));