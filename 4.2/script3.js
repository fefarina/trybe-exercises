let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;

for(i = 0; i < numbers.length; i++) {
    count += numbers[i];
}

let media = count/numbers.length;

console.log(media)