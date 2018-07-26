function mostrar()
{

var sexo;

sexo = prompt("ingrese f ó m .");

									//si pones o aca se crea un bucle infinito...por que siempre entra en los 2 lados!
while (sexo != "f" && sexo != "m") // siempre se pone lo que no es para que se repita y fijarse que tiene q estar como string!!
{
	sexo = prompt("ingrese f ó m .");
}


if (sexo=="f")
{
	sexo = "Femenino";
}
else (sexo == "m")
{
	sexo= "Masculino"; //ACA TIENE QUE IR EN STRING PARA Q EL GET ELEMENT LO DEVUELVA...
}

document.getElementById('Sexo').value=sexo;


}