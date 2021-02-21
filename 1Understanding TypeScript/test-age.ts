interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("User is ", usr.name);

    if (usr.age >=16 ) {
        console.log("Allow to drive!");
    } else {
        console.log("Do not allow to drive!");
    }
}

const tom:User = {
    name: "tom",
    age: 17
}

canDrive(tom)