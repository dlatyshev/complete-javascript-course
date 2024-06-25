// type conversion

const userAge = '35';

console.log(Number(userAge) - 18); // 17
console.log(typeof userAge);

console.log(Number("Hello")); // NaN - not a number
console.log(typeof NaN);
console.log(String(23) + 11); // 2311


// type coercien
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 5); // 8
console.log("23" + "10" + 3); // 23103
console.log('10' / '5'); // 2
console.log('2' * '5'); // 10


let n = '1' + 1;
n = n - 1;
console.log(n); // 10


console.log(1 + 2 + 3 + 4 + '5') // 105
console.log('10' - '9' - '1' + 4 + '6'); // 46