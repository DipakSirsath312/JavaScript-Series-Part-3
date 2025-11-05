// Practice Qs2.
// For the given start of an array,change it to final form using methods.
// start : ['January','July','March','August']
// final : ['July','June','March','August']

let months = ['January','July','March','August'];
console.log(months);

months.shift();
months.shift();
console.log(months);

months.unshift('June');
console.log(months);
months.unshift('July');
console.log(months);