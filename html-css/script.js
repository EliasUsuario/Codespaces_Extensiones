// Script de ejemplo — opcional, puedes borrarlo

console.log("¡Tu entorno HTML, CSS y JavaScript funciona! 🎨");

// Ejemplo: cambiar el título al hacer clic
document.querySelector("h1").addEventListener("click", function () {
  this.style.color = this.style.color === "tomato" ? "" : "tomato";
  console.log("¡Clic! El color cambió.");
});
