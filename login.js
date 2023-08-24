
    var users = [
        { username: 'usuario1', password: 'contrasena1' },
        { username: 'usuario2', password: 'contrasena2' },
        // Agrega más usuarios y contraseñas aquí
      ];
      
      function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
      
        var authenticatedUser = users.find(function(user) {
          return user.username === username && user.password === password;
        });
      
        if (authenticatedUser) {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
        }
      }


  