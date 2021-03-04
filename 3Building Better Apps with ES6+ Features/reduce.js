const allTruck = [
    2, 5 , 7 , 10
];

const initialCapacity = 0;
const allTonnage = allTruck.reduce((totalCapacity, currentCapacity) => {
    totalCapacity += currentCapacity;

    return totalCapacity;
}, initialCapacity);

console.log(allTonnage);