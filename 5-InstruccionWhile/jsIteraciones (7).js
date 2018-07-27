function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si"; // OJO ACA ESTA LA CLAVE DEL EJERCICIO! respuesta =si!!
 	var numero;
	var suma;
	
	
while (respuesta =="si") //tiene q poder ser falso para que no sea un numero infinito!

{
	numero=prompt("Ingrese el numero: "); 
	numero=parseInt(numero);	
	contador ++; 
	acumulador= acumulador + numero;
	respuesta=prompt (" ¿ Desea seguir ingresando los numeros ?"); //OJO ACA PREGUNTABA LO OPUESTO Y NO ME DABA!! VER QUE ESTABA OK! MUCHO CUIDADO!

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*
/ que pregunta..? termino de ingresar los numeros? o si todavia esta ingresando los numeros que siga ejecutandose...
//SE PUEDE HACER UN BUCLE INFINITO PONIENDOLE TRUE, SIEMPRE SE VA A EJECUTAR OJOO!!!!!! WHILE (TRUE)
//SE PONE UN IF == SI Y BREAK PARA CORTAR LA EJECUCION...Y SIGUE PARA ABAJO LEYENDO EL CODIGO!
//EL OPUESTO A BREAK ES CONTINUE, SALTEA EL CODIGO, VA HASTA EL CORCHETE DE ABAJO Y LO REPITE..VUELVE AL PRINCIPIO
EN JS EL VALOR NAN ES DIFERENTE AL NAN NO SE PUEDO HACER = NAN, HAY UNA FUNCION QUE ES ISNAN(NUM)  OJOOO SUPER IMP
ISNAN (NUM) ES PARA VALIDAR QUE SEA NUMERO!!


*/