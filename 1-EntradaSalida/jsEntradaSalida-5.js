/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	var nombre;
	var edad;

	nombre=document.getElementById('elNombre').value; // OJO VER BIEN EN EL HTML, ES EL ULTIMO..
	edad=document.getElementById('laEdad').value; //HABIA ESCRITO MAL LA PALABRA DOCUMENT COMO DOUMENT, Y TE DAS CUENTA POR QUE NO SE PONE AZUL...

	alert("Usted se llama:" + nombre + "y tiene" + edad + "años");


}	


