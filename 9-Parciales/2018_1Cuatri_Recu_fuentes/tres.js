function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var descuentoenDinero;
	var precioconDescuento;
	var iva;
	var elPrecioFinal;

	precio=prompt("Ingrese el precio: ");
	precio=parseInt(precio);
	porcentajeDescuento=prompt("Ingrese el porcentaje de descuento: ");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	descuentoenDinero=(porcentajeDescuento * precio) / 100;
	precioconDescuento=precio - descuentoenDinero;
	iva= (precio*21) / 100;
	elPrecioFinal= precioconDescuento + iva;

	alert("El descuento en dinero es de: " + descuentoenDinero + " El precio con el descuento es: " + precioconDescuento + " El iva es :" + iva);

	document.getElementById('elPrecioFinal').value=elPrecioFinal;


}
