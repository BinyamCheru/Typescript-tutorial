import newStudent, { person, sayHello, Student } from "./actions";
import { helloJs } from "./example";

sayHello("Typescript");
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
  name: "bob",
  age: 23,
};

console.log(anotherStudent);

helloJs();
