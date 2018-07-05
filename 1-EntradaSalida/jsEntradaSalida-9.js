/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento(resultado) // ME FALTABA INTRODUCIR LA VAR RESULTADO DENTTRO DEL PARENTESIS...ME LO INDICABA EN LA CONSOLA EL ERROR...
{
	var sueldo;
	var resultado; 

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	resultado=document.getElementById('resultado').value;
	resultado=parseInt(resultado);
	resultado=sueldo * 110/100;   //ACA EL X ES * ...ME EQUIVOCABA Y DEFINIA RESULTADO=RESULTADO, ES RESULTADO=SUELDO Y SE LE COMPLETA LA FORMULA
	//alert(resultado); ME EQUIVOQUE ACA, HAY QUE HACERLO OK PARA QUE TE QUEDE EN LA PAGINA WEB...PARA HACERLO OK:

	document.getElementById('resultado').value=resultado; // HAY QUE REPETIR RESULTADO CON DOCUMENT EN RESULTADO, POR QUE LOS VA INTEGRANDO ESCALONADAMENTE..
}
