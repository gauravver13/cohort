"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
function updateUser(updatedProps) {
    // hit the db to update the user
}
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
};
// updateUser({ 
//     name: 'Alice' 
// });
//
// Readonly
// type ReadonlyUser = Readonly<User>;
const a = [1, 2, 3, 4, 5];
a[2] = 10;
const obj = {
    name: 'Alice',
    age: 20,
    email: 'dfghbjb',
};
obj.age = 30;
const user3 = {
    name: 'Alice',
    age: 20,
    email: 'dfghbjb',
    password: 'password'
};
const user4 = {
    "ras@we1": {
        id: 'ras@we1',
        username: 'Alice',
    },
    "gas@we2": {
        id: 'shy@we2',
        username: 'Bob',
    },
    "has@we3": {
        id: 'has@we3',
        username: 'Charlie',
    },
};
const user5 = new Map();
user5.set('ras@we1', {
    id: 'ras@we1',
    username: 'Alice',
});
user5.set('gas', {
    id: 'gas',
    username: 'Bob',
});
// user4['ras@we1'].username;
