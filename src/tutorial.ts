// // Interface
// interface Book {
//   isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // methods
//   printAuthor(): void;
//   printTitle(message: string): string;
//   // arrow functions
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 12345654,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",
//   // methods
//   printAuthor() {
//     console.log(`${this.author}`);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
//   // first option
//   // printSomething: function (someValue) {
//   //   return someValue;
//   // },
//   // second option
//   printSomething: (someValue) => {
//     // console.log(this.author); ERROR: this gotcha
//     console.log(deepWork.author);
//     return someValue;
//   },
//   // third option
//   // printSomething(someValue) {
//   //   return someValue;
//   // },
// };

// deepWork.printAuthor();
// const result = deepWork.printTitle("is awesome book.");
// console.log(result);

// console.log(deepWork.printSomething(785));

// // Challenge
// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(increase: number): number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: "radom brand",
//   ram: 8,
//   upgradeRam(amount: number) {
//     this.ram += amount;
//     return this.ram;
//   },
// };

// laptop.storage = 256;
// console.log(laptop.upgradeRam(4));
// console.log(laptop);

//  Interface - Merging, Extend, TypeGuard

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// // Merging the interface
// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "John",
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// console.log(person.getDetails());

// // Extending an interface it is the same concept as inheritance
// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: "Jane",
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// console.log(employee.getDetails());

// // Interface with multiple inheritance
// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: "Bob",
//   age: 41,
//   dogName: "Rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log("Managing people...");
//   },
// };

// console.log(manager.getDetails());
// console.log(manager.getDogDetails());
// manager.managePeople();

// Challenge
interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks..."),
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

// type predicate in TypeScript

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}