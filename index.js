// ¡Bienvenido! Tu entorno JavaScript ya está listo.
// Ejecuta este archivo con: node index.js

function greet(name) {
  return `¡Hola, ${name}! Tu entorno JavaScript funciona perfectamente. 🟨`;
}

console.log(greet("mundo"));

// Prueba rápida con arrays y arrow functions
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n ** 2);
console.log("Cuadrados:", squares);

// Prueba con async/await
async function fetchExample() {
  console.log("Async/await también funciona ✅");
  return Promise.resolve("¡Todo listo!");
}

fetchExample().then(console.log);
