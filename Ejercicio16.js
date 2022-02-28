var num, x, sumapar, sumaimpar;

	alert("Ejercicio 16");

	num = parseInt(prompt("Ingrese un numero"));

	sumapar = 0;
	sumaimpar = 0;

	for (x = 1; x <= num; x++) {
		if (x % 2 == 0) {
			sumapar = sumapar + x;
		} else {
			sumaimpar = sumaimpar + x;
		}
	}
	document.write("La suma de los numeros pares es: " +sumapar);
	""
	document.write("La suma de los numeros impares es: " +sumaimpar);


