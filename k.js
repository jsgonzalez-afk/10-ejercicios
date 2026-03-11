const saludar = (nombre) => "Hola " + nombre;

const sumar = (a, b) => a + b;

console.log(sumar(5, 10)); // 15

const avisarTerminado = () => console.log("🧺 ¡La lavandería ha terminado!");

avisarTerminado();

const verificarPresupuesto = (gasto, cartera) => {
  if (gasto > cartera) {
    return "No puedes comprarlo ❌";
  } else {
    return "¡Compra realizada! ✅";
  }
};

console.log(verificarPresupuesto(50, 100));

const esMayorDeEdad = (edad) => edad >= 18 ? "Adulto" : "Menor";

console.log(esMayorDeEdad(20)); // "Adulto"

const carrito = [10, 20, 30];
let total = 0;

// Por cada 'precio' del arreglo, sumarlo al total
carrito.forEach(precio => total += precio);

console.log("Total a pagar: $" + total);