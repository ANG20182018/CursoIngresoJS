function mostrar()
{
	var letra;
	var numero=0;
	var respuesta = "si"; //VER LA ULTIMA PARTE COMO ARTICULAR 2 TIPOS DISTINTOS DE DATOS Y VER SI ASI ESTA VALIDADO OK!
	var contadorPares=0;
	var contadorInpares=0;
	var contadorCero = 0;

	while (respuesta != "no")
	{
		letra= prompt ("Ingrese letra..");
		
		
		if (numero > -100 && numero < 100)
		{
			numero= prompt("Ingrese numero..:");
			numero= parseInt(numero);
		}

		if (numero %2 ==0)
		{
			contadorPares = contadorPares + 1; 
		}
		else
		{
			contadorInpares=contadorInpares + 1;
		}

		if (numero ==0)
		{
			contadorCero= contadorCero + 1 ;
		}


		respuesta= prompt("Desea continuar ingresando los numeros? ");
	}










}

