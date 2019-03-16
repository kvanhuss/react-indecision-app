// Import default and named exports
/*
import  subtract, { square, add } from './playground/utils.js';
import isSenior, { isAdult, canDrink } from './playground/person';

console.log('app.js is running');
console.log(square(4));
console.log(add(2, 4));
console.log(subtract(5, 2));

console.log(isAdult(3));
console.log(canDrink(22));
console.log(isSenior(64));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


/*
class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }

    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

 const oldSyntax = new OldSyntax();
 //Breaks this binding
 const getGreeting = oldSyntax.getGreeting;
 console.log(oldSyntax.getGreeting());


 class NewSyntax {
 name = 'Jen';
 getGreeting = () => {
 return `Hi. My name is ${this.name}.`;
 }
 }

 const newSyntax = new NewSyntax();
 const newGetGreeting = newSyntax.getGreeting;
 console.log(newGetGreeting());
 */