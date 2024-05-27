
var mainMenu;
var mainMenu2;
var mainMenu3;
var imagen;
var imagen2;
var imagen3;
var imagen4;
var ready;
var audio;
var audio2;
var audio3;
var audio4;
var ready2;
var intriga;
var emocion;
var conexion;
var historias;
var hogar;
var secretos;
var historias1;
var hogar1;
var secretos1;
var ready3;
var musica;
var sonido;

function MainMenuSetup() {
    question1 = document.getElementById("question1");
    question2 = document.getElementById("question2");
    question3 = document.getElementById("question3");
    imagen = document.getElementById("imagen");
    imagen2 = document.getElementById("imagen2");
    imagen3 = document.getElementById("imagen3");
    imagen4 = document.getElementById("imagen4");
    ready = document.getElementById("ready");
    audio = document.getElementById("audio");
    audio2 = document.getElementById("audio2");
    audio3 = document.getElementById("audio3");
    audio4 = document.getElementById("audio4");
    ready2 = document.getElementById("ready2");
    intriga = document.getElementById("intriga");
    emocion = document.getElementById("emocion");
    conexion = document.getElementById("conexion");
    historias = document.getElementById("historias");
    hogar = document.getElementById("hogar");
    secretos = document.getElementById("secretos");
    historias1 = document.getElementById("historias1");
    hogar1 = document.getElementById("hogar1");
    secretos1 = document.getElementById("secretos1");
    ready3 = document.getElementById("ready3");
    musica = document.getElementById("musica");
    

    // Inicialmente, ocultamos el segundo menú
    question2.style.display = "none";
    question3.style.display = "none";


    //Menu question1
    imagen.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen4.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen2.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen4.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen3.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen3.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen4.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen4.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen4.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question1.style.display = "none";
        question2.style.display = "block";
    }

    //Menu question2
    audio.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    audio2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }
    audio3.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    audio4.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question2.style.display = "none";
        question3.style.display = "block";
    }

    //Menu question3
    //primera fila
    intriga.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        intriga.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        historias.style.backgroundColor = "rgba(240, 239, 239, 0)";
        historias1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    historias.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        intriga.style.backgroundColor = "rgba(240, 239, 239, 0)";
        historias.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        historias1.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    historias1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        intriga.style.backgroundColor = "rgba(240, 239, 239, 0)";
        historias.style.backgroundColor = "rgba(240, 239, 239, 0)";
        historias1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //segunda fila
    emocion.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        emocion.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        hogar.style.backgroundColor = "rgba(240, 239, 239, 0)";
        hogar1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    hogar.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        emocion.style.backgroundColor = "rgba(240, 239, 239, 0)";
        hogar.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        hogar1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    hogar1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        emocion.style.backgroundColor = "rgba(240, 239, 239, 0)";
        hogar.style.backgroundColor = "rgba(240, 239, 239, 0)";
        hogar1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //tercera fila
    conexion.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        conexion.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        secretos.style.backgroundColor = "rgba(240, 239, 239, 0)";
        secretos1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    secretos.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        conexion.style.backgroundColor = "rgba(240, 239, 239, 0)";
        secretos.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        secretos1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    secretos1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        conexion.style.backgroundColor = "rgba(240, 239, 239, 0)";
        secretos.style.backgroundColor = "rgba(240, 239, 239, 0)";
        secretos1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready3.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question3.style.display = "none";
        question1.style.display = "block";
    }

    //Botones de musica
    musica.onclick = () => {
        sonido = new Audio("./sound/Blob.mp3");
        sonido.volume = .5; 
        sonido.play();
    }
}
