/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad = true;
	var sexo;
	var estadoCivil;
	var sueldoBruto= true; // sino esta asi para iniciar, es undefined...
	var numeroLegajo= true; // sino esta asi para iniciar, es undefined...
	var nacionalidad; 

	// OJJJJJJJO !EL PROBLEMA ESTA SI NO SE INGRESA OK EN LAS VARIABLES SEXO, ESTADO CIVIL Y NACIONALIDAD, LAS OTRAS ANDAN OK LAS 2...
	//Y SON LOS CASOS DONDE DENTRO DEL WHILE HAY OTRA FUNCION IF O SWITCH, ESE ES EL ERROR! NO SE PODRA USAR DENTRO DEL WHILE?


	//edad
	while (edad <18 || edad > 90) //anda ok con true, pero si pones la condicion directa pone true en el cuadro de texto...
	{
		edad=prompt("Ingrese su edad...:"); // aca no va break por que no permite repetir la linea de codigo si esta mal...
		//OJOOO NO SE COMO HACER PARA EVITAR QUE INGRESEN UNA LETRA, SI INGRESAN UNA LETRA, ENTRA...!
	}

	//sexo
	while (sexo != "f" || sexo != "m") // era &&, con || repetia siempre el programa...no era asi!!
	{
		sexo=prompt("Ingrese su sexo...:"); //se repetia siempre en esta linea, aunque ya asignaba sexo...

		
			if (sexo=="m")
			{
			sexo="Masculino";
			} 
			else if (sexo == "f")
			{
			sexo="Femenino";
			} 

	break; //habia que poner break aca, sino no paraba, lo que pasa es q no se por q se repetia siempre...
	}
	//estado civil

	while (estadoCivil != 1 || estadoCivil != 2 || estadoCivil != 3 || estadoCivil != 4)
	{
		estadoCivil=prompt("Ingrese su estado civil...");
		estadoCivil=parseInt(estadoCivil);

			switch (estadoCivil)
			{
				case 1:
				estadoCivil="soltero"; // sino estan en string me decia variable undefined...
				break;
				case 2:
				estadoCivil="casado";
				break;
				case 3:
				estadoCivil="divorciados";
				break;

				default:
				estadoCivil="viudos";
				break;

		}
				break; // ojo aca tiene q estar! en eso me habia equivocado antes, por eso al abrir un case, siempre poner el break!
	}
	//sueldo bruto
	
	while (sueldoBruto < 8000)
	{
		sueldoBruto=prompt("Ingrese su sueldo bruto: ");

	}
	//legajo
	
	while (numeroLegajo < 1111 || numeroLegajo > 9999) // ver si esta ok!
	{
		numeroLegajo=prompt("Ingrese su numero de legajo...:");
	}
	//nacionalidad

	while (nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N")
	{
		nacionalidad=prompt("Ingrese su nacionalidad...");

			if (nacionalidad =="A")
			{
			nacionalidad="Argentina";
			}
			else if (nacionalidad = "E")
			{
			nacionalidad = "Extranjero";
			}
			else if ( nacionalidad= "N") // si ponia else entraba aca cualquier letra...ver si esta ok!
			{
			nacionalidad="Nacionalizado";
			}
			break; // OJO, CUANDO PONES OTRA FUNCION DENTRO DEL WHILE, TIENE QUE ESTAR EL BREAK AL FINAL...
	}

			

document.getElementById('Edad').value=edad; 
document.getElementById('Sexo').value=sexo; 
document.getElementById('EstadoCivil').value=estadoCivil;
document.getElementById('Sueldo').value=sueldoBruto;  
document.getElementById('Legajo').value=numeroLegajo;
document.getElementById('Nacionalidad').value=nacionalidad;
}
