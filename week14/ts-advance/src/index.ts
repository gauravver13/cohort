interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}


// const age = sumOfAge({ name: 'Alice', age: 20 }, { name: 'Bob', age: 30 });
// console.log(age);           // 50


// interface UpdateProps {
//     name?: string;
//     age?: number;
//     password?: string;
// }


// it sets you to the pick a selective value from an interface
type UpdateProps = Pick<User, 'name' | 'age' | 'password' | 'email'>;



function updateUser(updatedProps: UpdateProps) {
    // hit the db to update the user
}

const displayUserProfile = (user: UpdateProps) => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}


// Partial: 
type UpdatePropsPartial = Partial<UpdateProps>;

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

// this is a serious issue 

type ReadonlyUser = {
    readonly name: string;
    readonly age: number;
    readonly email: string;
    readonly password: string;
}

const user3: ReadonlyUser = {
    name: 'Alice',
    age: 20,
    email: 'dfghbjb',
    password: 'password'
};

// user3.age = 30; // Error




// RECORD AND MAPS:

type UserX = {
    id: string;
    username: string;
}

// type UsersX = {
//     [key: string]: UserX; 
//     // same thing as above::
//     // [key: string]: {
//     //     id: string;
//     //     username: string;
//     // }; 
// }
// cleaner syntax would be: 
type UsersX = Record<string, UserX>;

const user4: UsersX = {
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
}



const user5 = new Map();
const user6 = new Map<string, User>();

user5.set('ras@we1', {
    id: 'ras@we1',
    username: 'Alice',
});

user5.set('gas', {
    id: 'gas',
    username: 'Bob',
});


// user4['ras@we1'].username;

// EXCLUDE::
type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log('Handling Event::', event);
}

handleEvent('click');
// handleEvent('scroll'); // Error---cool

