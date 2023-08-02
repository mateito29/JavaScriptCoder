/* 

function calculo(operacion,num1,num2,resultado){
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

function multiplicar (num1, num2){
  return num1 * num2;
}

function dividir (num1, num2){
  return num1 / num2;
}

let continuar = true;


while (continuar) {
 
  let operacion = prompt("Ingrese el tipo de operación (+ para sumar, - para restar, * para multiplicar, / para dividir o 'salir' para terminar)");

  if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
  
    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));
    
    
    let resultado;
    if (operacion === "+") {
    resultado = sumar(num1, num2);
    } else if(operacion === "*"){
      resultado = multiplicar(num1, num2);
    }else if(operacion === "/"){
      resultado = dividir(num1, num2);
    } else{
      resultado = restar (num1, num2)
    }

    const operacionNueva = new Calculo(operacion,num1,num2,resultado)
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

 */


//HTML
const displayVSumado = document.getElementById("valor-sumado");
const displayVActual = document.getElementById("valor-actual");
const botonNumero = document.querySelectorAll(".numero");
const botonOperador = document.querySelectorAll(".operador");
//parte de la respuesta coder
const botonResultado = document.getElementById("btn-resultado")
botonResultado.addEventListener('click', calcularTotal);

function calcularTotal(){

}



//DARK MODE
const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor(){
    body.classList.toggle ("dark-mode");
    if (body.classList.contains("dark-mode")){
        
    colorModeButton.innerText = " ☀️"
    }else{
        colorModeButton.innerText = " 🌙"
    }
}


//RESPUESTA CODERASK

//capturar tipo de operacion
botonOperador.forEach(opBtn => {
  opBtn.addEventListener('click', calcular);
});

function calcular(e){
  e.preventDefault();

  console.log(e.target.id)

  displayVSumado.innerText += e.target.innerText
}
//capturar numeros
botonNumero.forEach(num => {
  num.addEventListener('click', registrarNumero);


})

function registrarNumero(e){
  console.log(e.target.innerText)
  displayVSumado.innerText += e.target.innerText
}


