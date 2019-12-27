class HashTable {
  getItem = key => {
    return "";
  };

  setItem = (key, value) => {};
}

const myTable = new HashTable();

myTable.setItem("firstName", "Bob");
myTable.getItem("firstName");

console.log(myTable.firstName);
console.log(myTable);
