function mostrar()
{
//tomo la edad  
var mesDelAño; 

mesDelAño=document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Enero":
	{
		alert("Que comiences bien el año...");
		break;
	}
	case "Marzo":
	{
		alert ("A clases... ");
		break;
	}
	case "Julio":
	{
		alert("Se vienen las vacaciones!...");
		break;
	}
	case "Diciembre":
	{
		alert("Felices fiestas...!");
		break;
	}
}




}//FIN DE LA FUNCIÓN

/* SIEMPRE PONER BREAK, DEFAULT ES COMO EL ELSE DEL IF, SE PONE A LO ULTIMO!, EN EL DEFAULT SI SE LO PONE ULTIMO NO HACE FALTA EL BREAK!
	IGUALDAD ESTRICTA ===, ES LA QUE USA EL SWITCH, NO COMPARA LOS VALORES, PRIMERO COMPARA LOS TIPOS DE VARIABLES
	UNICAMENTE SI LOS TIPOS DE VARIABLES SON TRUE DSP PASA A COMPARAR LOS VALORES!!!
	PRIMERO COMPARA EL TIPO DE VARIABLE Y DESPUES EL VALOR

	LA OTRA IGUALDAD == COMPARA SI EL 2 NUMERO ES IGUAL AL STRING 2 Y DA TRUE CORRECTO...
	EN SWITCH SOLO VAN VALORES, NO SIRVE PARA EVALUAR RANGOS..., 


*/