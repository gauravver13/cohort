"use strict";
// type UserType = {
//     firstName: string,
//     lastName: string,
//     age: number
// }
// // let greetings = (user: {
// //     name: string,
// //     age: number
// // }) => {
// //     console.log(`Hello ${user.name}`);
// // }
// let greetings = (user: UserType) => {
//     console.log(`Hello ${user.firstName}`);
// }
// let personOne = {
//     firstName: "Gaurav",
//     lastName: "Singh",
//     age: 21
// }
// // greetings({
// //     firstName: "Gaurav",
// //     age: 21
// // });
// greetings(personOne);
// interface Manager {
//     name: string,
//     age: number,
// }
// interface Employee {
//     name: string,
//     department: string
// }
// type TeamLead = Manager & Employee;
// // let t: TeamLead = {
// //     name: "Gaurav",
// //     age: 21,
// //     department: "Software Developer"
// // } 
// interface Address {
//     city: string,
//     state: string,
//     pincode: number
// }
// interface User {
//     name: string,
//     age: number,
//     // address? : {
//     //     city: string,
//     //     state: string,
//     //     pincode: number
//     // }
//     address?: Address
// }
// interface Office {
//     address?: Address
// }
// let testUser: User = {
//     name: "Gaurav",
//     age: 21,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pincode: 110085
//     }
// }
// let user2: User = {
//     name: "Harkirat",
//     age: 26
// }
// function isLegal(testUser: User): boolean {
//     return testUser.age >= 18;
// }
// const ans = isLegal(testUser);
// const ans2 = isLegal(user2);
// console.log('Optional user:', ans2);
// if(ans) {
//     console.log("Legal");
// } else {
//     console.log("Illegal");
// }
// interface People {
//     name: string,
//     age: number,
//     isLegal(): boolean
// }
// class Manager implements People {
//     constructor(
//         public name: string,
//         public age: number,
//     ) {}
//     isLegal(): boolean {
//         return this.age >= 18;
//     }
// }
// let m = new Manager("Gaurav", 21);
// console.log(m);
// class Shape {
//     area() {
//         console.log("Area of shape");
//     }
// }
// class Rectangle extends Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// let r = new Rectangle(10, 20);
// console.log(r);
// Interview questions:
// Types vs interfaces
// Abstract classes vs interfaces
// if a class can implement an interface, then why do we need abstract classes?
// becasuse we can't implement default function in interfaces but we can do that in abstract classes
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("Hi there..!");
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
let m = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
};
let t = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
};
const user3 = {
    name: "Gaurav",
    ip: "xcvb%^&8jnm",
};
function greet(user) {
    console.log(`Hello ${user.name}`);
}
