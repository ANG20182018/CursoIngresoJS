function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	//if (edad<18 && estadoCivil != "Soltero") // NO SE PUEDE PONER ESTO ASI, CUANDO DICE NO HACER NADA, NO HAY QUE ESCRIBIR NADA
	//me tiraba error por que tomaba la linea del else como condicion...
		
		if (estadoCivil == "Soltero" && edad>=18)
		{
			alert("Es soltero y no es menor");
		}
	



	


}//FIN DE LA FUNCIÓN

/*EL NO HACER NADA SIGNIFICA NO ESCRIBIR NI UNA SOLA LINEA DE CODIGO OJO!!!*/