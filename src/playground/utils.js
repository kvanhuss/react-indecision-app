console.log('utils.js is running');

// Two types of exports - default export and named exports
// Can only be 1 default export

// 3 ways

// Version 1

const square = (x) => x * x;
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;

export { square, add, subtract as default }

// Version 2

/*
export const square = (x) => x * x;
export const add = (a,b) => a + b;
const subtract = (a,b) => a - b;

export default subtract;
*/


// Version 3

/*
 export const square = (x) => x * x;
 export const add = (a,b) => a + b;

 export default (a,b) => a - b;
 */
