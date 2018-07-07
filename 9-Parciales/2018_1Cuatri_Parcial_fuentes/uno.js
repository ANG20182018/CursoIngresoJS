
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho de su rectangulo: ");
	ancho=parseInt(ancho);
	largo=prompt("Ingrese el largo de su rectangulo: ");
	largo=parseInt(largo);

	perimetro= (ancho + largo)*2;

	alert("El perimetro del rectangulo es: " + perimetro);

}
