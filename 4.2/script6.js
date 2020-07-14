let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for(i = 0; i < numbers.length; i++) {
    // Template String
    if(numbers[i] % 2 != 0) {
        impar += ` ${numbers[i]}`;
    } 
}

if(impar == 0) {
    console.log("Nenhum valor impar encontrado!");
} else {
    console.log(impar)
}

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for(i = 0; i < numeros.length; i++) {
    // Template String
    if(numeros[i] % 2 != 0) {
        impares += 1;
    } 
}

if(impares == 0) {
    console.log("Nenhum valor impares encontrado!");
} else {
    console.log(impares)
}
