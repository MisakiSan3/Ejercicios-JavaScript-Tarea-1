alert("Ejercicio 19");

let numeros = [11, 3, 13, 2, 7, 5];
document.write(numeros)

numeros.sort((a, b) => b - a);
document.write(numeros);

document.write();

numeros.sort((a, b) => a - b);
document.write(numeros);