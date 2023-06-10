function generarSecuencia() {
    var numero = 1;
    var incremento = 1;
    var secuencia = [];
  
    do {
      secuencia.push(numero);
      numero += incremento;
      incremento++;
    } while (secuencia.length < 11);
  
    return secuencia.join(', ');
  }
  
  // resultado

  console.log(generarSecuencia());
  