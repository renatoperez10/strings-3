/* Crea tu función aquí */
function analizaPalabras(palabras) {
  for (const i in palabras) {
    console.log("#######")
    console.log("Palabra " + ((parseInt(i) + 1)) + ": " + palabras[i]);
    console.log("Nº de caracteres: " + palabras[i].length);
    console.log("Deletreo: " + palabras[i].split("").join("-"));

    let tipoNumero = "";
    if ((palabras[i].length % 2) === 0) {
      tipoNumero = "par";
    } else {
      tipoNumero = "impar";
    }

    let mayuscula = "";
    if ((palabras[i].charAt(0).search(/[A-Z]/g)) === 0) {
      mayuscula = "empieza";
    } else {
      mayuscula = "no empieza";
    }

    console.log("La palabra es " + tipoNumero + " y " + mayuscula + " por mayúsculas")

    let contiene = "";
    if ((palabras[i].search("ble")) === -1) {
      contiene = "no";
    } else {
      contiene = "sí";
    }

    console.log("La palabra " + contiene + " contiene 'ble'")
  }
}
