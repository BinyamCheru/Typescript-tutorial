const age: number = 25;
console.log(age);

const name = "Someone";
console.log(name);

// Little challenge
let greeting: string = "Hello, Typescript";
greeting = greeting.toUpperCase();

console.log(greeting);

let isAdult: boolean = age >= 18;
isAdult = !isAdult;

console.log(isAdult);

// Union type
let tax: number | string = 10;
tax = 10;
tax = "this is string";

console.log(tax);

// literal value type
let requestStatus: "pending" | "success" | "error";
requestStatus = "error";
requestStatus = "success";
// requestStatus = "random";
console.log(requestStatus);

// the type any
let anyType;
anyType = 10;
anyType = "This is a string";
console.log(anyType);

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (const book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
