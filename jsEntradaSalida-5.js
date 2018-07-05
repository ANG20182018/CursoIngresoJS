/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	console.log("Usted se llama:"+nombre+"y tiene"+edad+"años"); //sale impreso en la consola de chrome, para hacer que salga la ventana emergente, realizar un alert.
    //alert("Usted se llama:"+nombre+"y tiene"+edad+"años");) no sale la ventana, tira errores de html, sigo con otro.
    //"Usted se llama:"+nombre+"y tiene"+edad+"años" se va concatenando con + ...
}

