function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil != "Soltero") //ACA SE PONE ENTRE COMILLAS PARA QUE LO LEA, SINO NO LO COMPARABA, ERA UN STRING...
	{
		alert("Es muy pequeño para no ser soltero");
	}	

	


}//FIN DE LA FUNCIÓN