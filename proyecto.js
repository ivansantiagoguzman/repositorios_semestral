function telephoneCheck(str) {
    // Expresión regular para validar el formato del número de teléfono
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
    
    // Validar el número de teléfono con la expresión regular
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplos de uso
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("1 555-555-5555")); // true
  console.log(telephoneCheck("1 (555) 555-5555")); // true
  console.log(telephoneCheck("5555555555")); // true
  console.log(telephoneCheck("555-5555")); // false
  console.log(telephoneCheck("1 555)555-5555")); // false
  console.log(telephoneCheck("1 555 555 5555")); // true
  