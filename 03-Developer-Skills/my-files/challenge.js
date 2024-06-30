// Create a function printForecast which takes an array of temperatures as an argument.
// It should return a string formatted as the following:
// arr = [17, 19, 23]
// result -> "... 17C in 1 days ... 19C in 2 days ... 23C in 3 days"

function printForecast(arr) {
    const degreesFormatted = arr.map(degree => `... ${degree}°C in ${arr.indexOf(degree) + 1} days`);
    return degreesFormatted.join(" ");
}

const result = printForecast([17, 19, 23]);
console.log(result);