/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var ingresonumero;
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
	
	
	contadorIntentos=0;
	contadorIntentos= contadorIntentos + document.getElementById('intentos').value;
	contadorIntentos=parseInt(contadorIntentos);
	
		
	if (numeroSecreto==ingresonumero)
	{
		alert("Usted es un ganador!!");
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


	if (contadorIntentos==1 && (numeroSecreto == ingresonumero))
	{
		alert ("Usted es un Psiquico");
	}	

	else if (contadorIntentos==2 && (numeroSecreto == ingresonumero))
	{
		alert("excelente percepción");
	}
	
	else if (contadorIntentos==3 && (numeroSecreto == ingresonumero))
	{
		alert("Esto es suerte");
	}
	else if (contadorIntentos==4 && (numeroSecreto == ingresonumero))
	{
		alert("Excelente técnica");
	}
	else if (contadorIntentos==5 && (numeroSecreto == ingresonumero))
	{
		alert ("Usted esta en la media");
	}
	else if ((contadorIntentos >=6 || contadorIntentos<=10) && (numeroSecreto == ingresonumero))
	{
		alert ("Le falta tecnica...:");
	}
	else if (contadorIntentos >10 )
	{
		alert ("Afortunado en el amor");
	}
	

	document.getElementById('intentos').value=contadorIntentos; 
}
	

