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
 	//var precioDescuento; va o no?? /LA SOLUCION ES ANIDAR LOS IF Y LOS ELSE!

 	precio=35; // siempre que es un numero se recomienda parsearlo!
 	precio=parseInt(precio);
  	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marcas=document.getElementById('Marca').value;

 	
 	if(cantidad >= 6) 
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 50 /100;
 	}

 					
 	else if(cantidad == 5 && marcas =="ArgentinaLuz") //el error esta en que ejecuta el if 1, despues pasa al if 2 y como es false ejecuta el else, en los errores aparecen todas las ejecuciones del else...
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 60 /100; // warda con los porcentajes!
 	}
 	else
 			{
 				document.getElementById('precioDescuento').value= (precio * cantidad) * 70/100; // aca hay un desc del 30!!
 			}
	
 	
 	if(cantidad==4 && (marcas == "ArgentinaLuz" || marcas=="FelipeLamparas")) //me faltaba cerrar el parentesis! y repetir marcas, sino no lo leia!!ojo super imppp!!
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 75/100;
 	}
 	else
 			{
 				document.getElementById('precioDescuento').value= (precio * cantidad) * 80/100;
 			}


 	if(cantidad==3 && marcas== "ArgentinaLuz")
 	{
 		document.getElementById('precioDescuento').value= (precio * cantidad) * 85/100;
 	}
 	
 	else if (cantidad==3 && marcas=="FelipeLamparas")
 			{
 				document.getElementById('precioDescuento').value= (precio * cantidad) * 90/100;
 			}
 	
 	else
 			{
 				document.getElementById('precioDescuento').value= (precio * cantidad) * 95/100;
 			}
 	

 	 }
 	


    /*SUPER IMPORTANTE ! UNO SOLO ES PARA NEGARLO, PARA NEGAR LA FRASE   EJ: SE PONE ENTRE UNA ECUACION ANTES DE TODO, Y SI LA ECUACION DA TRUE, LO CONVIERTE EN FALSE

		if ((document.getElementById('precioDescuento').value) > 120 )

 			
 				document.getElementById('precioDescuento').value= (document.getElementById('precioDescuento').value) * 110/100;
 				alert(" Se agrego 10% mas de IIBB");


// los if se separan en condiciones, pero si la condicion incluye lo mismo se hace if else, pero no hay que hacer if else sino comparten condicion!
//si te equivocas y pones ; aca se ejecuta la parte de abajo aisladamente...
    
	explicacion en clase de apoyo:

	EL DEFINIO VAR PRECIO BRUTO=(CANTIDAD DE LAMPARAS X 35) OJOOOO SUPPPPP IMP

	ESTABLECIO: TOTAL CON DESCUENTO = TOTAL BRUTO - DESCUENTO;

	Y MUESTRA UNICAMENTE AL FINAL UN SOLO GET ELEMENT= TOTAL CON DESCUENTO  SUP IMP!

	IF CONDICION=

	DESCUENTO= TOTAL BRUTO * 0.5 (PARA HACER EL 50% DE DESCUENTO) (0.4 X PRECIO BRUTO PARA SACAR EL 40% DE DESCUENTO!)
	(EL VALOR DE DESCUENTO SE LO DA DESPUES DE LA EJECUCUIN DEL IF)


    */


