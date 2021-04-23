//Add 7 function
const addSeven = function (number) {
  return number + 7;
};

console.log(addSeven(2));
//Multiply 7 function
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3));
//Capitalize function
const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
console.log(capitalize("Monikka"));
//Last letter function
const lastLetter = function (f) {
  return f.charAt(f.length - 1);
};
console.log(lastLetter("abcdefg"));
