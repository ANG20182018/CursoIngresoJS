/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


	var ingresonumero; //CUANDO ESTAN ACA LAS VARIABLES, NO MUESTRA LA ASIGNACION DE RESULTADOS EN LA CONSOLA...X QUE??
	var numeroSecreto;
	var contadorIntentos;


function comenzar()
{
	numeroSecreto= Math.floor(Math.random() * 100) + 1;
}

function verificar()
{	
	ingresonumero=document.getElementById('numero').value;
	ingresonumero=parseInt(ingresonumero);
	
	
	contadorIntentos=0
	contadorIntentos= contadorIntentos + document.getElementById('intentos').value;
	contadorIntentos=parseInt(contadorIntentos); //PARA QUE EL 0 DEL CONTADOR LO TOME COMO NUMERO EL PARSE TENIA QUE ENTRAR ACA! LO MOSTRO LA CONSOLA!
	
		
	if (numeroSecreto==ingresonumero)
	{
		alert("Usted es un ganador!! y en solo" + contadorIntentos + "intentos");
	}	

	else if (numeroSecreto<ingresonumero)
	{
		contadorIntentos= contadorIntentos + 1;
		document.getElementById('intentos').value=contadorIntentos;
		alert("Se paso del numero secreto");
			
	}
	
	else
	{
		contadorIntentos= contadorIntentos + 1;
		document.getElementById('intentos').value=contadorIntentos;
		alert("Le falta para llegar al numero secreto...");
			
	}
	
	
}

	