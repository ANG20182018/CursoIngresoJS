function mostrar()
{

	var contador=0;
	var acumulador=0; // el acumulador suma las variables y las guarda!
	var numero;
	var suma;
	
	

while (contador <5) // para pedir 5 numeros!
{
	numero=prompt("Ingrese el numero: "); // no hay que hacer que se repitan...
	numero=parseInt(numero);	 //habia que parsearlo...aca, sino no andaba...
	contador ++; // una variable mas una constante... otro es una BANDERA...
	acumulador= acumulador + numero; //hay que ponerlo en el bucle para no repetir todo...por eso esta acumulador!!
}	//el acumulador es variable mas variable y guarda el resultado anterior!! cuando dice sumar es acumular en una variable los numeros!!
	//es igual que poner suma=suma + numero!!



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; // aca sacan el promedio...se puede dividir por el contador directamente...

}//FIN DE LA FUNCIÓN