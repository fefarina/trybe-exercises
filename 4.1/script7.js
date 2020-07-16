let nota = 5

if (nota >= 90 && nota <= 100) {
    console.log('Sua nota foi A');
} else if (nota >= 80 && nota <= 89) {
    console.log('Sua nota foi B');
} else if (nota >= 70 && nota <= 79) {
    console.log('Sua nota foi C');
} else if (nota >= 60 && nota <= 69) {
    console.log('Sua nota foi D');
} else if (nota >= 50 && nota <= 59) {
    console.log('Sua nota foi E')
} else if (nota < 50) {
    console.log('Sua nota foi F')
} else if (nota > 100 || nota < 0) {
    console.log('Sua nota é invalida')
}