const employees = [
    {name: 'tim', id: 1},
    {name: 'cindy', id: 2},
    {name: 'rob', id: 3},
];

const elements = employees.map((item, index) => {
    return `<div>${item.name} - ${item.id}</div>`;
});

console.log(elements);
