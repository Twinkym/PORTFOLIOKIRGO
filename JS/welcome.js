// Fuente Original: http://timelessname.com/sandbox/matrix.html
// Adaptación realizada por [David De La Puente Enriquez], [20/04/2024]

// Variables Declaration & Variables Initialization & Initial Config
/*-----------------------------------------------*/

var canvas = document.getElementById("matrix-canvas");
canvas.height = window.screen.height;
canvas.width = window.screen.width;
var ctx = canvas.getContext("2d");
var columns = [];
var iteraciones = 0;
var mensajeMostrado = false;

// Functions Definition /*----------------------------------------------*/

// Inicialización de columnas

for (var i = 0; i < 256; i++) {
    columns[i] = 1;
}

// Funcion principal de la animación

function step() {
    // Limpia el canvas
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibuja los caracteres de la animación
    ctx.fillStyle = "#0f0";
    for (let index = 0; index < columns.length; index++) {
        var character = String.fromCharCode(3e4 + Math.random() * 33);
        ctx.fillText(character, index * 10, columns[index]);
        columns[index] = columns[index] > 758 + Math.random() * 1e4 ? 0 : columns[index] + 10;
    }

    // Contador de iteraciones
    iteraciones++;

    //  Muestra el mensaje despues del primer ciclo
    if (!mensajeMostrado && iteraciones >= 100) {
        mostrarMensaje();
        mensajeMostrado = true;
    }
}

// Funcion para mostrar el mensaje
function mostrarMensaje() {
    ctx.fillStyle = "fff";
    ctx.font = "20px Arial";
    ctx.fillText("Escoje la pastilla Azul ó la pastilla Roja", 50, 50);
}

// Inicio de la aplicación
setInterval(step, 63);

// Función para manejar la selección de la pastilla
function elegirPastilla(color) {
    if (color === 'azul') {
        // Redirect the user to the page specified in `target` attribute of button when clicked.
        window.location.href = 'index.html';
    } else if (color === 'roja') {
        // show triniti animation asking the user if that’s what he really wants
        alert('alert("¿Estás seguro? Ya has estado allí y sé que no quieres volver.\n\nPresiona Aceptar si quieres continuar,');
        location.reload();
    }
}