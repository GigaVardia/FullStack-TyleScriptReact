function getEmployee (id) {
    return {
        name: 'john',
        age: 35,
        address: '123 St',
        country: 'US'
    }
}

const {name: fullName, age} = getEmployee(22);
console.log('employee', fullName, age);

function getEmployeeWorkInfo (id) {
    return [
        id, 
        'Office st',
        'France'
    ]
}

const [id, officeAddress] = getEmployeeWorkInfo(25);
console.log('employee', id, officeAddress);