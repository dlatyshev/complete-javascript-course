'use strict';


const restaurant = {
    name: "Vivaldi",
    location: "Angelo street 28, Firenti, Italy",
    categories: ["italy", "pizza", "vegeterian"],
    startedMenu: ["focaccia", "bruschetta", "garlic bread"],
    mainMenu: ["pizza", "pasta", "risotto"]
}

// Destructuring
const myArray = ["Dmytro", "Latyshev", 35]
const [name, lastName, age] = myArray
console.log(name);
console.log(lastName);
console.log(age);