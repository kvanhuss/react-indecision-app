//es5 Function. Functions can be named
function square(x) {
    return x * x;
};

console.log(square(8));

//es6 Arrow Function. Functions are always anonymous

/*
const squareArrow = (x) => {
  return x * x;
};
*/

//If only returns a single expression use the below syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

//Challenge

/*
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
*/

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));