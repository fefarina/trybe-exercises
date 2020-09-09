// let fatorial = number => {
//     let result = 1;
//     for(let i = 2; i <= number; i++) {
//         result *= i;
//     }

//     return result
// }

// console.log(fatorial(4));

const arr = [20, 5, 100, 1, 90, 200, 40, 29];

for(let item of arr) {
    setTimeout(() => console.log(item), item)
}