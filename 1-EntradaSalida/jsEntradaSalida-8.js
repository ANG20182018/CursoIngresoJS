/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo; //OJO ACA LES PUSE OTRO NOMBRE DIF AL DEL HTML Y NO ANDABA
	var numeroDivisor;
	var cociente;
	var resto;

	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=document.getElementById('numeroDivisor').value;
	numeroDivisor=parseInt(numeroDivisor);
	
	cociente= (numeroDividendo / numeroDivisor);
	resto= (cociente*numeroDivisor) - numeroDividendo;

	alert("El resto de la operacion es:" + resto);

	
}


/* dividendo=(divisor*cociente) + resto formula de la division
ACA ME EQUIVOQUE AL ASIGNARLE OTRO NOMBRE DISTINTO A LAS VARIABLES 
DEL QUE ESTABA DESIGNADO EN EL HTML..INTENTE PONER VAR DIVIDENDO VAR DIVISOR Y NO ANDABA..
 */