

function constructor(operacion,num1,num2,resultado){
  this.operacion=operacion;
  this.num1=num1;
  this.num2=num2;
  this.resultado=resultado;
}

const arrayOperaciones = []


function sumar(num1, num2) {
  return num1 + num2;
}


function restar(num1, num2) {
  return num1 - num2;
}


let continuar = true;


while (continuar) {
 
  let operacion = prompt("Ingrese el tipo de operación (+ para sumar, - para restar, o 'salir' para terminar)");

  if (operacion === "+" || operacion === "-") {
  
    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));
    
    
    let resultado;
    if (operacion === "+") {
    resultado = sumar(num1, num2);
    } else {
    resultado = restar(num1, num2);
    }
    const operacionNueva = new constructor(operacion,num1,num2,resultado)
    arrayOperaciones.push(operacionNueva)
    
    alert("El resultado es: " + resultado);
  } else if (operacion === "salir") {
   
    continuar = false;
    const listado = arrayOperaciones.map(calculo => ` Operacion: ${calculo.operacion}, NumeroUno: ${calculo.num1}, NumeroDos: ${calculo.num2}, Resultado: ${calculo.resultado}`);
    alert(listado.join('\n'));
  } else {
    alert("Operación no válida. Por favor, ingrese + para sumar, - para restar o 'salir' para terminar.");
  }
  
}

