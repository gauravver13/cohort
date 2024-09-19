
function greet(name, age, gender) {
    let ans = `Hi Mr. ${name}, your age is ${age}`
    return ans;
}

let user = {
    name: "Gaurav",
    age: 23,
    gender: "Male"
}

const result = greet(user.name, user.age, user.gender);

console.log(result);

let users = [
    {
        name: "Gaurav",
        age: 23,
        gender: "Male"
    },
    {
        name: "Daena",
        age: 16,
        gender: "Female"
    },
    {
        name: "Harkirat",
        age: 21,
        gender: "Male"
    },
    {
        name: "Rishi",
        age: 20,
        gender: "Male"
    },
    {
        name: "Sam",
        age: 25,
        gender: "Male"
    },
    {
        name: "Joe",
        age: 12,
        gender: "Male"
    },
]


function input(user) {
    
    let res = user.filter((i) => i.age > 18)
    return res;
}

const res = input(users)
console.log(res);
