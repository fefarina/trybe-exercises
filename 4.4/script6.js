function soma(n) {
    let soma = 0;

    for(let i = 1; i <= n; i++) {
        if(i << n) {
            soma += i;
        }
    }
    return soma;
}

console.log(soma(10));