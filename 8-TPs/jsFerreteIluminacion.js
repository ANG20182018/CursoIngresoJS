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
 	var cantidad; ///para definir las variables primero miras en la web para determinar los cuadros de texto q reciben info, despues el html y despues el ejercicio.
 	var precio;
 	var marca;          
 	
 	cantidad=document.getElementById('Cantidad').value; //aca a diferencia de los otros, te pone las comillas solas!! en los otros GDBID hay q ponerselas!
 	cantidad=parseInt(cantidad);
 	precio=(cantidad * 35); // SI VOY A HACER ESTO PRIMERO TIENE Q ESTAR DEFINIDA LA VARIABLE CANTIDAD Y DSP PRECIO...
 	precio=parseInt(precio); //ellos a esta variable la llamaron precio bruto...
 	marca=document.getElementById('Marca').value;
 	
 	
 	if (cantidad>=6)
 	{	
 		 precioconDescuento=precio * 0.5; //es mas facil expresar el porcentaje asi que hacer toda la cuenta *100/100, esto es el resultado directo de esa cuenta!
  	}
  	else if (cantidad==5 && marca=="ArgentinaLuz")
  	{
  		 precioconDescuento=precio * 0.6;
  	}
 	else if (cantidad==5) // asi se hace!!!!&& marca!="ArgentinaLuz") // OJOOOO ACA ESTABA MAL, NO HACE FALTA PONER ESTA PARTE POR QUE SOLO SI ES ARGENLUZ LEE ARRIBA SOLO...
 	{
 		precioconDescuento=precio * 0.7;
 	}
 	else if (cantidad==4 && (marca== "ArgentinaLuz" || marca=="FelipeLamparas"))
	{
 		precioconDescuento=precio * 0.75; //ojo aca con los porcentajes resolver cuenta( x 75 / 100) y es el total
 	}
	else if (cantidad==4) // && (marca!= "ArgentinaLuz" || marca!="FelipeLamparas")) //no se si hay otra forma de plantearlo sin repetir y poner !=, si ponia else aca se caia el programa y no lo concatenaba.
	{
 		precioconDescuento=precio * 0.8;
 	}
 	else if (cantidad==3 && marca=="ArgentinaLuz")
	{
 		precioconDescuento=precio * 0.85;
 	}
 	else if (cantidad==3 && marca== "FelipeLamparas")
	{
 		precioconDescuento=precio * 0.90;
 	}
 	else if (cantidad==3) // && (marca!= "ArgentinaLuz" || marca!="FelipeLamparas")) OJO CON ESTO, SI YA ENTRO ANTES ES OK NO HACE FALTA HACER DIFERENTE!
	{
 		precioconDescuento=precio * 0.95;
 	}
 	else if (cantidad <3) // aca tampoco puede hacer un else te arruina el codigo! /VER ESTO!
 	{
 		precioconDescuento=precio;
 	}

 	if (precioconDescuento > 120) 	//VER SI ESTA UBICADO OK ACA ESTA PARTE! Y SI EL CUADRO DE ALERT SALE CORRECTAMENTE COMO LO QUIEREN!
	{
 		IIBB= (precioconDescuento * 1.1) - precioconDescuento; //SI EN ESTA LINEA PONES UN ELSE IF NO ALNDA!
 		alert("Usted pago: " + IIBB + " de IIBB"); //aca lo multiplicaron x 0.1...OJOOOO MULTIPLICAR X 0.1 Y SIMPLIFICAS TODO!
 	}												// te saca solo los IIBB!!!! TENER CLARO ESTO!

  	 document.getElementById('precioDescuento').value=precioconDescuento;


//el hizo la variable precio final =precio bruto - descuento...despues calculo IIBB: 

}
