let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highNumber = 0;

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > highNumber) {
        highNumber = numbers[i]
    }
}

console.log(highNumber);