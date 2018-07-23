/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{eleccionMaquina= Math.floor(Math.random() * 3) + 1;
	
	
	alert(eleccionMaquina);
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1)
	{
		alert("Piedra y Piedra, empato...");
	}
	else if (eleccionMaquina==2)
	{
		alert("Piedra y papel, perdio...");
	}
	else
	{
		alert("Piedra y tijera, gano...");

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina==2)
	{
		alert("Papel y papel, empato...");
	}
	else if (eleccionMaquina ==3)
	{
		alert("Papel y tijera, perdio...");
	}
	else
	{
		alert("Papel y piedra, gano...");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==3)
	{
		alert("Tijera y Tijera, empato...");
	}
	else if (eleccionMaquina==1)
	{
		alert("Tijera y piedra, perdio...");
	}
	else
	{
		alert("Tijera y papel, gano...");
	}

}//FIN DE LA FUNCIÓN