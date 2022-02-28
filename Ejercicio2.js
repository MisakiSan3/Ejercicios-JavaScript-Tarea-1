let nombre = prompt("Ingrese el nombre del trabajador");
let horas = parseInt(prompt("¿Horas trabajadas en el mes?"));
let gana= parseInt(prompt("¿Cuánto gana por hora?"));


let  total = 0;

total = horas * gana;
document.write("<br>El trabajador: " + nombre + " debe recibir una remuneración de $ " + total + " dólares");