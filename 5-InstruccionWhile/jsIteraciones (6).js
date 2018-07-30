function mostrar()
{

	var contador=0;
	var acumulador=0; // el acumulador suma las variables y las guarda!
	var numero;
	var suma;
	
	//OJOOOOOOO VER VALIDACION DE LETRAS Y NUMEROS X ISNAN!!! EXPLICACION OK VER!
	//ATENCION: VOS TE TENES QUE ASEGURAR QUE LO QUE INGRESA EL USUARIO ES UN NUMERO O UNA LETRA, VER EL EJEMPLO QUE ESTA ACA, OJO!!

while (contador <5) // para pedir 5 numeros!
{
	numero=prompt("Ingrese el numero: "); // no hay que hacer que se repitan...
	numero=parseInt(numero);	 //habia que parsearlo...aca, sino no andaba...
	contador ++; // una variable mas una constante... otro es una BANDERA...
	
	//LLEVA EL NOMBRE DE LA VARIABLE, OJO!!, SE VALIDA QUE SEA UN NUMERO Y EL ACUMULADOR SE PONE ABAJO CUANDO YA SABES QUE ES UN NUMERO!!
	while(isNaN(numero)) // ver bien esta parte!!! ojooo poner parse int ASIII ESTA OK, ARREGLADO X EL PROFE, SI ES TRUE, ENTRA ACA!!
	{
		numero=prompt("Ingrese el numero: "); 
		numero=parseInt(numero);// ES PARA QUE SI EL NUMERO ES NAN, SE LO PEDIS OTRA VEZ...OJJJJJJO
	}

	//ESTA PARTE SE PONE ACA UNA VEZ QUE EL NUMERO ESTA VALIDADO, O SEA QUE YA SABES QUE EL NUMERO NO VA A SER NAN...OJOOO!
	acumulador= acumulador + numero; //hay que ponerlo en el bucle para no repetir todo...por eso esta acumulador!!


}	//el acumulador es variable mas variable y guarda el resultado anterior!! cuando dice sumar es acumular en una variable los numeros!!
	//es igual que poner suma=suma + numero!!



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; // aca sacan el promedio...se puede dividir por el contador directamente...

}//FIN DE LA FUNCIÓN

/* 
OJOOOOOOO PARA VALIDAR QUE SOLO SE PUEDAN INGRESAR NUMEROS USAR isNaN(num) y para solo permitir ingrresar letras =! isNan(num)


*/