function logger() {
    console.log("My name is Dima.");
}

// calling, running or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

let appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);
