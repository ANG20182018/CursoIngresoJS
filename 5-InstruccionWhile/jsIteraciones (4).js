function mostrar()
{

	var numero;

	//numero=20; si establezco este numero al azar me ahorro repetir el prompt ya que comienza con un numero mayor y empieza la ejecucion del programa!

	numero = prompt("ingrese un número entre 0 y 9"); // PARA SACAR LA LINEA DE CODIGO ESTA, LE PODES PODER NUMERO=20 PARA QUE EMPIEZE EN CUALQUIER NUMERO MAYOR Y SE EJECUTE LA LINEA DE CODIGO DE ABAJO!!

	while (numero <0 || numero >9) //es interseccion, se preguntan por los que son - a 0 y mayores a 9... // ME EQUIVOQUE ENTRE EL O Y EL Y ENTRE && Y Y || O
	{
		numero = prompt("ingrese un número entre 0 y 9");
	}




}//FIN DE LA FUNCIÓN