const friends = [
    "Michael", "Steven", "Peter"
];


friends.push("Dima"); // add new element to array
console.log(friends);

friends.pop(); // removes last element and returns it
console.log(friends);

friends.shift(); // removes the first element from array and returns it.
console.log(friends);

console.log(friends.indexOf("Peter"));

let log = console.log;

log(friends.indexOf('Bob')); // -1
log(friends.includes("Steven")); // true
