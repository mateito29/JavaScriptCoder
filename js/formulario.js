
// Obtener referencias a elementos del DOM
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const nameInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("contraseña");
const titleForm = document.getElementById("titleForm");

// Función para redirigir al index.html con un retraso
function redirectIndex(delay) {
  setTimeout(function () {
    window.location.href = "./pages/calculadora.html";
  }, delay);
}

// Función para guardar un usuario en localStorage
function guardarUsuario(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Función para buscar un usuario por su email y contraseña en localStorage
function buscarUsuario(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    (user) => user.email === email && user.password === password
  );
}

// Manejador de evento para el botón SignIn
signIn.onclick = function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email && password) {
    // Verificar si el campo de nombre está visible o si se encuentra el usuario
    if (nameInput.style.maxHeight !== "0" || buscarUsuario(email, password)) {
      nameInput.style.maxHeight = "0";
      titleForm.innerHTML = "Bienvenido!";

      const user = buscarUsuario(email, password);

      if (user) {
        Swal.fire("Inicio de sesión exitoso");
        redirectIndex(1000); // Redirigir después de mostrar la alerta
      } else {
        Swal.fire("Credenciales incorrectas. Por favor, verifique sus datos.");
      }
    } else {
      Swal.fire("Credenciales incorrectas. Por favor, verifique sus datos.");
    }
  } else {
    Swal.fire("Por favor, complete todos los campos requeridos.");
  }
};

// Manejador de evento para el botón SignUp
signUp.onclick = function () {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (name && email && password) {
    nameInput.style.maxHeight = "60px";
    titleForm.innerHTML = "Bienvenido!";

    // Agregar el usuario a localStorage
    guardarUsuario({ name, email, password });
    Swal.fire("Registro exitoso");
    redirectIndex(1000); // Redirigir después de mostrar la alerta
  } else {
    Swal.fire("Por favor, complete todos los campos requeridos.");
  }
};
