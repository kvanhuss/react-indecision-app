// arguments object - no longer bound with arrow functions

const add = function(a, b){
    console.log(arguments);
    return a + b;  
};

console.log(add(55, 1, 1001));


// this keyword - no longer bound

const user = {
    name: 'Kate',
    cities:['Charlotte', 'Athens', 'Bettendorf'],
    //printPlacesLived must be an es5 function vs. es6 because this.cities is undefined if using an arrow function
    printPlacesLived() {
        //this.name does not work inside the function
        /*
        this.cities.forEach(function(city) {
            console.log(this.name + ' has lived in ' + city);
        });
        */

        //this.name does work inside arrow function because it uses it's parent this value
        /*
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        */

        //Map allows you to transform each item
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());


//Challenge

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());