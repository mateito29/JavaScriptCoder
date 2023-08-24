/* 
//HTML
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");



  //mostrar el valor de cada boton en la pantalla
  botones.forEach(boton => {
    boton.addEventListener("click", () =>{
      const botonApretado = boton.textContent;
      //Al apretar el boton de borrar remplaza el valor a 0
      if(boton.id === "c"){
        pantalla.textContent = "0";
        return
      }

      if(pantalla.textContent.length >= 15){
        return;
      }
      //Si tenemos un solo caracter en la pantalla que vuelva a 0 sino que borre el ultimo digito
      if(boton.id === "borrar"){
        if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
          pantalla.textContent = "0"
        }else{
          pantalla.textContent = pantalla.textContent.slice(0, -1)
        }
          return;
      }
      //Evalua stings de operaciones matematicas en un solo string y no en numero
      if(boton.id === "igual"){
        try{
          pantalla.textContent = eval(pantalla.textContent)
        }catch{
          pantalla.textContent = "Error!!"
        }
        return;
      }

      //Si la pantalla tiene el valor de 0 o Error! se remplaza por el botonApretado
      if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
        pantalla.textContent = botonApretado;
      }else{
        pantalla.textContent += botonApretado;
      }
    })
  })



 // Función para cambiar entre dark-mode y light-mode
  function DarkMode() {
  const body = document.body;
  const darkButton = document.querySelector('#darkButton');
  const isDarkMode = body.classList.toggle('dark-mode');

  if (isDarkMode) {
    darkButton.textContent = '☀️';
  } else {
    darkButton.textContent = '🌙';
  }

  // Guardar el modo actual en LocalStorage
  localStorage.setItem('darkMode', isDarkMode);
}

// Evento para escuchar el click
darkButton.addEventListener('click', DarkMode);

// Verificar si hay un modo almacenado en LocalStorage y aplicarlo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const body = document.body;
  const darkButton = document.getElementById('darkButton');

  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkButton.textContent = '☀️';
  } else {
    darkButton.textContent = '🌙';
  }
});

 */


// script.js


const pantalla = document.querySelector(".pantalla");
const darkButton = document.getElementById('darkButton');
const body = document.body;

// Objeto que almacena el estado de la calculadora y los elementos del DOM
const calculadora = {
  valorEnPantalla: "0",
  darkMode: false,
  botonesNumeros: document.querySelectorAll('.num'), 
  botonesOperaciones: document.querySelectorAll('.operacion'), 
  botonIgual: document.querySelector('.igual'), 
  botonBorrar: document.querySelector('#borrar'), 
  botonC: document.querySelector('#c') 
};

// Función para actualizar el contenido de la pantalla
function actualizarPantalla() {
  pantalla.textContent = calculadora.valorEnPantalla;
}

// Función para manejar los clics en los botones numéricos y operaciones
function botonClick(event) {
  const botonApretado = event.target.textContent;

  if (calculadora.valorEnPantalla === "0" || calculadora.valorEnPantalla === "Error!") {
    calculadora.valorEnPantalla = botonApretado;
  } else {
    calculadora.valorEnPantalla += botonApretado;
  }

  if (calculadora.valorEnPantalla.length >= 15) {
    return;
  }

  actualizarPantalla();
}

// Función para calcular el resultado de la expresión
function calcularResultado() {
  try {
    const resultado = eval(calculadora.valorEnPantalla);
    const resultadoLimitado = String(resultado).slice(0, 15);
    calculadora.valorEnPantalla = resultadoLimitado;
  } catch {
    calculadora.valorEnPantalla = "Error!!";
  }
  actualizarPantalla();
}

// Función para borrar un dígito o reiniciar a cero si se borra todo
function borrar() {
  if (calculadora.valorEnPantalla.length === 1 || calculadora.valorEnPantalla === "Error!") {
    calculadora.valorEnPantalla = "0";
  } else {
    calculadora.valorEnPantalla = calculadora.valorEnPantalla.slice(0, -1);
  }
  actualizarPantalla();
}

// Función para borrar todo el contenido en pantalla
function borrarTodo() {
  calculadora.valorEnPantalla = "0";
  actualizarPantalla();
}

// Función para alternar entre el modo oscuro y claro
function toggleDarkMode() {
  calculadora.darkMode = !calculadora.darkMode;
  body.classList.toggle('dark-mode', calculadora.darkMode);
  darkButton.textContent = calculadora.darkMode ? '🌙' : '☀️';
  localStorage.setItem('darkMode', calculadora.darkMode);
}

darkButton.addEventListener('click', toggleDarkMode);

// Asignar eventos a los botones numéricos y de operaciones
calculadora.botonesNumeros.forEach(boton => {
  boton.addEventListener('click', botonClick);
});

calculadora.botonesOperaciones.forEach(boton => {
  boton.addEventListener('click', botonClick);
});

// Asignar eventos al botón de igual y los botones de borrar
calculadora.botonIgual.addEventListener('click', calcularResultado);
calculadora.botonBorrar.addEventListener('click', borrar);
calculadora.botonC.addEventListener('click', borrarTodo);




