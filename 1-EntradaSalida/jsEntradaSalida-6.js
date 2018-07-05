/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() //CAMBIO LA FUNCION COMPARADO CON LA ANTERIOR...DECIA FUNTION...
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value//ACA ESTA TOMANDO LA FUENTE DEL HTML CORRESPONDIENTE.
	numeroUno=parseInt(numeroUno); // devuelve la misma variable a numero uno y entonces se deja de leer como texto y la pasa a leer como numero.
	numeroDos=document.getElementById('numeroDos').value // SE COPIA, SE PEGA ABAJO, LE HACES 2 CLICK SOBRE NUMERO UNO, SE PINTA, TOCAS CONTRL +D Y SE MODIFICAN AMBAS!
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos; // se tienen que sumar aca..me estaba equivocando..


	alert(resultado);//document es simil prompt toma datos del html, alert los envia para afuera...

	//el signo mas en js, suma y concatena, un texto lo concatena, un numero lo suma...

}


//2 modos de tomar datos: prompt y get element...y devuelven texto...las "" hacen que los numeros sean leidos como texto...por eso es 22 y no los suma, hay que convertirlos en numeros
	//PARA CONVERTIR EL NUMERO 2 FORMAS: VARIABLE TRANFORMADA (NO ES RECOMENDABLE)...OTRA FORMA: PARA TRANFORMAR EL NUMERO DE TEXTO EN VALOR, NO LO TRANSFORMA, LO DEVUELVE,,,DEVUELVE ALGO TRANSFORMADO, PARSEINT RETORNA LO QUE SE PASO COMO NUMERO...
	//EMTENDER LA LOGICA DEL FUNCIONAMIENTO DEL PARSEINT. DESPUES DE HABER LEIDO EL NUMERO X GET ELEMENT ID, 
	//SUPER IMP, EN LA PAGINA, EN SOURCES, DEBUGEAS LOS ERRORES, SELECCIONANDO LA LINEA DE CODIGO HASTA DONDE QUERES QUE SE EJECUTE LA LINEA
	//Y LA VAS ADELANANDO DE A UNA O TODO EL CODIGO PARA CHEQUEAR QUE NO HALLA ERRORES, ESTO SE MIRA EN LA SOLAPA DE WATCHES!