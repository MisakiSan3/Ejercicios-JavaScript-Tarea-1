
alert("Ejercicio 29 - Serie numerica");

    var c, f, num, serie;
    num = Number(prompt("Ingrese un numero"));
	document.write("Ingrese un numero",'<BR/>');
    document.write(" ", num,'<BR/>')
	for (f=0;f<=9;f++) {
		serie = "";
		for (c=1;c<=num-f;c++) {
			serie = serie+" "+String(c);
		}
		document.write(serie,'<BR/>');
	}
