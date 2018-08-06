function mostrar()
{
	var marca;
	var peso;
	var temperaturaAlmacenamiento;
	var respuesta = "si";
	var contador = 0;
	var contadorTemperaturasPares = 0;
	var pesoMaximo;
	var pesoMinimo;
	var marcaMasPesado;
	var contadorConservarBajoCero = 0;
	var acumuladorPesoTodos = 0; 


	while (respuesta != "no") // ojo aca, va el opuesto del de arriba...
	{
		contador ++;

		marca=prompt("Ingrese la marca del producto: ");

		peso = prompt ("Ingrese el peso ");
		peso = parseInt (peso);

		while ( isNaN (peso) || peso < 1 || peso > 100 ) // siempre que haya numeros, isnan para que no ingresen letras...
		{
			peso = prompt ("Ingrese el peso ");
			peso = parseInt (peso);
		}

		temperaturaAlmacenamiento= prompt("Ingrese la temperatura de Almacenamiento...: ");
		temperaturaAlmacenamiento = parseInt (temperaturaAlmacenamiento);

		while ( isNaN (temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30 )
		{
			temperaturaAlmacenamiento= prompt("Ingrese la temperatura de Almacenamiento...: ");
			temperaturaAlmacenamiento= parseInt (temperaturaAlmacenamiento);

		}

		if (temperaturaAlmacenamiento %2 == 0)
		{
			contadorTemperaturasPares ++;
		}

		if (contador == 1)
		{
			pesoMinimo = peso;
			pesoMaximo = peso; 
			marcaMasPesado= marca; // si haces solo una vez se queda aca... sino lo pones no anda!
		}
		else if ( peso > pesoMaximo ) //ASI S ESACAN OK MAX Y MINIMOS, O SEA PESO NUEVO ES MAYOR AL PESO MAXIMO ANTERIOR, ES EL NUEVO PESO MAXIMO...
			pesoMaximo = peso;
			marcaMasPesado= marca;
		}
		else if ( peso < pesoMinimo) // SI EL PESO NUEVO ES MENOR AL PRECIO MINIMO ANTERIOR, ES EL NUEVO PRECIO MINIMO!
		{
			pesoMinimo = peso;

		}

		if (temperaturaAlmacenamiento < 0 )
		{
			contadorConservarBajoCero ++;
		}

		acumuladorPesoTodos= acumuladorPesoTodos + peso; // esto tiene q estar afuera del bucle, sino se reinicia siempre...


		respuesta = prompt (" Desea seguir ingresando datos ? "); 
	
	}


	document.write(" <br> Cantidad de temperatura de almacenamiento Pares: " + contadorTemperaturasPares );
	document.write(" <br> Marca mas pesado: " + marcaMasPesado); 
	document.write(" <br> Cantidad de productos que se conservan bajo 0: " + contadorConservarBajoCero);
	document.write(" <br> El peso promedio de todos los productos es: " + (acumuladorPesoTodos / contador) );
	document.write(" <br> Peso Maximo: " + pesoMaximo + "Peso minimo: " + pesoMinimo );




	

}
