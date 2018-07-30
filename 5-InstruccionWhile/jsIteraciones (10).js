function mostrar()
{

	var contador=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var contadorPares =0;
	var numero;
	var acumulador=0;
	var acumuladorNegativos =0;
	var diferenciaentrePyN;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese su numero...");
		numero=parseInt(numero);
		
		while (isNaN(numero)) //PARA VALIDAR SI ES UN NUMERO...ASI NUM NO DA NAN...
		{
			numero=prompt("Ingrese su numero..."); // si no haces esto esta mal...
			numero=parseInt(numero);
		}
		
		if (numero < 0)
		{
			acumuladorNegativos= acumuladorNegativos + numero;
			contadorNegativo ++;
		}
		else if (numero >0 )
		{
			acumulador= acumulador + numero;
			contador++;
		}
		else //if (numero==0) // ver si es asi o entra solo el else...
		{
			contadorCeros++;
		}

		if( numero % 2 == 0)
		{
			contadorPares ++;
		}

	respuesta=prompt("Desea seguir ingresando numeros: ");	
	
	} //OJO ACA TERMINA EL WHILE!!

	// EL PUNTO 9 SE HACE AFUERA!
	if (contador > contadorNegativo) //para establecer de cual hay mas...! //OJJJJJJJJJJJJJJO!
	{
		//aca hay que poner la variable para saber las diferencias entre la cantidad de los dif numeros!
		diferenciaentrePyN= contador - contadorNegativo;
	}
	else if (contador < contadorNegativo)
	{
		diferenciaentrePyN = contadorNegativo - contador;
	}

	document.write ("Suma de los negativos:" + acumuladorNegativos); //OJO, EL BR PUEDE ESTAR AL PRINCIPIO O AL FINAL DEL TEXTO!
	document.write("<br> Suma de los positivos:" + acumulador);
	document.write("<br> Cantidad de negativos:" + contadorNegativo);
	document.write("<br> Contador cero:" + contadorCeros);
	document.write("<br> Cantidad de numeros pares: " + contadorPares);
	document.write ("<br> Promedio positivos:" + (acumulador / contador));
	document.write ("<br> Promedio negativos:" + (acumuladorNegativos / contadorNegativo));
	document.write ("<br> Diferencia entre Positivos y negativos: " +  diferenciaentrePyN )// (acumulador - acumuladorNegativos)); // aca esta mal tiene q informarse la diferencia entre ambos, 

/*ATENCION EN EL DOCUMENT.WRITE SE USA "<BR>" PARA SALTAR LINEAS OJOOOOOOO!
es DOCUMENT.WRITE("HOLA")...
 */

}//FIN DE LA FUNCIÓN