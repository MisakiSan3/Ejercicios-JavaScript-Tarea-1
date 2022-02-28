let estudiante;
let nota1;
let nota2;
let nota3;

alert("Ejercicio 5 - Promedio de 3 notas");
estudiante = prompt("Nombre del estudiante");
nota1 = Number(prompt("Ingrese la Nota 1"));
nota2 = Number(prompt("Ingrese la Nota 2"));
nota3 = Number(prompt("Ingrese la Nota 3"));




let suma;
suma = nota1 + nota2 + nota3;
let promedio;
promedio = suma / 3;
if (promedio > 6.9) {
    document.write(estudiante +" su promedio es de : "+ promedio);
    document.write(" ,Usted ha Aprobado");
} else {
    document.write(estudiante +" su promedio es de : "+ promedio);
    document.write("Usted ha Reprobado");
}
