const calcAge = (birthYear, currentYear) => currentYear - birthYear;

console.log(calcAge(1989, 2024));

const yearsUntilRetirement = (birthYear, currentYear) => {
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1989, 2024));