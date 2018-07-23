var eleccionMaquina; //SE DEFINEN ACA PARA DEFINIRLAS COMO GLOBALES, PUEDEN SER ACCEDIDAS DESDE CUALQUIERA DE LAS FUNCIONES!
var ContadorDeEmpates=0; //SI SE HACEN INDIVIDUALEMNTE SON VARIABLES LOCALES DE ESAS FUNCIONES!, FUERA DE ELLA NADIE SE ENTERA
var ContadorDeGanadas=0; //NO SE PUEDEN NOMBRAR VARIABLES LOCALES CON LAS GLOBALES, SE PISAN Y SIEMPRE VAN A PREVALECER LAS GLOBALES!
var ContadorDePerdidas=0; //SE DECLARAN AFUERA PARA LLEVAR LOS CONTADORES DESDE CUALQUIERA DE LAS FUNCIONES! SIN TENER QUE HACERLO INDIVIDUALMENTE!

function comenzar()
{
	eleccionMaquina= Math.floor(Math.random() * 3) + 1; //aca la variable maquina es global, ya la leen todos!
													
	
	alert(eleccionMaquina);//Genero el número RANDOM entre 1 y 3
	 	
}//FIN DE LA FUNCIÓN
function piedra() //ACUMULADOR : SUMA DOS VARIABLES DISTINTAS...A LA VARIABLE MISMA SE LE SUMA OTRA VARIABLE!
{
	if (eleccionMaquina==1) // BANDERA: TOMA VALOR BOOLEAN, Y SIRVE PARA USARLO EN UN IF...BANDERA, HACE UNA VARIABLE DE BANDERA, SE USA UNA VEZ PARA ENTRAR UN DATO Y LISTO!.
	{
		alert("Piedra y Piedra, empato..."); // el contador se puede poner de varias maneras, cuando a una variable se le suma una constante, 1) contador+=1; 2) contador++ 3) o ++ contador .. en una te lo suma primero y en la otra lo muestrra y lo suma!
		ContadorDeEmpates=ContadorDeEmpates +1; //o contador++;
	}
	else if (eleccionMaquina==2)
	{
		alert("Piedra y papel, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1; //O CONTADOR ++...
	}
	else
	{
		alert("Piedra y tijera, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1; //O CONTADOR++
	
	}
	comenzar();	//OJO SUPER IMP...ACA REPITE LAS FUNCIONES, TIENE Q ESTAR NOMBRADO IGUAL Q LAS FUNCIONES!
	mostrarResultado(); //CADA VEZ QUE PASA POR ACA SE EJECUTA EL CODIGO OTRA VEZ !!!, LAS FUNCIONES HACEN UNA SOLA COSA...NO HAY QUE HACER FUNCIONES QUE HAGAN VARIAS COSAS A LA VEZ!

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina==2)
	{
		alert("Papel y papel, empato...");
		ContadorDeEmpates=ContadorDeEmpates +1;
	}
	else if (eleccionMaquina ==3)
	{
		alert("Papel y tijera, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else
	{
		alert("Papel y piedra, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	comenzar();	//OJO SUPER IMP...ACA REPITE LAS FUNCIONES, TIENE Q ESTAR NOMBRADO IGUAL Q LAS FUNCIONES!
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==3)
	{
		alert("Tijera y Tijera, empato...");
		ContadorDeEmpates=ContadorDeEmpates +1;
	}
	else if (eleccionMaquina==1)
	{
		alert("Tijera y piedra, perdio...");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else
	{
		alert("Tijera y papel, gano...");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	comenzar();	//OJO SUPER IMP...ACA REPITE LAS FUNCIONES, TIENE Q ESTAR NOMBRADO IGUAL Q LAS FUNCIONES!
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	//PONER X GET ELEMENT CUANTAS VECES GANO, PERDIO O EMPATO,,,HAY Q MOSTRAR X GET ELEMENT LOS CONTADORES!
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('empatadas').value=ContadorDeEmpates; //OJO ACA HAY QUE IR AL HTML Y COPIAR EL PARENTESIS DEL GET ELEMENT, NO IMPORTA QUE DIGA READ ONLY
	document.getElementById('perdidas').value=ContadorDePerdidas;

}