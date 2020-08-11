const bigWord = phrase => {
    let words = phrase.split(' ');
    let maxLength = 0;
    let result = '';

    for (word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word
        }
    }

    return result

}

console.log(bigWord("Antonio foi no banheiro e não sabemos o que aconteceu"));