
type UserType = {
    firstName: string,
    lastName: string,
    age: number
}

// let greetings = (user: {
//     name: string,
//     age: number
// }) => {
//     console.log(`Hello ${user.name}`);
// }

let greetings = (user: UserType) => {
    console.log(`Hello ${user.firstName}`);
}


let personOne = {
    firstName: "Gaurav",
    lastName: "Singh",
    age: 21
}

// greetings({
//     firstName: "Gaurav",
//     age: 21
// });


greetings(personOne);


interface Manager {
    name: string,
    age: number,
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee;

let t: TeamLead = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
} 

interface Address {
    city: string,
    state: string,
    pincode: number
}


interface User {
    name: string,
    age: number,
    // address? : {
    //     city: string,
    //     state: string,
    //     pincode: number
    // }
    address?: Address
}

interface Office {
    address?: Address
}


let testUser: User = {
    name: "Gaurav",
    age: 21,
    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110085
    }
}

let user2: User = {
    name: "Harkirat",
    age: 26
}

function isLegal(testUser: User): boolean {
    return testUser.age >= 18;
}

const ans = isLegal(testUser);

const ans2 = isLegal(user2);

console.log('Optional user:', ans2);

if(ans) {
    console.log("Legal");
} else {
    console.log("Illegal");
}


