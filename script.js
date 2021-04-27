//Find 100 Exercise
const findHundred = function (a, b) {
    if (a === 100 || b === 100 || a + b === 100) {
        return "True";
    } else {
        return "False";
    }
}

console.log(findHundred(0, 100));
console.log(findHundred(25, 57));
console.log(findHundred(25, 75));