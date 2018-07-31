function mostrar()

{
	var notas;
	var sexo; // = true;
	var contador =0;
	var acumulador = 0;
	var maximo;
	var minimo;

//NO LO PUDE HACER: 1) NO SE SI SE PUEDE USAR WHILE DENTRO DE WHILE Y SI SE PUEDE VALIDAR USANDO IF...
// 2) NO SE COMO HACER PARA UNIFICAR DATOS DE 2 TIPOS DIFERENTES, SEXO Y NOTA, GUARDARLOS POR SEPARADO Y MOSTRARLOS...


	while (contador < 5 ) // ES MEJOR HACERLO WILE E IF, NO SE SI SE PUEDEN HACER WHILE WHILE...
	{	
		contador ++;
		notas=prompt( "Ingrese notas: ");
		notas=parseInt(notas); // OJO ACA HAY QUE VALIDAR LAS NOTAS Y EL SEXO, O SEA QUE INGRESEN NUMEROS EN UNA Y EN LA OTRA LETRAS!
		
		while(isNaN(notas))
		{
			notas=prompt( "Ingrese notas: ");
			notas=parseInt(notas);
		}

		sexo= prompt ("Ingrese su sexo: "); // OJO PARA VALIDAR ESTO ME FALTABA LA FRASE DE ARRIBA...

		while (sexo != "m" || sexo != "f")
		{	
		sexo= prompt ("Ingrese su sexo: ");
		}
		
		if ((notas >= 0 && notas <= 10) && (sexo == "m" || sexo == "f"))
		{
			acumulador= acumulador + notas;
		}
		/*else // OJOOO VER COMO SE VALIDA BIEN, SE VALIDA ARRIBA LA VARIABLE SEXO, Y SI NO INGRESA UNA LETRA OK, SE LE REPREGUNTA...
		{
			alert("No ingreso una nota  o un sexo valido..."); // asi no se valida, se valida arriba abajo de la variable sexo...
			contador= contador -1;
		} */
		
		
		if (contador ==1)
		{
			notas=maximo;
			notas=minimo;
		}
		else if (nota > minimo)
		{
			nota=maximo;
		}
		else if (nota < maximo)
		{
			nota =minimo;
		}
			


	}

	alert( " El promedio de las notas es: " + (acumulador / 5 ));
	alert (" La nota mas baja..." + minimo);




	
	/*if (notas >= 0 && notas <= 10)
		{
			notas=prompt( "Ingrese notas: ");
			notas=parseInt(notas);
		}
		else
		{
			alert ("La nota ingresada no es valida, intente nuevamente...");
			notas=prompt( "Ingrese notas: ");
			notas=parseInt(notas);
		}
		
		//sexo= prompt ("Ingrese su sexo: ");/*

























	/*switch(notas)
	{
		case 0:
		{
			notas=0;
			break;
		}
		case 1:
		{
			notas=1;
			break;
		}
		case 2:
		{
			notas=2;
			break;
		}
		case 3:
		{
			notas=3;
			break;
		}
		case 4:
		{
			notas=4;
			break;
		}
		case 5:
		{
			notas=5;
			break;
		}
		case 6:
		{
			notas=6;
			break;
		}
		case 7:
		{
			notas=7;
			break;
		}
		case 8:
		{
			notas=8;
			break;
		}
		case 9:
		{
			notas=9;
			break;
		}
		case 10:
		{
			notas=10;
			break;
		}
		
		default:
		{
			alert("La nota ingresada no es valida");
			break;
		}


	}
*/



}
