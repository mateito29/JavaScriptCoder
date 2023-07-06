function sumarNumero(numero) {
    if (resultado < 999) {
      resultado += numero;
    } else {
      alert("No se pueden sumar más números. Se alcanzó el límite máximo (999).");
    }
  }
  
  function restarNumero(numero) {
    if (resultado > 0) {
      resultado -= numero;
    } else {
      alert("No se pueden restar más números. Se alcanzó el límite mínimo (0).");
    }
  }
  let resultado = 0;

  function operaciones() {
    while (true) {
      let operacion = prompt("Ingrese '+' para sumar, '-' para restar o 'q' para salir:");

      if (operacion === 'q') {
        break;
      }

      let numero = parseInt(prompt("Ingrese un número:"));
  
      if (operacion === '+') {
        sumarNumero(numero);
      } else if (operacion === '-') {
        restarNumero(numero);
      }
      alert("El resultado actual es: " + resultado);
    }
  }
  operaciones();
  