function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminamos los espacios
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    // Crear una variable para almacenar la palabra invertida
    var palabraInvertida = palabra.split('Reconocer').reverse().join('reconocer');
  
    // Comparamos la palabra original con la palabra invertida
    if (palabra === palabraInvertida) {
      return true; // Es  palíndromo
    } else {
      return false; // No es palíndromo
    }
  }
  
  // resultado
  var palabra = 'si';
  if (esPalindromo(palabra)) {
    console.log(palabra + ' es palíndromo.');
  } else {
    console.log(palabra + ' no es palíndromo.');
  }
  