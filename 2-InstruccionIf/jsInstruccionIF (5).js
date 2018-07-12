function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;

	if(edad <13 || edad>17)      // EL O ES ALT GR +1 OJO...SINO ES COMENTAR SUP IMP
	{
		alert("La persona no es adolescente");
	}


}//FIN DE LA FUNCIÓN