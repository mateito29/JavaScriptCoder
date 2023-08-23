
//Funcion del formulario
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const nameInput = document.getElementById("nameInput");
const titleForm = document.getElementById("titleForm");

signIn.onclick = function(){
  nameInput.style.maxHeight = "0";
  titleForm.innerHTML = "Hola de Nuevo!";
  signUp.classList.add("disable");
  signIn.classList.remove("disable");
}
signUp.onclick = function(){
  nameInput.style.maxHeight = "60px";
  titleForm.innerHTML = "Registro";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
}