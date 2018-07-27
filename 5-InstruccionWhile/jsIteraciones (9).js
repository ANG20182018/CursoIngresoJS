function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si'; // se me hace siempre lio con esto, cambie la pregunta y anda...

	maximo= -9999;
	minimo= 9999;


	
	while(respuesta!='no') //para poder salir...
	{		
		contador ++;
		numero=prompt("Ingrese un numero: " + contador); //VER BIEN QUE HICE POR QUE LO COPIE....VER LA LOGICA GENERAL....!
		numero=parseInt(numero);

		if(contador ==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else if (numero>maximo) // si despues de los 10 pe nos da 20...
		{		
		maximo=numero;
		}
		if (numero<minimo)
		{
		minimo=numero;
		}


		respuesta=prompt( "Desea ingresar otro numero..."); // ver..por que me parece que no tenes que tener 2 entradas OJJJJJO!!!
	}

	



	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN


/*MAXIMO Y MINIMO, LA PRIMERA VEZ ESTABLECE EL MINIMO...DOY 10 PESOS EL MIN ES 10 Y EL MAX 10...
UNICAMENTE SE PUEDE ESTABLECER POR QUE LO COMPARASTE POR EL ANTERIOR...

LA IDEA ES QUE COMO MAXIMO SEA EL MAS CHICO ASI LLEGA OTRO VALOR Y ES EL NUEVO MAXIMO....
MAXIMO = -9999 Y MINIMO = +9999

*/