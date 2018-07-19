var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;


function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3 + 1);
	alert(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1)
	{
		alert("Piedra y Piedra, empato...");
		ContadorDeEmpates=ContadorDeEmpates+1;
	}
	else if (eleccionMaquina==2)
	{
		alert("Piedra y papel, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else
	{
		alert("Piedra y tijera, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina==2)
	{
		alert("Papel y papel, empato...");
		ContadorDeEmpates=ContadorDeEmpates+1;
	}
	else if (eleccionMaquina ==3)
	{
		alert("Papel y tijera, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else
	{
		alert("Papel y piedra, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==3)
	{
		alert("Tijera y Tijera, empato...");
		ContadorDeEmpates=ContadorDeEmpates+1;
	}
	else if (eleccionMaquina==1)
	{
		alert("Tijera y piedra, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else
	{
		alert("Tijera y papel, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	alert ("Usted gano: " + ContadorDeGanadas + "veces, " + "Perdio: " + ContadorDePerdidas + "veces" + "  y empato..." + ContadorDeEmpates + "..veces");

}