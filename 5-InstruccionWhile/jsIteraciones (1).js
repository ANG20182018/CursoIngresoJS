function mostrar()
{
	var contador;

	contador=0;

	while (contador<10)
	{
		contador ++; //= contador+1 ;
		console.log( "El contador es" + contador);
	}


}//FIN DE LA FUNCIÓN

/*   
A DIFERENCIA DEL IF EL WHILE EVALUA LA CONDICION Y CUANDO LLEGA AL FINAL, SE REPITE Y VUELVE A BUSCAR LA CONDICION...
si te olvidas la condicion del while, establecer el contador y la salida del dato no sale mas!!

var contador;

contador=0

while(contador<5) // tambien se usa dos ==...
{
	contador=contador+ 1 // si lo pones aca arriba va hasta el 5..., 
	console.log ("Mensaje" + contador);
	//aca se pone los datos para que salga la informacion...
	//se puede usar contador ++, el ++ le suma uno al anterior, pero no se pone contador=contador ++ ojo...SUPER IMP!!
	//si pones el contador=contador+ 1 suma 4 ojo!!!

*/