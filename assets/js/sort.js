const arrayObj = [
  { id: 2, name: "Heena", age: 30 },
  { id: 1, name: "Meena", age: 20 },
  { id: 3, name: "Leena", age: 10 },
];
const len = arrayObj.length;
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    if (arrayObj[i].age > arrayObj[j].age) {
      let temp = arrayObj[i];
      arrayObj[i] = arrayObj[j];
      arrayObj[j] = temp;
    }
  }
}
console.log(arrayObj);
