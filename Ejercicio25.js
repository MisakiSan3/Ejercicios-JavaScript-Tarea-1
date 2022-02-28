
	// Elaborar un programa que ingrese 3 números y muestre el número intermedio.
	var num_1 = new Number();
	var num_2 = new Number();
	var num_3 = new Number();
	num_1 = Number(prompt("Ingrese el primer numero"));
	document.write("El primer numero es: " + num_1 +'<BR/>');

	num_2 = Number(prompt("Ingrese el segundo número"));
	document.write("El segundo número es: " + num_2 +'<BR/>');
    
	num_3 = Number(prompt("Ingrese el tercer número"));
	document.write("El tercer número es: " + num_3 +'<BR/>');

	if ((num_1!=num_2 && num_1!=num_3 && num_2!=num_3)) {
		if ((num_1>num_2 && num_1<num_3 || num_1>num_3 && num_1<num_2)) {
			document.write("1. El numero intermedio es : ",num_1,'<BR/>');
		} else {
			if ((num_2>num_1 && num_2<num_3 || num_2<num_1 && num_2>num_3)) {
				document.write("2. El número intermedio es : ",num_2,'<BR/>');
			} else {
				document.write("3. El número intermedio es: ",num_3,'<BR/>');
			}
		}
	} else {
		document.write("Los números no son diferentes",'<BR/>');
	}
