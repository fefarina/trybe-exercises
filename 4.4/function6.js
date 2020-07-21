function somaNumbers(numbers) {
    let result = 0;

    for (let i = 1; i <= numbers; i++) {
        result = result + i;
    }

    return result
}

console.log(somaNumbers(3));