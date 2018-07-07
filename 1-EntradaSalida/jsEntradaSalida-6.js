/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma; //ESTABLECER LAS OPERACIONES A REALIZAR CON LAS VARIABLES E IR HACIENDOLAS ESCALONADAMENTE

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;

	alert("la suma es:" + suma);

}

/*LAS VARIABLES CON LAS Q SE EMPIEZAN ESTAN DEFINIDAS EN LA WEB Y 
SON LAS CUALES SE TOMA INFO EN EL GET DOCUMENT...SI SE LO USA PARA 
DEVOLVER INFO TMB SE TIENE QUE USAR LAS VARIABLES DEFINIDAS EN LA WEB, POR ESO
SE USA LA PALABRA ID Y EL HTML PARA BUSCARLAS!*/