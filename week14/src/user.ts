
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
abstract class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string;
    hello() {
        console.log("Hi there..!");
    }
}

class Employee extends User {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`;
    }
}


// difference b/w types and interfaces

// type User = {}
// interface User {}

// intersection and union can be implemnted in types but not in interfaces

type EmployeeType = {
    name: string,
    age: number,
}

type ManagerType = {
    name: string,
    age: number,
    department: string
}

type TeamLeadType = EmployeeType & ManagerType;

let m: ManagerType = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
}

let t: TeamLeadType = {
    name: "Gaurav",
    age: 21,
    department: "Software Developer"
}


type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    ip: string;
}

type AllUser = GoodUser | BadUser;

const user3: AllUser = {
    name: "Gaurav",
    ip: "xcvb%^&8jnm",
}


interface Admin {
    name: string;
    permissions: string;
}

interface UserExist {
    name: string;
    age: number;
}

type UserExistorAdmin = Admin | UserExist;

function greet(user: UserExistorAdmin) {
    console.log(`Hello ${user.name}`);
}


const user4: UserExistorAdmin = {
    name: "Gaurav",
    age: 21
}

greet(user4);