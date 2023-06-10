// juego de roca, papel y tijeras:
function jugarRocaPapelTijeras(persona1, persona2) {
    persona1 = persona1.toLowerCase();
    persona2 = persona2.toLowerCase();
  
    if (persona1 === persona2) {
      return "Es un empate.";
    }
  
    switch (persona1) {
      case "roca":
        switch (persona2) {
          case "tijeras":
            return "Persona 1 gana.";
          case "papel":
            return "Persona 2 gana.";
        }
        break;
      case "papel":
        switch (persona2) {
          case "roca":
            return "Persona 1 gana.";
          case "tijeras":
            return "Persona 2 gana.";
        }
        break;
      case "tijeras":
        switch (persona2) {
          case "papel":
            return "Persona 1 gana.";
          case "roca":
            return "Persona 2 gana.";
        }
        break;
    }
  
    return "Opción inválida. Por favor, ingresa 'roca', 'papel' o 'tijeras'.";
  }
  
  // resultado:
  var resultado = jugarRocaPapelTijeras("tijeras", "roca");
  console.log(resultado);
  