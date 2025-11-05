// Array Methods.

// 1 Push : add to end.
let cars = ["BMW","Audi","Maruti","XUV"];

cars.push("Toyota");
console.log(cars);

cars.push("Waghnor");
console.log(cars);

// 2 Pop : delete from end & returns it.
console.log(cars.pop());
console.log(cars)

// 3 Unshift : add to start.
cars.unshift("Mustang");

cars.unshift("SupraMk4.....");
console.log(cars);

// 4 Shift : delete from start & returns it.
console.log(cars.shift());
console.log(cars);

cars.shift();
console.log(cars);


let s_followers = [,"Chetan","Ishwar","Yogesh"];
let blocked = s_followers.unshift();
console.log(`Kis ko block kru  mil gya bkra ${blocked}`);