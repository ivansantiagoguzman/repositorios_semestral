function resolverEcuacionCuadratica(a, b, c) {
    var discriminante = b * b - 4 * a * c;
    var soluciones = [];
  
    if (discriminante < 0) {
      soluciones.push("No existe soluciones .");
    } else if (discriminante === 0) {
      var x = -b / (2 * a);
      soluciones.push("Existe una solución: x = " + x);
    } else {
      var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      soluciones.push("La solucion es: x1 = " + x1 + ", x2 = " + x2);
    }
  
    return soluciones;
  }
  
  // resultado
  var a = parseFloat(prompt("Ingresar el valor de a:"));
  var b = parseFloat(prompt("Ingresar el valor de b:"));
  var c = parseFloat(prompt("Ingresar el valor de c:"));
  
  var soluciones = resolverEcuacionCuadratica(a, b, c);
  
  console.log("Resultado:");
  soluciones.forEach(function(solucion) {
    console.log(solucion);
  });
  