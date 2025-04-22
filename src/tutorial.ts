// Tuples
const person: [string, number] = ["john", 25];
console.log(person[0]); // Outputs: john
console.log(person[1]); // Outputs: 25

// optional parameter
const john: [string, number?] = ["john"];

function getPerson(): [string, number] {
  return ["john", 25];
}

const randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]);

const date: readonly [number, number, number] = [14, 5, 2017];
// if the array was not a readonly you can push to the array
// date.push(900)
// date.push(900)
// date.push(900)
console.log(date);

// Enums
// enum ServerResponseStatus {
//   Success,
//   Error,
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["first item", "second item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// Reverse mapping is a feature of numeric enums that can be useful but also surprising
// Reverse mapping doesn't work on String Values
// enum ServerResponseStatus {
//   Success = "Success",
//   Error = "Error",
// }

// Object.values(ServerResponseStatus).forEach((value) => console.log(value));

// Reverse mapping on Numeric Values
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

// key difference between numeric enums and string enums in TypeScript regarding type safety and value assignment.

// enum NumericEnum {
//   Member = 1,
// }

// enum StringEnum {
//   Member = 'Value',
// }

// let numericEnumValue: NumericEnum = 1; // This is allowed
// console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = 'Value'; // This is not allowed

// CHALLENGE
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

// Define a function named createUser
function createUser(user: User): User {
  return user;
}

// Call the createUser function
const user: User = createUser({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"],
});

console.log(user);