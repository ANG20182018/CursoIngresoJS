/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidad;
 	var marcas;
 	var precioDescuento;

 	precio=35;
 	precio=parseInt(precio);
  	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marcas=document.getElementById('Marca').value;


 	if(cantidad>=6)
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 50/100 ;
 	}
 	else if(cantidad>=5 && marcas =="ArgentinaLuz")
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 60/100; // warda con los porcentajes!
 	}
 	else
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 80/100; // aca hay un desc del 20!!
 	}
 	if (cantidad==4 && (marcas == "ArgentinaLuz" || marcas=="FelipeLamparas")) //me faltaba cerrar el parentesis! y repetir marcas, sino no lo leia!!ojo super imppp!!
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 80/100;
 	}
 	}
 	




}
