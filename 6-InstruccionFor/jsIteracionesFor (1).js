function mostrar()
{	
	//1
	var contador;
	contador = 0; // SE PUEDE PONER ARRIBA EL CONTADOR Y SACARLO DE LA SENTENCIA DEL FO...

	for (; ; ) //PARA QUE EL FOR ANDE TIENE QUE ESTAR SIEMPRE LOS 3 ; EN SU ESTRUCTURA!
	{									//PODES SACAR EL COMPONENTE CONTADOR PERO DEJANDOLO AFUERA ARRIBA Y DEJANDO EL ;
		console.log (contador); //HAY QUE SABER COMO FUNCIONA, 
								//EL FOR, PRIMERO ENTRA Y DESPUES SALE....EL FOR PASA POR LA VAR UNA SOLA VEZ, DESPUES PASA A LA 2DA, LUEGO EJECUTA LA COLUMNA CONTADOR < 5 Y CUANDO TERMINO, EJECUTA LA OTRA, LUEGO VUELVE A EVALUAR EL CONTADOR Y DESPUES LO DEVUELVE...
	
		
		if (contador < 5)
		{
			contador ++; // ESTE EJEMPLO ES PARA VER QUE EL FOR ES UN CONJUNTO DE INSTRUCCIONES, SE PUEDEN HACER ESAS INSTRUCCIONES SIGUIENDO OTROS CAMINOS!
		}

		//SE PUEDE USAR BREAK!!
	} 


	
	console.log ("Final" + contador);

}

//NUMEROS PRIMOS : SON LOS NUMEROS QUE CUANDO SE DIVIDEN NUNCA DA 0 IF (CONTADOR DE DIVISORES==0) = NUMERO PRIMO!