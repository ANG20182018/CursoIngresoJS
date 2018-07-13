function mostrar()
{
	var nota;

	nota=Math.floor(Math.random()*10)+1; //FORMULA SACADA DEL W3 SCHOOL!

	if(nota>=9)
	{
		alert("Excelente" + nota);
	}
	else
	{
		if(nota>=4)
	{
		alert("Aprobo" + nota);
	}
		else
	{
		alert("Desaprobo" + nota);
	}
	}

}//FIN DE LA FUNCIÓN