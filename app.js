// alert("Esto es una alerta");

// console.log("Probando probando probando");

// let edad = prompt("edad?");
// console.log("Tu edad es ", edad);
// document.write('Tu "edad" es ', edad);

let string = "Hola estoy probando un string y sus propiedades";

let longitud = string.length;
console.log("Length de string es ", longitud);

console.log(string.toUpperCase());

console.log(string.toLocaleLowerCase());

console.log(string.includes("marcos"));

console.log(string.charAt(2));

console.log(string.substring(0, 4));

console.log(string.substring(10).replace(" ", "+"));

let days = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

console.log(days[3]);

// FUNCIONES CALLBACK
const edades = [22, 33, 55, 20, 16];

// function mayoresDe25(edad) {
//   if (edad >= 25) {
//     return edad;
//   }
// }

// const olderThan25 = edades.filter(mayoresDe25);
const olderThan25 = edades.filter((edad) => edad >= 25); //devuelve array que cumple con la condicion y si ninguno coincude te devuelve un array vacio

const mayores25 = edades.find((edad) => edad >= 25); // devuelve el primer y unico elemento con el q cumple la condicion

//forEach no devuelve nada
// edades.forEach((edad) => {
//   if (edad > 25) console.log("Es mayor q 25");
//   else console.log("Es menor que 25");
// });

//map devuelve array
// const sumarAños = edades.map((edad) => edad + 10);

// Carrito
let productos = [
  "notebook",
  "tv",
  "parlante",
  "proyector",
  "microfono",
  "mouse",
  "teclado",
  "multiuncion",
];
let carrito = [];

const addProduct = () => {
  const productToAdd = prompt(
    "que producto agregas al carrito?"
  ).toLocaleLowerCase();
  if (productos.includes(productToAdd)) {
    carrito.push(productToAdd);
  } else {
    alert("no tenemos ese producto");
  }
};

const getCarrito = () => {
  alert("los elementos de su carrito son \n- " + carrito.join("\n- "));
};

function getProductFromCarrito() {
  const productToFind = prompt(
    "que producto deseas ver de tu carrito?"
  ).toLowerCase();
  if (carrito.includes(productToFind)) {
    const producto = carrito.find((prod) => prod == productToFind);
    alert(producto);
  } else {
    alert("no esta ese producto en tu carrito");
  }
}

const findProducts = () => {
  const search = prompt("que producto deseas buscar?").toLocaleLowerCase();
  const results = productos.filter((producto) => producto.includes(search));
  alert(results);
};

const deleteProductfromCarrito = () => {
  const productToDel = prompt(
    "que producto deseas borrar del carrito?"
  ).toLowerCase();
  if (carrito.includes(productToDel)) {
    carrito = carrito.filter((prod) => prod != productToDel);
    alert("Producto eliminado");
  } else {
    alert("no se encuentra ese producto en tu carrito");
  }
};
