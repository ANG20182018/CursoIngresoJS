function mostrar()
{
	var precio;
	var pDescuento;
	var descuentoenprecio;
	var elPrecioFinal;

	precio=prompt("Ingrese el precio del producto: ");
	precio=parseInt(precio); 
	pDescuento=prompt("Ingrese el porcentaje de descuento: ");
	pDescuento=parseInt(pDescuento);

	descuentoenprecio= (precio * pDescuento ) / 100;
	elPrecioFinal= precio - descuentoenprecio; 

	document.getElementById('elPrecioFinal').value=elPrecioFinal;


}
