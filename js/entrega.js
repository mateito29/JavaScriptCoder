
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