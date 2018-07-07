
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingrese la base de su triangulo equilatero:");
	base=parseInt(base);
	altura=prompt("Ingrese la altura de su triangulo equilatero:");
	altura=parseInt(altura);

	superficie= (base * altura)/2;
	perimetro= base*3; 

	alert("La superficie del triangulo equilatero es: " + superficie + "y su perimetro es: " + perimetro);

}

/*BIEN HECHO EL EJERCICIO, SE ME COMPLICO CON EL TEMA DE LA TEORIA DE LOS TRIANGULOS,
COMO ES UN TRIANGULO EQUILATERO LA BASE ES LO QUE NECESITO SOLO PARA SAVAR EL PERIMETRO.*/