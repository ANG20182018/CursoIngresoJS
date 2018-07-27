function mostrar()
{

	var contador=0; //esta para despistar!!
	var positivo=0;
	var negativo=1; // OJO ESTO ESTA ASI ...DEBE SER POR ALGO XD...! ES POR QUE SINO TODO LOS NEGATIVOS QUE MULTIPLICAS TE DAN 0!!
	
	var respuesta='si';

	while (respuesta =="si") 

{
	numero=prompt("Ingrese el numero: "); 
	numero=parseInt(numero);	
	contador ++; 
	acumulador= acumulador + numero;
	respuesta=prompt (" ¿ Desea seguir ingresando los numeros ?"); //OJO ACA PREGUNTABA LO OPUESTO Y NO ME DABA!! VER QUE ESTABA OK! MUCHO CUIDADO!

	if (numero > 0) //EL CERO ES NEUTRO, NO ES POSITIVO...
	{
		acumulador=acumulador + numero;
	}
}





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

/*MAXIMO Y MINIMO, LA PRIMERA VEZ ESTABLECE EL MINIMO...DOY 10 PESOS EL MIN ES 10 Y EL MAX 10...
UNICAMENTE SE PUEDE ESTABLECER POR QUE LO COMPARASTE POR EL ANTERIOR...



*/