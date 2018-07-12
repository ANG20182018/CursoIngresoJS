function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value; //ME HABIA EQUIVOCADO EN LOS SIGNOS < Y > POR ESO NO ANDABA...

	if(edad >=13 && edad <= 18)  //ATENCION SON BINARIOS NECESITAN LA EDAD DE AMBOS LADOS!!!
	{
		alert("Es un adolescente");
	}	 



}//FIN DE LA FUNCIÓN

/*  a>13   y a<17  te pide la interseccion de los 2 conjuntos, usar CONECTORES LOGICOS, Y U O ATENCION, 
	CUANDO PIDE LA UNION DE AMBOS ES EL O ...SUPER IMPPPPP
	UN O SE USA CUANDO PIDE LA UNION DE 2 SEGMENTOS SEPARADOS EJEMPLO SI TE PIDE LA EDAD HASTA 13 Y DE 17 EN ADELANTE

	EN UNO SE USA Y Y EN EL OTRO O    */