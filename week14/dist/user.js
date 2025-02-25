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
let t = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
};
let testUser = {
    name: "Gaurav",
    age: 21,
    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110085
    }
};
let user2 = {
    name: "Harkirat",
    age: 26
};
function isLegal(testUser) {
    return testUser.age >= 18;
}
const ans = isLegal(testUser);
const ans2 = isLegal(user2);
console.log('Optional user:', ans2);
if (ans) {
    console.log("Legal");
}
else {
    console.log("Illegal");
}
