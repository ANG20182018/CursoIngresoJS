function mostrar()
{
	var preciooriginal; //IMPORTANTE, LAS VARIABLES NO SE ESCRIBEN CON ESPACIOS!
	var porcentajedescuento;
	var preciocondescuento;
	var iva;
	var preciofinal;

	preciooriginal=prompt("Ingresar el precio original:");
	porcentajedescuento=prompt("Ingresar el porcentaje de descuento:");

	preciocondescuento= (preciooriginal*porcentajedescuento)/100; // LA DIVISION SE PONE CON LA BARRA
	iva= (preciooriginal *21)/100;
	preciofinal= preciooriginal - preciocondescuento + iva;

	//FALTO TERMINAR...PERO PARECE ESTAR OK
	
}
