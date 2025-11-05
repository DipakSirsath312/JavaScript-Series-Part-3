// Method Chaining 
// Using one method after another.Order of execution will be left to right.

let msg = "   Hello   ";
// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);