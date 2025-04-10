// Using Objects as Function Parameters
function createEmployee({ num }: { num: number }): {
  num: number;
  isEven: boolean;
} {
  return { num, isEven: num % 2 === 0 };
}

const first = createEmployee({ num: 5 });
const second = createEmployee({ num: 10 });

console.log(first, second);

// This function expects a parameter with EXACTLY `id` and `name` properties
// But TypeScript allows EXTRA properties in some cases (the "gotcha")
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

// CASE 1: No error (seems wrong)
const newStudent = {
  id: 1,
  name: "Someone",
  email: "bob@gmail.com", // Why no error? Because of TypeScript's "freshness" concept
  // When assigning to a variable first, TS only checks for REQUIRED properties
  // Extra properties are allowed in this case
};

createStudent(newStudent); // This works fine (but email is silently ignored)

// CASE 2: Error (what you might expect)
createStudent({
  id: 5,
  name: "bob",
  //  email: "bob@gmail.com" // ERROR: Object literal may only specify known properties
  // When passing directly, TS uses "excess property checking"
  // This is the safety check you expected
});

// Little challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10)); // Output: 100
console.log(processData('Hello')); // Output: HELLO
console.log(processData('Hello', { reverse: true })); // Output: OLLEH