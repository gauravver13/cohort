"use strict";
// let greetings = (user: {
//     name: string,
//     age: number
// }) => {
//     console.log(`Hello ${user.name}`);
// }
let greetings = (user) => {
    console.log(`Hello ${user.firstName}`);
};
let personOne = {
    firstName: "Gaurav",
    lastName: "Singh",
    age: 21
};
// greetings({
//     firstName: "Gaurav",
//     age: 21
// });
greetings(personOne);
