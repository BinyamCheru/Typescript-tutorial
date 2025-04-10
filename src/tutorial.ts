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
