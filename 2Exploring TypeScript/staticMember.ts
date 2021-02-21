// class ClassA {
//     static typeName: string;

//     constructor() {}

//     static getFullName() {
//         return "ClassA " + ClassA.typeName;
//     }
// }

// const a = new ClassA();

// console.log(ClassA.typeName);

class Runner {
    static lastRunTypeName: string;

    constructor(private typeName: string) {}

    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}

const a = new Runner("giga");
const b = new Runner("Gio");

a.run();
b.run();

console.log(Runner.lastRunTypeName);
