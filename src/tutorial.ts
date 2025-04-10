// Type Alias => make it capitalize it is a convention
type User = { id: number; name: string; isActive: boolean };
const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello";
value = 89;

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

// challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(`${staff.name} is an employee in the ${staff.department}`);
  }
}

const alice: Employee = { id: 1, name: "Alice", department: "Sales" };
const steve: Employee = { id: 1, name: "Steve", department: "HR" };
const bob: Manager = { id: 2, name: "Bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

//  Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 2,
  name: "How to Cook a Dragon",
  price: 15,
};

const book2: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};

const discountedBook: DiscountedBook /*& { discount: number }*/ = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};
