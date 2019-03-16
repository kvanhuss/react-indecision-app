//Can reassign and redefine var variables. Redefining can cause issues.
var nameVar = 'Kate';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//Can reassign, but not redefine let variables
let nameLet = 'Jan';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//Can't reassign or redefine const variables
const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Var are function-scoped
function getPetName(){
    var petName = 'Dixie';
    return petName;
}
/* Doesn't work because function-scoped
getPetName();
console.log(petName);
*/

// Let and const variables are block-scoped which includes function-scoped
var fullName = 'Kate Van Huss';



/*
Second console.log(firstName) works with var, but not let or const because it's
outside of block that variable was defined in
*/
if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

/* By defining let firstName outside of block second console.log(firstName) now works
let firstName;

 if (fullName){
     firstName = fullName.split(' ')[0];
     console.log(firstName);
 }

 */

console.log(firstName);

//Use const first, let if you need to, and var never


