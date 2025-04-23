// Type Guarding
// METHOD I
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue(value);

// METHOD II
type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

function makeSound(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// METHOD III
function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string
    // because `null` and `undefined` are falsy values.
    console.log(str.length);
  } else {
    console.log("No string provided");
  }
}

printLength("Hello"); // Outputs: 5
printLength(null); // Outputs: No string provided
printLength(undefined); // Outputs: No string provided

// METHOD IV
try {
  // throw "String error";
  throw new Error("This is an error.");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  }
  console.log(error);
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const strDate = checkInput("2020-05-05");
console.log(year);
console.log(strDate);