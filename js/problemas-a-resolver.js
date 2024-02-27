/*1) Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe miFuncion ("Hola Mundo") devolvera 10*/

export function cuentaCaracteres(cadena = " ") {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string") {
    console.error(`La frase ${cadena} no es una cadena de texto`);
  } else {
    let numeroCaracteres = cadena.length;
    console.log(numeroCaracteres);
  }
}

/*2) Programa uan funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolvera "Hola"*/

export function cortarCaracteres(cadena = " ", numero = 0) {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string") {
    console.error(`La frase ${cadena} no es una cadena de texto`);
  }
  if (typeof numero !== "number")
    console.error("Debes ingresar un numero valido");
  if (numero === 0) console.error("Debes ingresar un numero");
  if (Math.sign(numero) === -1)
    console.error("Debes ingresar un numero positivo");
  if (Number.isInteger(numero) === false)
    console.error("El numero debe ser entero");
  else {
    let cadenaCortada = cadena.slice(0, numero);
    console.log(cadenaCortada);
  }
}

/*3) Programa una funcion que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion ("Hola que tal", " ") devolvera ["hola","que","tal"]
 */

export function separarCadena(cadena = " ", separador = " ") {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string") {
    console.error(`La frase ${cadena} no es una cadena de texto`);
  } else {
    let cadenaSeparada = cadena.split(separador);
    console.log(cadenaSeparada);
  }
}

/*4) Programa una funcion que repita el texto X veces, pe. miFuncion("Hola Mundo", 3) Devolvera: Hola Mundo Hola Mundo Hola Mundo
 */

export function repetirCadena(cadena = " ", numero = 0) {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string") {
    console.error(`La frase ${cadena} no es una cadena de texto`);
  }
  if (typeof numero !== "number")
    console.error("Debes ingresar un numero valido");
  if (numero === 0) console.error("Debes ingresar un numero");
  if (Math.sign(numero) === -1)
    console.error("Debes ingresar un numero positivo");
  if (Number.isInteger(numero) === false)
    console.error("El numero debe ser entero");
  else {
    cadena = cadena + " ";
    let cadenaRepetida = cadena.repeat(numero);
    console.log(cadenaRepetida);
  }
}

/*5) Programa una funcion que invierta las palabras de una cadena de texto, pe. miFuncion ("Hola Mundo") devolvera "odnuM aloH"
 */

export function contarCadena(cadena = "", separador = "") {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string") {
    console.error(`La frase ${cadena} no es una cadena de texto`);
  } else {
    let cadenaContada = cadena.split(separador).reverse().join(separador);
    console.log(cadenaContada);
  }
}

/*6) Programa una funcion para contar el numero de veces que se repite una palabra dentro de un texto largo. pe. miFuncion("hola mundo adios mundo", "mundo") devolvera 2
 */

export function contarNumeroVecesRepitePalabra(
  cadena = "",
  palabraRepetir = ""
) {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  if (palabraRepetir === " ")
    console.error("Debes ingresar un texto del tipo string");
  if (typeof palabraRepetir !== "string")
    console.error(`La frase ${palabraRepetir} no es una cadena de texto`);
  else {
    let arr = cadena.split(" ");
    let numeroVeces = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === palabraRepetir) numeroVeces++;
    }
    console.log(numeroVeces);
  }
}

/*7) Programaa una funcion que valide si una palabra o frase dada, es un palindromo (que se lee igual al derecho y al reves) pe. miFuncion ("Salas") devolvera true */

export function esPalindromo(cadena = "") {
  if (cadena === " ") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  else {
    let cadenaLowCase = cadena.toLocaleLowerCase();
    let palabraInvertida = cadena.split("").reverse().join("");
    if (palabraInvertida !== cadena)
      console.log(`La palabra ${cadenaLowCase} NO es un palindromo`);
    else {
      console.log(`La palabra ${cadenaLowCase} es un palindromo`);
    }
  }
}

/*8) Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe. miFuncion ("xyz1","xyz2","xyz3","xyz4","xyz5", "xyz") devolvera: 1,1,2,3,4,5
 */

export function eliminarTexto(cadena = "", eliminarTexto = "") {
  if (cadena === "") console.error("Debes ingresar un texto del tipo string");
  if (typeof cadena !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  else {
    let textoRemplazado = cadena.replaceAll(eliminarTexto, "");
    console.log(textoRemplazado);
  }
}

/*9) Programa una funcion que obtenga un numero aleatorio entre 501 y 600*/

export function numeroAleatorio(min = undefined, max = undefined) {
  if (typeof min !== "number" || typeof max !== "number")
    console.error("El dato ingresado no es del tipo numero");
  if (Math.sign(min) === -1 || Math.sign(max) === -1)
    console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(min) === false || Number.isInteger(max) === false)
    console.warn("El numero ingresado no puede ser decimal");
  else {
    console.log("Todo bien");
    let numeroRandom = Math.ceil(Math.random() * (max - min) + min);
    console.log(numeroRandom);
  }
}

/*
10) Programa una funcion que reciba un numero y evalue si es capicua o no (que se lee igual en un sentido que en otro) pe. mifuncion(2002) devolvera true
*/

export function esCapicua(num = undefined) {
  if (typeof num !== "number") return console.warn("Debes ingresar un numero");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(num) === false)
    return console.error("El numero ingresado no puede ser decimal");
  else {
    let numCadena = num.toString(10);
    let esCapicua = numCadena.split("").reverse().join("");
    if (esCapicua === numCadena) console.log(`El numero ${num} es Capicua`);
    else {
      console.log(`El numero: ${num} NO es capicua`);
    }
  }
}

/* 11) Programa una funcion que calcule el factorial de un numero (El factorial de un entero positivo n, se define como el producto der todos los numeros enteros positivos desde el 1 hasta n, pe. miFuncion(5) devolvera 120)
 */

export function factorial(num = undefined) {
  if (typeof num !== "number") return console.warn("Debes ingresar un numero");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(num) === false)
    return console.error("El numero ingresado no puede ser decimal");
  let factorial = 1;
  for (let index = 1; index <= num; index++) {
    factorial = factorial * index;
  }
  console.log(factorial);
}

/*12) Programa una funcion que determine si un numero es primo (aquel que solo es divisible por si mismo y 1) o no pe. miFuncion(7) devolvera true */

export function esPrimo(num = undefined) {
  if (typeof num !== "number") return console.warn("Debes ingresar un numero");
  if (num === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(num) === false)
    return console.error("El numero ingresado no puede ser decimal");
  if (num === 1) return console.log(`El numero ${num} es un numero primo`);
  for (let index = 2; index < num; index++) {
    console.log(index);
    if (num % index === 0)
      return console.log(`El numero ${num} No es un numero primo`);
    else return console.log(`El numero ${num} es un numero primo`);
  }
}

/*13)Programa una funcion que determine si un numero es par o impar pe. miFuncion(29) devolvera impar
 */

export function parImpar(num = undefined) {
  if (typeof num !== "number") return console.warn("Debes ingresar un numero");
  if (num === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(num) === false)
    return console.error("El numero ingresado no puede ser decimal");
  if (num % 2 === 0) return console.log("par");
  else return console.log("impar");
}

/*14)Programa una funcion para convertir grados Celsius a Fahrenheit y viceversa pe. miFuncion (0°C) devolvera 32°F
 */
export function convertidorTemperatura(num = undefined, texto = "") {
  if (typeof num !== "number") return console.warn("Debes ingresar un numero");
  if (typeof texto !== "string")
    return console.error("Debes ingresar un dato de tipo texto");
  let regExp = new RegExp(/[CcFf]/),
    temperaturaConvertida = undefined;

  if (texto.match(regExp)) {
    let temperatura = texto.toLocaleLowerCase();
    console.log(temperatura);
    if (temperatura === "f") {
      temperaturaConvertida = ((num - 32) * 5) / 9;
      temperaturaConvertida = temperaturaConvertida.toFixed(2);
      console.log(
        `La temperatura ${num}${texto} convertida da: ${temperaturaConvertida}${"C"}`
      );
    }
    if (temperatura === "c") {
      temperaturaConvertida = (num * 9) / 5 + 32;
      temperaturaConvertida = temperaturaConvertida.toFixed(2);
      console.log(
        `La temperatura ${num}${texto} convertida da: ${temperaturaConvertida}${"F"}`
      );
    }
  } else return console.log("El dato ingresado no es una temperatura valida");
}

/*15) Programa una funcion para convertir numeros de base binaria a decimal y viceversa, pe.miFuncion(100,2) devolvera 4 base 10
 */

export function convertirBase(num = undefined, base = undefined) {
  if (typeof num !== "number" || typeof base !== "number")
    return console.warn("Debes ingresar un numero");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (Number.isInteger(num) === false)
    return console.error("El numero ingresado no puede ser decimal");
  if (base === 10 || base === 2) {
  } else return console.error("La base debe ser 2 o 10");
  let i = 2,
    arr = [],
    n = 0,
    arrFinal = [],
    numero2 = undefined,
    numberFinal = 0;
  if (base === 10) {
    do {
      console.log(arr[n]);
      arr[n] = num % 2;
      console.log(numero2);
      n++;
      i++;
      if (num === 2 || num === 3) {
        arr[n] = num / 2;
        i = +2;
      }
    } while (i < 2);
    arrFinal = arr.reverse().join("");
    numberFinal = parseInt(arrFinal);
    console.log(`${num} base 10 es igual a: ${numberFinal} base 2`);
  }
  if (base === 2) {
    arrFinal = num.toString().split("").reverse();
    console.log(arrFinal);
    do {
      numero2 = Math.pow(2, n);
      numberFinal += numero2 * arrFinal[n];
      n++;
    } while (n < arrFinal.length);
    console.log(`${num} base 2 es igual a: ${numberFinal} base 10`);
  }
}

/*16) Programa una funcion que devuelva el monto final despues de aplicar un descuento a una cantidad dada, pe. miFuncion (100,20) devolvera 800
 */

export function descuento(num = undefined, descuento = undefined) {
  if (num === undefined)
    return console.warn("Debe ingresar un valor a aplicar el descuento");
  if (num === 0) return console.log("El valor no puede ser 0");
  if (typeof num !== "number")
    return console.log("El dato ingresado no es un numero");
  if (Math.sign(num) === -1)
    return console.error("El numero ingresado debe ser positivo");
  if (descuento === undefined)
    return console.warn("Debe ingresar un valor a aplicar el descuento");
  if (descuento === 0) return console.log("El valor no puede ser 0");
  if (typeof num !== "number")
    return console.log("El descuento ingresado no es un descuento numerico");
  if (Math.sign(descuento) === -1)
    return console.error("El numero ingresado debe ser positivo");
  let descuentoAplicado = num - (descuento * num) / 100;
  console.log(
    `El descuento sobre: ${num} de ${descuento} da un total de: ${descuentoAplicado}`
  );
}

/*17)Programa una funcion que dada una fecha valida determine cuantos años han pasado hasta el dia de hoy, pe. miFuncion(new Date(1984,4,23)) devolvera 35 años (en 2020)
 */

export function aniosPasaron(num = undefined) {
  if (!num instanceof Date)
    return console.log("El dato ingresado no es una fecha");
  let fechaActual = Date.now(),
    num2 = Date.parse(num),
    tiempoPaso = (fechaActual - num2) / 60 / 60 / 60 / 24 / 365;
  console.log(fechaActual);
  console.log(num2);
  console.log(tiempoPaso.toString());
}

/*18) Programa una funcion que dada una cadena de texto cuente el numero de vocales y consonantes, pe miFuncion("Hola Mundo") devuelve Vocales: 4, Consonantes:5*/

export function vocalesConsonantes(frase = "") {
  if (frase === "") console.error("Debes ingresar un texto del tipo string");
  if (typeof frase !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  let regExpVocales = new RegExp(/[aeiouAEIOU]/),
    regExpConsonantes = new RegExp(
      /[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/
    ),
    vocales = 0,
    consonantes = 0,
    arr = frase.split("");
  for (let index = 0; index < frase.length; index++) {
    if (arr[index].match(regExpVocales)) vocales++;
    if (arr[index].match(regExpConsonantes)) consonantes++;
  }
  console.log(vocales, consonantes, arr);
}

/*19)Progrma una funcion que valide que un texto sea un nombre valido, pe. miFuncion("Jonatan MirCha") devolvera verdadero
 */
export function validarNombre(frase = "") {
  if (frase === "") console.error("Debes ingresar un texto");
  if (typeof frase !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  let regExp = new RegExp(/[a-zA-Z]+\s[a-zA-Z]+/);
  if (frase.match(regExp)) console.log("Si");
  console.log(frase, regExp);
}

/*20)Programa una funcion que valide que un texto sea un email valido, pe. miFuncion ("jonmircha@gmail.com") devolvera verdadero */

export function validarEmail(frase = "") {
  if (frase === "") console.error("Debes ingresar un texto");
  if (typeof frase !== "string")
    console.error(`La frase ${cadena} no es una cadena de texto`);
  let regExp = new RegExp(
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
  );
  if (frase.match(regExp)) console.log("Si");
  console.log(frase, regExp);
}

/*21) Programa una funcion que dado un array numerico devuelve otro aray con los numeros elevados al cuadrado pe. miFuncion([1,4,5]) devolvera[1,16,25]*/

export function elevarArray(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  let arr2 = [0, 0, 0];
  for (let index = 0; index < arr.length; index++)
    arr2[index] = Math.pow(arr[index], 2);
  console.log(arr, arr2);
}

/*22)Programa una funcion que daado un array devuelva el numero mas alto y el mas bajo de dicho array pe. miFuncion([1,4,5,99,-60]) devolvera ([99,-60])
 */

export function mayorMenor(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  let mayor = 0,
    menor = 0;
  for (let index = 0; index < arr.length; index++) {
    if (mayor < arr[index]) mayor = arr[index];
    if (menor > arr[index]) menor = arr[index];
  }
  console.log(`El numero mayor es: ${mayor}, el numero menor es: ${menor}`);
}

/*23) Programa una funcion que dado un array de numeros devuelve un objeto con 2 arreglos en el primero almacenara los numeros pares y en el segundo los impares, pe. miFuncion [(1,2,3,4,5,6,7,8,9,0)] devolvera {pares: [2,4,6,8,0] impares:[1,3,5,7,9]}
 */

export function parImparArr(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  const obj = {
    arr1: [],
    arr2: [],
  };
  arr.forEach((el) => {
    if (el % 2 === 0) {
      obj.arr1.push(el);
    } else {
      obj.arr2.push(el);
    }
  });
  console.log(obj);
}

/*24) Programa una funcion que dado un arreglo de numeros devuelva un objeto con dos arreglos, el primero tendra los numeros ordenados de forma ascendente y el segundo de forma desendiente, pe. miFuncion ([7,5,7,8,6]) devolvera {asc: [5,6,7,7,8] desc: [8,7,7,6,5]}
 */

export function ascDesc(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  const obj = {
    arr1: [],
    arr2: [],
  };
  arr.forEach((el) => {
    obj.arr1.push(el);
    obj.arr1.sort();
    obj.arr2.push(el);
    obj.arr2.sort(function (a, b) {
      return b - a;
    });
  });
  console.log(obj);
}

/*25) Programa una funcioon que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x",10,"x",2,"10",true,true] devolver["x",10,2,"10",true])
 */

export function eliminarDuplicados(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  const result = arr.filter((index, el) => {
    return arr.indexOf(index) === el;
  });
  console.log(result);
}

/*26)Programa una funcion que dado un arreglo de numeros obtenga el primedio, pe. promedio ([9,8,7,6,5,4,3,2,1,0]) devolvera 4.5 */

export function promedio(arr = []) {
  if (!arr instanceof Array) return console.log("No es un Array");
  let suma = 0,
    promedio = 0;
  arr.forEach((el) => {
    console.log(el);
    suma = el + suma;
    promedio = suma / arr.length;
  });
  console.log(promedio);
}

/*27) Programa una clase llamada pelicula.
La clase recibira un objeto al momento de instanciarse con los siguientes datos: id de la pelicula en IMDB, titulo, director, año de estreno, pais o paises de origen, genero y clasificacion en IMBD
 -todos los datos son obligatorios
 -valida que el id IMBD tenga 9 caracteres, los primeros 2 sean letras y los otros 7 restantes numeros
 -valida que el titulo no revase los 100 caracteres
 -validar que el director no rebase los 50 caracteres
 -validar que el año de estreno sea un numero entero de 4 digitos
 -validar que el pais o paises sea introducidos en forma de arreglo
 -validar que los generos sea introducidos en forma de arreglo
 -validar que los generos introducidos esten dentro de los generos aceptados
 -Crea un metodo estatico que devuelva los generos aceptados
 -Valida que la calificacion sea un numero entre 0 y 10 pudiendo ser decimal de una posicion
 -crea un metodo que devuelva toda la ficha tecnica de la pelicula
 -a partir de un arreglo con la informacion de 3 peliculas deneta 3 instancias de forma automatizada e imprime la ficha de cada pelicula

 generos aceptados = action, adult, adventure, animation, biography, comedy, crime, documentary, drama, family, fantasy, film noir, game show, history, horror, musical, music, mystery, news, reality, tv, romance, sci-fi, short, sport, talk show, thriller, war, western
 - */

export class pelicula {
  constructor(
    id,
    titulo,
    director,
    anioDeEstreno,
    paisPaises,
    genero,
    clasificacion
  ) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anioDeEstreno = anioDeEstreno;
    this.paisPaises = paisPaises;
    this.genero = genero;
    this.clasificacion = clasificacion;
  }

  id = () => {};
}
