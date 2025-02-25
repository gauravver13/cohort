"use strict";
// JAVASCRIPT
// let x = 1;
// console.log(x);
let x = 1; // type-inferencing
// x = "harkirat boss";         // error
console.log(x);
let person = "Gaurav";
let user = `Hello ${person}`;
console.log('USER:', user);
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet("Gaurav");
greet("Harkirat");
// greet(1);      // error
greet("1");
let y = 1;
y = true;
y = "harkirat";
y = [1, 2, 3, 4, 5];
// number, string, boolean, null, undefined, any, void, never, object, array, tuple, enum, union, literal, ----> type-assertion
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// function isLegal(age: number): boolean {
//     return age >= 18;
// }
// console.log(isLegal(18));
// console.log(isLegal(17));
function delayedCall(callbackFn) {
    setTimeout(callbackFn, 2000);
}
console.log("Before delayed call");
delayedCall(() => {
    console.log("Inside delayed call");
});
console.log("After delayed call before 2 sec");
let hello = () => {
    console.log("Hello World");
};
hello();
// const world = (a, b) => {
//     console.log("World");
// } can run without typescript because implicit any is allowed in javascript
// all there here is primitive types
function isEven(num) {
    return num % 2 === 0;
}
const chkEven = isEven(10);
console.log(chkEven);
