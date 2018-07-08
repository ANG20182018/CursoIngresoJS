function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=18)
	{
		alert("La persona es un adulto");
	}
	else
	{
	if(edad>=13) //no puede haber un corchete antes del if..mirar bien.
	{	
		alert("La persona es un adolescente");
	}	
	else
	{
		alert ("La persona es un niño");	
	}
	}
	


