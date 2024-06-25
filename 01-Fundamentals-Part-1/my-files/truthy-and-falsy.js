console.log('' == false); // true
console.log(0 == false); // true
console.log(false == false); // true
console.log(!true == false); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// 5 falsy values: 0, undefined, null, NaN, ''
const money = 0;

if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job");
}


let height;

if (height) {
    console.log("Yay! We have your height.");
} else {
    console.log("Height is undefined");
}