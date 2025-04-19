// Interface
interface Book {
  isbn: number;
  title: string;
  author: string;
  genre?: string;
  // methods
  printAuthor(): void;
  printTitle(message: string): string;
  // arrow functions
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 12345654,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  // methods
  printAuthor() {
    console.log(`${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option
  printSomething: (someValue) => {
    // console.log(this.author); ERROR: this gotcha
    console.log(deepWork.author);
    return someValue;
  },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
};

deepWork.printAuthor();
const result = deepWork.printTitle("is awesome book.");
console.log(result);

console.log(deepWork.printSomething(785));

// Challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const laptop: Computer = {
  id: 1,
  brand: "radom brand",
  ram: 8,
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(4));
console.log(laptop);
