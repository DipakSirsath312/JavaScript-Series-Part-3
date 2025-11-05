// Practice Qs.
// For the Give String.

// Qs.1
// Trim it & convert it to uppercase.
// let msg = "help!   ";
let msg = "help!   ";
console.log(msg.trim().toUpperCase());

// Qs.2
// For The String ->  let name = "ApnaCollege", predict the output for following :
let n = "MadaraUchiha";
console.log(n.slice(6,n.length))
console.log(n.indexOf("U"));
console.log(n.replace("Madara","Shisui"));

// Qs.3
// Separate the "Madara" part in above string & replace "Madara" with "itachi" in it.  
console.log(n.slice(0,6).replace("Madara","itachi"));