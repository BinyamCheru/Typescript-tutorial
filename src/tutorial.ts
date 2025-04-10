const price: number[] = [21, 43, 546];
console.log(price);

// be careful "[]" means literally empty array
// let emptyArr[] = []

const mixedArray: (string | boolean)[] = ["something", true, "anything", false];
console.log(mixedArray);

// objects

const car: { brand: string; year: number } = { brand: "toyota", year: 2021 };

console.log(car);

const book = { title: "book", cost: 20 };
const pen = { title: "pen", cost: 5 };
const notebook = { title: "notebook" };

// const items: { title: string; cost?: number }[] = [book, pen, notebook];
const items: { readonly title: string; cost?: number }[] = [
  book,
  pen,
  notebook,
];

// items[0].title = "new book"; this error b/c the obj is readonly

console.log(items);

// Little challenge on obj
const product1 = { title: "Shirt", price: 20 };
const product2 = { title: "Pants" };

const products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: "shoes" });
console.log(products);

// functions

function sayHi(name: string) {
  console.log(`Hello there my name is ${name}`);
}

sayHi("function");

function calculateDiscount(price: number): number | string {
  const hasDiscount = true;
  if (hasDiscount) {
    // return price;
    return "Discount Applied";
  }

  return price * 0.9;
}

console.log(calculateDiscount(200));

// The gotha while using any
function addThree(number: any) {
  // Problem 1: Using `any` disables all type checking
  const anotherNumber: number = 3; // This is properly typed as number
  return number + anotherNumber; // Problem 2: Since `number` is `any`, TypeScript can't validate this operation
}

const result = addThree(2); // Problem 3: The function returns `any` type because of input `any`
const someValue = result; // Problem 4: `someValue` inherits the dangerous `any` type

// runtime error
// someValue.myMethod(); // Problem 5: TypeScript won't catch this - it compiles but will crash at runtime
// because numbers don't have a `myMethod()` property

// simple challenge to practice functions
const names: string[] = ["John", "Jane", "Jim", "Jill"];
function isNameInList(name: string): boolean {
  return names.includes(name);
}

if (isNameInList("Someone")) {
  console.log(`It is in the list.`);
} else {
  console.log(`Not is the list.`);
}
