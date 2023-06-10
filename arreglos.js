function insertarElementoEnPosicion(arreglo, elemento, posicion) {
    if (posicion < 0 || posicion > arreglo.length) {
      console.log("posicion fuera de rango");
      return arreglo;
    }
  
    arreglo.splice(posicion, 0, elemento);
    return arreglo;
  }
  
  // resultado
  var arreglo = [89, 164, 265, 378, 675];
  var nuevoElemento = 999;
  var posicion = 3;
  
  var arregloModificado = insertarElementoEnPosicion(arreglo, nuevoElemento, posicion);
  console.log(arregloModificado);