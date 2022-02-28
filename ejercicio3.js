let nombre;
let horas;
let valor;

alert("Ejercicio 3 - Sueldo del trabajador");
nombre = prompt("Ingrese su nombre");
horas = prompt("Ingrese las horas trabajadas en el mes");
valor = prompt("Cuanto gana por hora");

sueldo = horas * valor;

document.write("El sueldo de: "+ nombre + " ,Es:"+ sueldo )