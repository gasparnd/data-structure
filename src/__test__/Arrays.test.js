const MyArray = require("../Arrays");

describe("MyArray Class", () => {
  test("Should add item", () => {
    const item = { 0: "Gaspar" };

    const myArray = new MyArray();

    expect(myArray.push("Gaspar")).toEqual(item);
  });

  test("Should get item by index", () => {
    const item = "Gaspar";

    const myArray = new MyArray();
    myArray.push("Gaspar");

    expect(myArray.get(0)).toEqual(item);
  });

  test("Should delete last item", () => {
    const myArray = new MyArray();
    myArray.push("Gaspar");
    myArray.push("Nick");

    expect(myArray.pop()).toEqual("Nick");
  });

  test("Should delete specific index item", () => {
    const myArray = new MyArray();
    myArray.push("Gaspar");
    myArray.push("Nick");
    myArray.push("Ana");

    expect(myArray.delete(1)).toEqual("Nick");
  });

  test("Should add item in the beginning", () => {
    const items = { 0: "Pep", 1: "Gaspar", 2: "Nick" };

    const myArray = new MyArray();
    myArray.push("Gaspar");
    myArray.push("Nick");

    expect(myArray.unshift("Pep")).toEqual(items);
  });

  test("Should delete first item", () => {
    const myArray = new MyArray();
    myArray.push("Pep");
    myArray.push("Gaspar");
    myArray.push("Nick");

    expect(myArray.shift()).toEqual("Pep");
  });
});
