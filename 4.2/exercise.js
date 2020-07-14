let numberSena = [];
let myNumber = [2, 10, 25, 35, 57, 59];
let sortedNumbers = 0;

function aleatoryNumbers() {
    return Math.ceil(Math.random() * 60)
}

let number1 = aleatoryNumbers()
let number2 = aleatoryNumbers()
let number3 = aleatoryNumbers()
let number4 = aleatoryNumbers()
let number5 = aleatoryNumbers()
let number6 = aleatoryNumbers()
numberSena = [number1, number2, number3, number4, number5, number6];


for (let i = 0; i < numberSena.length; i += 1){
    for(let j = 0; j < myNumber.length; j += 1) {
        if(numberSena[i] === myNumber[j]) {
            sortedNumbers += 1;
        }
    }
}


console.log(`Numeros Sorteados: ${numberSena}`);
console.log(`Nossa tentativa: ${myNumber}`);
console.log(`Número de acertos: ${sortedNumbers}`)