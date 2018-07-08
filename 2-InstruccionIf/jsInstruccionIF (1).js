function mostrar()
{
	var edad;
	

	edad=document.getElementById('edad').value;
	

	if (edad==15)
	{
		alert("Niña bonita");
	}
	else
	{
		alert("Usted no es una niña bonita:"); 
	}

}


//FIN DE LA FUNCIÓN

//NO ME LEE LA SENTENCIA ELSE, SOLO REPITE LA IF.. POR QUE TENIA QUE PONER == NO SOLO =
//EL == ACTUA COMO CONECTOR LOGICO, PERO AHORA NO LEE EL IF
//LO SOLUCIONE SIMPLIFICANDO LA ECUACION E INTEGRANDO EN LA CONDICIONDEL IF LA FORMULA DIRECTAMENTE.