const HashTable = require("../HashTable");

describe("Hash Table Class", () => {
  test("Should add an item", () => {
    const myHashTable = new HashTable(50);
    const newItem = myHashTable.set("Gaspar", 2000);

    let exist = false;
    newItem.forEach((bucket) =>
      bucket.forEach((el) => {
        if (el[0] === "Gaspar" && el[1] === 2000) exist = true;
      })
    );

    expect(exist).toBeTruthy();
  });

  test("Should return one item by key", () => {
    const myHashTable = new HashTable(50);
    myHashTable.set("Gaston", 2010);

    expect(myHashTable.get("Gaston")).toEqual(2010);
  });

  test("Should return all keys", () => {
    const myHashTable = new HashTable(50);
    myHashTable.set("Gaspar", 2000);
    myHashTable.set("Gaston", 2010);

    const item = ["Gaston", "Gaspar"];

    expect(myHashTable.getAllKeys()).toEqual(item);
  });

  test("Should delete one item by key", () => {
    const myHashTable = new HashTable(50);
    myHashTable.set("Gaston", 2010);

    expect(myHashTable.delete("Gaston")).toBeUndefined();
  });
});
