const MyArray = require("./src/Arrays");
const HashTable = require("./src/HashTable");
const MySingleLinkedList = require("./src/LinkedLists");

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

// HASH TABLE -> HashTable

const myHashTable = new HashTable(50);

myHashTable.set("Name", "Gaspar");
myHashTable.set("Gaspar", 2000);
myHashTable.set("Gaston", 2010);

myHashTable.getAllKeys();
myHashTable.delete("Gaston");
myHashTable.get("Gaston");

// LINKED LIST -> MySingleLinkedList

const myLinkedList = new MySingleLinkedList(1);

myLinkedList.append("Gaspar");
console.log("\n");
myLinkedList.prepend("Hellooo");
console.log("\n");
myLinkedList.append("nicolas");
console.log("\n");
myLinkedList.insert(2, "cacho");
console.log("\n");
myLinkedList.remove(2);
