import { multiply } from "./math.js"; //<-- importo singolarmente

console.log("Hello Node.js World");

const risultato = multiply(2, 3); //senza namespace
console.log("L'operazione restituisce: ", risultato);