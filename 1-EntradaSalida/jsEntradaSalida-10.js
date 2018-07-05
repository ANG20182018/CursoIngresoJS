/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe); //EN PARSE INT ACA VA SIEMPRE SIN COMILLAS
	resultado=document.getElementById('resultado').value;
	resultado=parseInt(resultado);
	resultado=importe * 75 / 100;  // ACA HAY QUE TENER CUIDADO, HAY QUE HACER UNA REGLA DE 3 SIMPLE..

	//alert(resultado); ATENCION ME ESTABA EQUIVOCANDO, SALIA UNA VENTANA ALERT, PERO NO LO MOSTRABA EN EL CUADRO DE TEXTO DE LA PAGINA
	document.getElementById('resultado').value=resultado; //ASI TIRA EL RESULTADO EN LA PAGINA ATENCION!!

}
