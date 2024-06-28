const friends = [
    "Michael", "Steven", "Peter"
];

console.log(friends);

const years = new Array(1989, 1991, 2006, 2020); //another way to create an array

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = "Martin";
console.log(friends);


const dima = ["Dima", 35, ["programming", "gaming"]];

const birthYears = [1991, 1989, 1993, 2000, 2017];

const ages = birthYears.map(year => 2024 - year);
console.log(ages);