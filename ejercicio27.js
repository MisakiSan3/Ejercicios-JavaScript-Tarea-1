
alert("Ejercicio 27 - Año bisiesto y fecha correcta");

    var fecha = new String();
	var d = new Number();
	var m = new Number();
	var a = new Number();
	var b = new Number();
	document.write("INGRESE FECHA DD/MM/AAAA : ");
	fecha = prompt();
	d = Number(String.substring(fecha,0,2));
	m = Number(String.substring(fecha,4,5));
	a = Number(String.substring(fecha,7,10));
	document.write("D�a : ",d,'<BR/>');
	document.write("Mes : ",m,'<BR/>');
	document.write("A�o : ",a,'<BR/>');
	document.write("",'<BR/>');
	if ((a>=1582 && a<=3000) && (m>=1 && m<=12) && (d>=1 && d<=31)) {
		if (((a%4)==0 && (a%100)!=0 || (a%400)==0)) {
			document.write("Si es un A�o bisiesto",'<BR/>');
			b = 0;
		} else {
			document.write("El a�o no es bisiesto",'<BR/>');
			b = 1;
		}
		if ((m>=1 && m<=12)) {
			if ((b==0)) {
				if ((d>=1 && d<=29)) {
					document.write("Fecha Correcta",'<BR/>');
				} else {
					document.write("Error en la fecha",'<BR/>');
				}
			} else {
				if ((b==1)) {
					if ((d>=1 && d<=28)) {
						document.write("Fecha Correcta",'<BR/>');
					} else {
						document.write("Error en la fecha",'<BR/>');
					}
				} else {
					document.write("Error en la fecha",'<BR/>');
				}
			}
		} else {
			document.write("Error en la fecha",'<BR/>');
		}
	} else {
		document.write("Error en la fecha",'<BR/>');
	}

