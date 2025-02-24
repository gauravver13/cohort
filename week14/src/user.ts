
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
