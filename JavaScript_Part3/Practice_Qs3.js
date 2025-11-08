// Practice Qs.

// 1. For the given start state of an array,change it to final form using splice.
// start: ["january","july","march","august"]
// final: ["july","june","march","august"]

let month = ["january", "july", "march", "august"];
month.splice(0,2,"july","june");
console.log(month);

// 2. Return the index of the "javascript" from the given array, if it was reversed.

let lang = ["c", "c++", "java", "python", "javaScript", "C#", "sql"];
console.log(lang.reverse().indexOf("javaScript"));
console.log(lang);