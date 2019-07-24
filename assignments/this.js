

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Simple function call   -  uses 'this' as a global object (non-strict mode) and undefined in (strict mode).
* 2. Implicit Binding       - 'this' points to the object to the left of the peroid when the function is called.
* 3. Explicit Binding       -  we can have javascript use 'this' to point to a value using call(), apply(), or bind().
* 4. New Binding            -  uses the 'new' keyword to construct a new object and the 'this' keyword points to it.
  5. Arrow Functions        -  'this' keeps the same value as its parent scope.
  5. continued...
  Example arrow function
  function Ghost(boo) {
  this.boo = boo;
  this.booUpperCase = () => {
    return this.boo.toUpperCase();
  }
}
const myGhost = new Ghost('boo!!');
console.log(myGhost.boo); // boo!!
console.log(myGhost.booUpperCase()); // BOO!!
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function adam(){
    console.log(this.dude)
}
const dude = "yerd";
adam();
console.log(this);

//

// Principle 2
// code example for Implicit Binding

function isPerson(){
    console.log(`${this.name} says wattup yall`);
}
let person = {
    name: "Joe",
    lastName: "Rodrigues",
    }
isPerson.call(person);

//

// Principle 3
// code example for New Binding

function Cat(name, species, howCool){
    this.name = name;
}
let myCat = new Cat('My cats name is Kai and he is super awesome!');
console.log(myCat.name);

//

// Principle 4
// code example for Explicit Binding

function food(favorite, dog){
    this.myFavoriteFood = favorite;
    this.favoriteDog = dog;
}
let myFood = new food('i love food', 'says Wolf Dog');
console.log(myFood.myFavoriteFood, myFood.favoriteDog);

//