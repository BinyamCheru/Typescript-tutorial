// Type assertion is a way to tell the TypeScript compiler "trust me, I know what I'm doing"

const someValue: any = "This is a string";

const strLength = (someValue as string).length;
console.log(strLength);

type Bird = { name: string };

// Assume we have a JSON string from an API or local file
const birdString = '{"name": "Eagle"}';
const dogString = '{"breed": "Poodle"}';

// Parse the JSON string into an object
const birdObject = JSON.parse(birdString);
const dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
const bird = birdObject as Bird;
const dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";
const user: User = { name: "john", status: statusValue as Status };

// Type - 'unknown'

let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = "Hello World"; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

if (typeof unknownValue === "number") {
  console.log(unknownValue.toFixed(2));
}

// we use the type unknown in try catch
function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("Something went wrong");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
}

// Type - "never"
// let someValue: never = 0; you can't assign any value to a variable of type never.

type Theme = "light" | "dark";

function checkTheme(theme: Theme) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    case Color.Green:
      return "Green";
    default:
      // at build time
      const unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
console.log(getColorName(Color.Green)); // Green