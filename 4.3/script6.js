let divisors;
let numberToCheck = 3;

for (let number = 2; number < numberToCheck && divisors !== 1; number++) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors++;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');