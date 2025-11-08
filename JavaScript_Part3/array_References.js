// Array References.

let arr1 = [1];
let arr2 = [1];
console.log(arr1 == arr2);
console.log(arr1 === arr2);

let arr = ["a", "b", "c"];
arrCopy = arr;

console.log(arrCopy);
console.log(arr == arrCopy);
console.log(arr === arrCopy);

arrCopy.pop("c");
console.log(arrCopy);
console.log(arr);
console.log(arr === arrCopy);