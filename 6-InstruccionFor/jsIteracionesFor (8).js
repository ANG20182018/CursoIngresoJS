function mostrar()
{ //OJO EJERCICIO DEL NUMERO PRIMO: ANDA OK VER LA LOGICA!!! //HUBO OTRO EJ MAS COMPLEJO PARA VER LA LOGICA, VER EN GITHUB COMPAÑEROS!

	var numeroIngresar;
	var divisores;
	var numeroAnterior;

	numeroIngresar=prompt("ingrese numero");
	numeroIngresar=parseInt(numeroIngresar);
	divisores=0;

	//el -1 es para que te muestre que no hay un divisor, sino los numeros primos te devuelven uno por que se dividen por ellos mismos...
	for(numeroAnterior=numeroIngresar -1; numeroAnterior >1 ; numeroAnterior --) // EL OBJETIVO ES MIRAR LOS ANTERIORES AL NUMERO INGRESADO Y VER SI SON DIVISORES...

	{
		if (numeroIngresar % numeroAnterior == 0)
		{
			divisores ++;
		}

	}

	if (divisores == 0)
	{
		console.log (" Es primo");
	}
	else
	{
		console.log ("no es primo ");
	}

	//ya tenemos el numero, hay que encontar la cantidad de divisores que tiene!

	


}//FIN DE LA FUNCIÓN