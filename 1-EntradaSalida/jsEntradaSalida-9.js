/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	sueldo=document.getElementById('sueldo').value; //PUSE MAL LA PRIMER PALABRA DOCUMENT, LA COPIE MAL Y ESTABA MAL EN TODAS LAS LINEAS!
	sueldo=parseInt(sueldo);
	resultado=document.getElementById('resultado').value;
	resultado=parseInt(resultado);

	aumento= (sueldo *110) / 100;

	document.getElementById('resultado').value=aumento;

}
