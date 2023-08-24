var authenticatedUser = null;

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Aquí deberías tener la lógica de autenticación
  // Por ejemplo, comparar con una base de datos de usuarios y contraseñas

  if (/* autenticación exitosa */) {
    authenticatedUser = username;
    alert('Inicio de sesión exitoso');
  } else {
    alert('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
  }
}

function logout() {
  authenticatedUser = null;
  alert('Cierre de sesión exitoso');
}
