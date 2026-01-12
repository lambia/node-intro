function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// espongo singola funzione
//module.exports = multiply;

// espongo oggetto con varie funzioni
module.exports = {
	sum,
	subtract,
	multiply,
	divide,
};