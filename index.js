const MyArray = require("./src/Arrays");

// ARRAY -> MyArray

const myArray = new MyArray();

myArray.push("Gaspar");
myArray.get(1);

myArray.push("Ana");
myArray.push("Marcos");
myArray.push("Valentina");
myArray.push("Carlos");
myArray.unshift("Nicolas");

myArray.shift();

console.log(myArray.length);

myArray.pop();

myArray.delete(2);
