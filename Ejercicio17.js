let numNotas = parseInt(prompt("Ingrese el número de notas que quiere promediar"));
let suma = 0;
let promedio;

for(var i=1; i<=numNotas; i++){
    let notas = parseInt(prompt("Ingrese las nota " + i));
    document.write("<br>NOTA ",i," : " + notas + "<br>");
    suma = suma + notas;
    promedio = suma/numNotas;
}
document.write("<br>El promedio de sus notas es: " + promedio);