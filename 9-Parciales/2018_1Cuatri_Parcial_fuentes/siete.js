/*
JOSE M 25
MARIA F 18
JESUS M 33
FER F 81

BASAR EL EJERCICIO EN ESTOS DATOS, NOMBRE, SEXO Y EDAD...
*/function mostrar()

{
	var nombre; //no hace falta validar...
	var notas;
	var sexo; // = true; validado por f o m
	var edad;
	var contador = 0;
	var contadorDeMujeres =0;
	var contadorDeHombres = 0;
	var contadorMayorDeEdad = 0;
	var contadorMenorDeEdad = 0;
	var edadMaximo;
	var edadMinimo;
	var nombreMayor;
	var edadMaximoFem;

	//OJOOO SE ESCRIBE contadorDeMujeres, contadorDeHombres, completo y respetando esa logica...ojjjjjjo!

while (contador < 4) // OJO ACA ESTA LA FORMA VALIDADA QUE SE USA SIEMPRE PARA SEXO Y EDAD!
{	
	contador ++;

	nombre=prompt ("Ingrese su nombre...");

	sexo = prompt ("Ingrese su sexo: "); // OJO PARA VALIDAR ESTO ME FALTABA LA FRASE DE ARRIBA... PARA VALIDAR ESTA FRASE SE REPITA DENTRO DE LA CONDICION NEGADA DEL WHILE...

		while (sexo != "m" && sexo != "f") // ACA SE VALIDA CON && EN EL SEXO, DE LA OTRA FORMA NO DEJA DE REPETIR...
		{	
		sexo= prompt ("Ingrese su sexo: ");
		}
	
	edad= prompt ("Ingrese su edad"); //SUPER IMPPPPP VER EL ISNAN..., ES POR SI INGRESAN CUALQUIER COSA, SE DEFINE COMO NAN Y EL PROGRAMA REPITE SI PASA ESO...
	edad=parseInt(edad);
		
		while (isNaN (edad) || edad <0 || edad > 100) //OJOOOOOO EL ISNAN EVITA QUE INGRESE ALGO QUE NO SON NUMEROS!
		{
			edad= prompt ("Ingrese su edad"); // SE REPITE LA MISMA FRASE DENTRO DE CADA VALIDACION!
			edad=parseInt(edad);
		}

	
	if (sexo == "m")
	{
		contadorDeHombres ++;
	}
	else
	{
		contadorDeMujeres ++;
									//ojooooESTO ES DE OTRO EJ...TOMARLO COMO EJ! ES DEL EJERCICIO DONDE TE PIDE EDAD MAXIMA MUJERES!1 Y DIF HOMBRES!S
		/*if ( edad > edadMaximoFem) //ESTA OK ESTA PARTE, ACA TENGO QUE DELIMITAR LA EDAD MAXIMA PARA EL SEXO FEMENINO!!
		{
			edadMaximoFem=edad; //ACA ESTA OK TENGO QUE PREGUNTAR LA EDAD MAXIMA DEL SEXO FEMENINO
			nombreMayor=nombre; LA LOGICA ES QUE ACA ESTABLECES EL NOMBRE DE LA PERSONA MAYOR...

		}*/ //OJOOOOOO ESTO ES DE OTRO EJERCICIO!
	}

	
	if (edad >= 18 )
	{
		contadorMayorDeEdad ++;
	}
	else //ACA SE PUEDE HACER ESTE ELSE POR QUE YA TENES LA EDAD VALIDADA ANTERIORMENTE!
	{
		contadorMenorDeEdad ++;
	}

	//ACA VAN LAS NOTAS MAS ALTAS Y LAS MAS BAJAS!
	//el contador puede ser 1 o 0 depende donde lo ubicas! // ACA ES LA EDAD MAXIMA GENERAL...DE HOMBRES Y MUJERES!
	if (contador ==1) //REVISAR ALGO ESTA MAL...VER!!! OJJJJJJJJJO HABIA PUESTO AL REVES PUSE EDAD= EDADMAXIMO Y ERA AL REVES!!! OJOOO, POR LOS DATOS QUE PEDI EN PROMPT!
	{
		edadMaximo = edad;  // ACA LO PUSE AL REVES Y NO ANDABA! OJO, YO PEDI EDAD POR PROMPT!
		edadMinimo = edad;
		nombreMayor=nombre; // PARA QUE LO HAGA TAMBIEN EN EL PRIMER INTENTO...OJOOOO...TIENE QUE ESTAR ACA TAMBIEN...
	}
	else if (edad > edadMinimo)
	{
		edadMaximo = edad;
		nombreMayor= nombre; //OJOOOOO SE DECLARA UNA NUEVA VARIABLE Y SE LE ASIGNA A NOMBRE...
		
		// if (sexo== "m")
	}
	else if (edad < edadMaximo)
	{
		edadMinimo = edad;
	}


}

document.write(" <br> contador De Mujeres" + contadorDeMujeres); //EL BR SE PONE ADELANTE!!!
document.write(" <br> contadorDe Hombres " + contadorDeHombres);
document.write(" <br> contador mayor de edad" + contadorMayorDeEdad);
document.write(" <br> contador Menor DeEdad" + contadorMenorDeEdad);
document.write(" <br> Edad mas alta" + edadMaximo + "Edad mas baja" + edadMinimo);


//NO LO PUDE HACER: 1) NO SE SI SE PUEDE USAR WHILE DENTRO DE WHILE Y SI SE PUEDE VALIDAR USANDO IF...
// 2) NO SE COMO HACER PARA UNIFICAR DATOS DE 2 TIPOS DIFERENTES, SEXO Y NOTA, GUARDARLOS POR SEPARADO Y MOSTRARLOS...


	/*while (contador < 5 ) // ES MEJOR HACERLO WILE E IF, NO SE SI SE PUEDEN HACER WHILE WHILE...
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
		
		
		/*if (contador ==1)
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
