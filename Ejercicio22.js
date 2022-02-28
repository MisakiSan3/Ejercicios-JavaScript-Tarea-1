
	
	var num = new Number();
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var contador = new Number();
	document.write("Ingrese número Límite: ",'<BR/>');
	num = Number(prompt("Ingrese número Límite: "));
	a = 0;
	b = 1;
	c = 0;
	contador = 0;
	while (contador<num) {
		document.write(c,'<BR/>');
		a = b;
		b = c;
		c = a+b;
		contador = contador+1;
	}
    
    
