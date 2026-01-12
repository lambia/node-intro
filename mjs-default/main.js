import math from "./math.js"; //<-- importo default, uso namespace

console.log("Hello Node.js World");

const risultato = math.multiply(2, 3); //con namespace
console.log("L'operazione restituisce: ", risultato);