dima = {
    firstName: "Dima",
    lastName: "Latyshev",
    birthYear: 1989,
    hobbies: ["programming", "gaming"],
    languages: ["english", "ukrainian", "russian"],
    hasDriversLicense: true,
    getAge: function() {
        if (this.age) return this.age;
        console.log("Complex age computation :)")
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} ${this.lastName}, ${this.getAge()} years old, with ${this.hobbies} hibbies. Can speak ${this.languages} languages.`;
    }

    // function myFunction() {
    //     return "Something!";
    // }  Will not work!
}

console.log(dima.getAge());
console.log(dima.getAge());

console.log(dima.getSummary());


