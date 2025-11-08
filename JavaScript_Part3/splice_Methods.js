// Array Methods
// splice : removes / replces / add element in place 
// splice(start, deleteCount, itemO, itemN)

let col = ["red","blue","pink","purple","white","orange"];
console.log(col.splice(4)); // ['white','orange']
console.log(col); // ['red','blue','pink','purple']

console.log(col.splice(0, 1)); // 'red'
console.log(col); // ['blue','pink','purple']

console.log(col.splice(0,1, "voilete", "skyblue")); // blue
console.log(col); // ['voilete','skyblue','pink','purple']

let cars = ["maruti","suzuki","bmw","audi","XUV"];
cars.splice(4);
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
cars.push("toyota");
cars.push("ferrari");
console.log(cars);

cars.splice(1,2);
console.log(cars);
cars.splice(0,0,"Doze","Mustang");
console.log(cars);
cars.splice(1,0,"supraMK4");
console.log(cars);
 
cars.splice(3,1);
console.log(cars);