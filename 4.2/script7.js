let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowNumber = 20000;

for(i = 0; i < numbers.length; i++) {
    // Template String
    if(numbers[i] < lowNumber) {
        lowNumber = numbers[i]
    } 
}

console.log(lowNumber);

