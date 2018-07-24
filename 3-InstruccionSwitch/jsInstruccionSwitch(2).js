function mostrar()
{
//tomo la edad  
var mesDelAño;

mesDelAño=document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	
		alert ("Falta para el invierno");
		break;
	

	case "Julio":
	case "Agosto":
	
		alert(" Es invierno, abrigate");
		break;
	
	default: // PARA VER SI ENTENDI OK, ACA SE USA DEFAULT COMO UN ELSE, NO HACE FALTA DEFINIR TODO...
				//MI OTRO ERROR FUE PONER {}, EL SWITCH NO LOS NECESITA, SOLO ESCRIBIR ABAJO DE LOS 2 PUNTOS Y ESTA OK!

		alert("Ya pasamos el invierno, ahora el calor");
		break;


	/*case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	{
		alert("Ya pasamos el invierno, ahora el calor! ");
		break;

	}*/





}




}//FIN DE LA FUNCIÓN