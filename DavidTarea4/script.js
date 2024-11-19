document.getElementById('name-button').onclick = function() {
    var name = prompt("Por favor, ingresa tu nombre:");
    if (name) {
        document.getElementById('welcome-message').innerText = "Bienvenido, " + name + "!";
    }
};

window.onload = function() {
    // Cargar la imagen inicial (puedes modificar esta parte según sea necesario)
    var initialImage = document.getElementById('initial-image');
    initialImage.style.display = 'block'; // Muestra la imagen inicial
};

document.getElementById('name-button').onclick = function() {
    var name = prompt("Por favor, ingresa tu nombre:");
    if (name) {
        document.getElementById('welcome-message').innerText = "Bienvenido, " + name + "!";
        // Podrías insertar aquí lógica adicional, como cambiar la imagen
    }
};

