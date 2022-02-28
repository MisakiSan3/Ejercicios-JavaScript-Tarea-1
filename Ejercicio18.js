let numay = 0;

 for(i=1; i<=10; i++){
    let num = parseInt(prompt("Ingrese el número " + i));
    if(num > numay){
        numay = num;
        document.write("<br>El número ",i," es: " + num + "<br>");
    }
    
 }
 document.write("<br>El número mayor es: " + numay);
