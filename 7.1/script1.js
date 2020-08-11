let fatorial = number => {
    let result = 1;
    for(let i = 2; i <= number; i++) {
        result *= i;
    }

    return result
}

console.log(fatorial(4));