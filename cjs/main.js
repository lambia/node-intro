// Importo una singola funzione, valido se esporto singola funzione (v. math.js)
//const multiply = require("./math.js");

// const { sum, multiply } = require("./math.js"); // <-- uso destructuring
const math = require("./math.js"); // <-- uso name space

console.log("Hello Node.js World");

// const risultato = multiply(2, 3); //senza namespace
const risultato = math.multiply(2, 3); //con namespace
console.log("L'operazione restituisce: ", risultato);