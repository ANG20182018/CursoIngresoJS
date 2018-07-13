function mostrar()
{
	var numero;

	numero=Math.floor(Math.random()*10)+1; //OJO LAS PALABRAS MATH EMPIEZAN CON M MAYUS SINO NO ANDAN!!

	alert("El numero random es:" + numero);

	

}//FIN DE LA FUNCIÓN
/*
 SUPER IMPORTANTE
 EXPLICACION RANDOM

 EN LA CONSOLA PUSO Math, ESO DESPLEGO LA LIBRERIA, SE FIJO EN LAS CARPETAS, DESPUES DE LAS CONSTANTES, 
 CUYO VALOR ES SIEMPRE EL MISMO, ESTAN TODAS LAS FORMULAS MATEMATICAS QUE EJECUTA JAVAS
 AHI BUSCO LA FUNCION RANDOM QUE ES:

 Math.floor(Math.random()* (max-min)) + min

 .floor es base por que redondean los numeros para abajo.
  
  tiene que redondear para abajo por que si al random no le asignas nada un valor toma valores
  automaticamente entre 0 y 1 pero no llega al 1.

  el min y max son los valores entre los cuales se quiere realizar la operacion ej entre 10 y 20
  TENER EN CUENTA QUE SIEMPRE SE LE PONE UN NUMERO MAS AL MAXIMO O SEA SI ES HASTA 20 SE PONE 21, SUPER IMPPPP!!!!
  POR LA EXPLICACION ANTERIOR Q CUENTA ENTRE 0 Y 1...




*/