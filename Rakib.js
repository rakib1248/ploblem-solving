// problem-solving 1
//Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

// problem-solving 2
//On one single line, declare three variables with the following names and values:

//So What Will Be The 1st Variable Name, Then 2nd Variable Values &
//3rd Variable Name And Values Both!

let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both

// problem-solving 3
//Use the correct assignment operator that will
//result in x being 50 (same as x = x * y).

x = 10;
y = 5;
x *= y; // what will be the value of x ?

// problem-solving 4
//Use comments to describe the correct data type of the following variables:

let length = 16; // number data type
let lastName = "Johnson"; // string data type

const x = {
  firstName: "John",
  lastName: "Doe",
}; // objact data type ?

// problem-solving 5
//Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
}
//Declare function Name myFunction

// call the function
myFunction();
//output alert msg : Hello World!

// problem-solving 6

// Create an object called person with name = John, age = 50, Then,
// access the object to alert("John is 50").

let person = {
  name: "John",
  age: 50,
};
alert(`${person.name} is ${person.age}`);

// problem-solving 7

// The <button> element should do something when someone clicks on it. Try to fix it!

// <button onclick="myFunction()">Click me.</button>

// problem-solving 8

// Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";

// problem-solving 9

let randomNumber = Math.random();

let largestNumber = Math.max(10, 20);

let squareRoot = Math.sqrt(9);

// problem-solving 10
// Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;

alert(true); // ?

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 15;

let result = age - 18 ? "Too young" : "Old enough";
alert(result);
