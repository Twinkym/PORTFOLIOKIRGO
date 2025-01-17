// Fuente Original: http://timelessname.com/sandbox/matrix.html
// Adaptación realizada por [David De La Puente Enriquez], [20/04/2024]

// Variables Declaration & Variables Initialization & Initial Config
/*-----------------------------------------------*/

var canvas = document.getElementById("matrix-canvas");
var ctx = canvas.getContext("2d");
var columns = [];

// Functions Definition /*----------------------------------------------*/

// Inicialización de columnas

for (var i = 0; i < canvas.width / 10; i++) {
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

    //  Muestra el mensaje despues del primer ciclo
    if (iteraciones == 150) {
        mostrarMensaje();
    }
}


// Función para mostrar el mensaje después de un tiempo determinado
function mostrarMensaje() {
    // Define el texto de bienvenida
    var welcomeText = "Bienvenido a la matrix de Kirgo";

    // Calcula el ancho del texto de bienvenida
    var welcomeTextWidth = ctx.measureText(welcomeText).width;

    // Calcula el espacio entre columnas para el texto de bienvenida
    var spaceBetweenColumns = (canvas.width - welcomeTextWidth) / (welcomeText.length + 1);

    // Calcula las posiciones de las columnas para el texto de bienvenida
    var columnsToShowText = [];
    for (var i = 0; i < welcomeText.length; i++) {
        columnsToShowText.push(spaceBetweenColumns * (i + 1));
    }

    // Dibuja el texto de bienvenida en las columnas seleccionadas
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    columnsToShowText.forEach(function (column, index) {
        ctx.fillText(welcomeText[index], column, canvas.height / 2 + index * 20);
    });

// Función para mostrar las pastillas después de mostrar el mensaje de bienvenida
function mostrarPastillas() {
    var pastillas = document.querySelector('.pill-container');
    pastillas.style.display = 'flex';
}
}


// Función para manejar la selección de la pastilla
function elegirPastilla(color) {
    if (color === 'azul') {
        // Redirect the user to the page specified in `target` attribute of button when clicked.
        window.location.href = 'home.html';
    } else if (color === 'roja') {
        // show triniti animation asking the user if that’s what he really wants
        alert('alert("¿Estás seguro? Ya has estado allí y sé que no quieres volver.\n\nPresiona Aceptar si quieres continuar,');
        // location.reload();
    }
}

// Inicio de la aplicación
setInterval(step, 63);