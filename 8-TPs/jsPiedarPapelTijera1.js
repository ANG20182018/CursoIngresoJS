/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra;
var papel;
var tijera;

function comenzar()
{
	eleccionMaquina= Math.floor(Math.random() * 3) + 1;
	
	if (eleccionMaquina==1)
	{
		eleccionMaquina=piedra;
	}
	else if (eleccionMaquina==2)
	{
		eleccionMaquina=papel;
	}
	else
	{
		eleccionMaquina=tijera;
	}
}
function piedra()
{
	if (piedra==piedra)
	{
		alert("Piedra y Piedra, empato...");
	}
	else if (piedra && papel)
	{
		alert("Piedra y papel, perdio...");
	}
	else
	{
		alert("Piedra y tijera, gano...");
	}
}

function papel()
{
	if (papel==papel)
	{
		alert("Papel y papel, empato...");
	}
	else if (papel && tijera)
	{
		alert("Papel y tijera, perdio...");
	}
	else
	{
		alert("Papel y piedra, gano...");
	}
}

function tijera()
{
	if (tijera==tijera)
	{
		alert("Tijera y Tijera, empato...");
	}
	else if (tijera && piedra)
	{
		alert("Tijera y piedra, perdio...");
	}
	else
	{
		alert("Tijera y papel, gano...");
	}
	
}