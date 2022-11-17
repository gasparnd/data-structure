const MyArray = require("./src/Arrays");
const HashTable = require("./src/HashTable");
const MySingleLinkedList = require("./src/LinkedLists");
const MyDoublyLinkedList = require("./src/MyDoublyLinkedLists");
const Stack = require("./src/Stacks");
const Queue = require("./src/Queues");
const BinarySearchTree = require("./src/BinarySearchTree");
const Graph = require("./src/Graph");

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

// DOUBLY LINKED LIST -> MyDoublyLinkedList

const myDoublyLinkedList = new MyDoublyLinkedList(1);

myDoublyLinkedList.append("Gaspar");
console.log("\n");
myDoublyLinkedList.append("Nicolas");

// STACK -> Stack

const myStack = new Stack();

myStack.push("Gaspar");
myStack.push("Nicolas");
myStack.push("Yess");
myStack.peek();
myStack.pop();

// QUEUE -> Queue

const myQueue = new Queue();

myQueue.enqueue("Gaspar");
myQueue.enqueue("Nicolas");
myQueue.enqueue("Yess");
myQueue.dequeue();
myQueue.peek();

// BINARY SEARCH TREE -> BinarySearchTree

const tree = new BinarySearchTree();

tree.insert(10);

tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(17);
tree.insert(8);
tree.insert(170);

tree.search(17);

// GRAPH = Graph

const myGraph = new Graph();

myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);

myGraph.addEdge(1, 6);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);

myGraph.addEdge(3, 5);
myGraph.addEdge(3, 6);
myGraph.addEdge(5, 4);
myGraph.addEdge(4, 8);

myGraph.getInstance();
