function mostrar()
{
	var letra;
	var numero;
	var respuesta = "si";
	var contador=0; 
	var contadorPares =0;
	var contadorImpares = 0;
	var contadorCero = 0;
	var contadorPositivos =0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var maximo;
	var minimo;
	var letraMaximo;
	var letraMinimo;


	while (respuesta != "no")
	{
		contador ++;
		letra=prompt("Ingrese la Letra: ");

		/*while ( letra != isNaN (numero) ) // OjO VER VALIDACION DE LETRAS!
		{
			letra=prompt("Ingrese la Letra: ");
		}*/

		numero=prompt("Ingrese numero: ");
		numero=parseInt(numero);

		while (isNaN(numero) || numero < -100 || numero > 100)
		{
			numero=prompt("Ingrese numero: ");
			numero=parseInt(numero);

		}
		
		if (numero %2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares ++;
		}

		
		if (numero == 0)
		{
			contadorCero ++;
		}
		else if (numero > 0 )
		{
			contadorPositivos ++;
			acumuladorPositivos = acumuladorPositivos + numero; 
		}
		else
		{
			acumuladorNegativos= acumuladorNegativos + numero;
		}

		
		if (contador ==1)
		{
			maximo = numero;
			minimo = numero;
			letraMaximo= letra;
			letraMinimo = letra;
		}
		else if ( maximo > numero) //OJO ASI SE HACE OK!
		{
			minimo = numero;
			letraMinimo= letra;
		}
		else if ( minimo < numero) 
		{
			maximo = numero;
			letraMaximo = letra;
		}


		respuesta= prompt ("Desea seguir ingresando numeros?: "); 

	}
	
	document.write (" <br> Cantidad de numeros Pares: " + contadorPares ); 
	document.write (" <br> Cantidad de numeros imPares: " + contadorImpares );
	document.write (" <br> Cantidad de ceros: " + contadorCero );
	document.write (" <br> Cantidad de positivos: " + contadorPositivos);
	document.write (" <br> Promedio de positivos: " + acumuladorPositivos / contadorPositivos);
	document.write (" <br> Suma de negativos: " + acumuladorNegativos);
	document.write (" <br> Numero del maximo: " + maximo + "Letra del Maximo: " + letraMaximo);
	document.write (" <br> Numero del minimo: " + minimo + "Letra del minimo: " + letraMinimo);





	








}

