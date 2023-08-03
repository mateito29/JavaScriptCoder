
//HTML
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const boton = document.querySelector(".boton")

  //mostrar el valor de cada boton en la pantalla
  botones.forEach(boton => {
    boton.addEventListener("click", () =>{
      const botonApretado = boton.textContent;
      //Al apretar el boton de borrar remplaza el valor a 0
      if(boton.id === "c"){
        pantalla.textContent = "0";
        return
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
          pantalla.textContent = "Error!"
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


