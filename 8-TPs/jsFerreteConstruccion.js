/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambrenecesario;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	
	alambrenecesario= (largo * ancho *3);

	alert("El alambre necesario es:" + alambrenecesario);

}
function Circulo () 
{
	var radio;
	var alambrenecesario;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	alambrenecesario= (radio *2 *3 * 3.14);
	alambrenecesario=parseInt(alambrenecesario); //no me funcionaba x q faltaba el parseint!

	alert("El alambre necesario es:" + alambrenecesario); 
}

function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	cemento=largo*ancho*2;
	cal=largo*ancho*3;

	alert(" Se necesitan:" + cemento + "bolsas de cemento y : " + cal + "bolsas de cal"); 
	
	
}