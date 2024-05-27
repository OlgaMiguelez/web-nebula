
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
var sonido = new Audio("./sound/432 Hz .m4a");
var sonido2 = new Audio("./sound/528 Hz.m4a");
var sonido3 = new Audio("./sound/639 Hz.m4a");
var sonido4 = new Audio("./sound/963 Hz.m4a");

function MainMenuSetup() {
    question1 = document.getElementById("question1");
    question2 = document.getElementById("question2");
    question3 = document.getElementById("question3");
    question4 = document.getElementById("question4");
    question5 = document.getElementById("question5");
    question6 = document.getElementById("question6");
    question7 = document.getElementById("question7");
    question8 = document.getElementById("question8");
    question9 = document.getElementById("question9");
    question10 = document.getElementById("question10");
    question11 = document.getElementById("question11");
    question12 = document.getElementById("question12");
    question13 = document.getElementById("question13");
    question14 = document.getElementById("question14");
    question15 = document.getElementById("question15");
    question16 = document.getElementById("question16");
    question17 = document.getElementById("question17");
    question18 = document.getElementById("question18");
    question19 = document.getElementById("question19");
    question20 = document.getElementById("question20");

    imagen = document.getElementById("imagen");
    imagen2 = document.getElementById("imagen2");
    imagen3 = document.getElementById("imagen3");
    imagen4 = document.getElementById("imagen4");
    imagen5 = document.getElementById("imagen5");
    imagen6 = document.getElementById("imagen6");
    imagen7 = document.getElementById("imagen7");
    imagen8 = document.getElementById("imagen8");
    imagen9 = document.getElementById("imagen9");
    imagen10 = document.getElementById("imagen10");
    imagen11 = document.getElementById("imagen11");
    imagen12 = document.getElementById("imagen12");
    imagen13 = document.getElementById("imagen13");
    imagen14 = document.getElementById("imagen14");
    imagen15 = document.getElementById("imagen15");
    imagen16 = document.getElementById("imagen16");

    audio = document.getElementById("audio");
    audio2 = document.getElementById("audio2");
    audio3 = document.getElementById("audio3");
    audio4 = document.getElementById("audio4");
    audio5 = document.getElementById("audio5");
    audio6 = document.getElementById("audio6");
    audio7 = document.getElementById("audio7");
    audio8 = document.getElementById("audio8");
    audio9 = document.getElementById("audio9");
    audio10 = document.getElementById("audio10");
    audio11 = document.getElementById("audio11");
    audio12 = document.getElementById("audio12");
    audio13 = document.getElementById("audio13");
    audio14 = document.getElementById("audio14");
    audio15 = document.getElementById("audio15");
    audio16 = document.getElementById("audio16");

    intriga = document.getElementById("intriga");
    emocion = document.getElementById("emocion");
    conexion = document.getElementById("conexion");
    historias = document.getElementById("historias");
    hogar = document.getElementById("hogar");
    secretos = document.getElementById("secretos");
    historias1 = document.getElementById("historias1");
    hogar1 = document.getElementById("hogar1");
    secretos1 = document.getElementById("secretos1");

    Serenidad = document.getElementById("Serenidad");
    Alegría = document.getElementById("Alegría");
    Esperanza = document.getElementById("Esperanza");
    Inspiración = document.getElementById("Inspiración");
    Paz = document.getElementById("Paz");
    Intriga = document.getElementById("Intriga");
    Tranquilidad = document.getElementById("Tranquilidad");
    Pasión = document.getElementById("Pasión");
    Nostalgia = document.getElementById("Nostalgia");

    Refugio = document.getElementById("Refugio");
    Enclave = document.getElementById("Enclave");
    Santuario = document.getElementById("Santuario");
    Oasis = document.getElementById("Oasis");
    Retiro = document.getElementById("Retiro");
    Misterio = document.getElementById("Misterio");
    Frio = document.getElementById("Frio");
    Luminoso = document.getElementById("Luminoso");
    Acogedor = document.getElementById("Acogedor");

    Angustia = document.getElementById("Angustia");
    Comunidad = document.getElementById("Comunidad");
    Asombro = document.getElementById("Asombro");
    Misterio = document.getElementById("Misterio");
    Aventura = document.getElementById("Aventura");
    Inquietud = document.getElementById("Inquietud");
    Curiosidad = document.getElementById("Curiosidad");
    Caos = document.getElementById("Caos");
    Cambio = document.getElementById("Cambio");

    ready = document.getElementById("ready");
    ready2 = document.getElementById("ready2");
    ready3 = document.getElementById("ready3");
    ready4 = document.getElementById("ready4");

    musica = document.getElementById("musica");
    

    // Inicialmente, ocultamos el segundo menú
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
    question7.style.display = "none";
    question8.style.display = "none";
    question9.style.display = "none";
    question10.style.display = "none";
    question11.style.display = "none";
    question12.style.display = "none";
    question13.style.display = "none";
    question14.style.display = "none";
    question15.style.display = "none";
    question16.style.display = "none";
    question17.style.display = "none";
    question18.style.display = "none";
    question19.style.display = "none";
    question20.style.display = "none";


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
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio3.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio4.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio3.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio4.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido3.pause();
        sonido3.pause();
    }

    //boton de confirmacion
    ready2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question2.style.display = "none";
        question3.style.display = "block";
    }

    //Menu question3

    //Botones de musica
    musica.onclick = () => {
        sonido = new Audio("./sound/audio1.m4a");
        sonido.volume = 1; 
        sonido.play();
    }

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
        sonido.pause();
        question3.style.display = "none";
        question4.style.display = "block";
    }

    //Menu question4
    imagen5.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen6.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen7.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen8.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready4.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question4.style.display = "none";
        question5.style.display = "block";
    }

    //Menu question5

    //Botones de musica
    musica2.onclick = () => {
        sonido = new Audio("./sound/audio2.m4a");
        sonido.volume = 1; 
        sonido.play();
    }

    //primera fila
    Serenidad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Serenidad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Inspiración.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Tranquilidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Alegría.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Paz.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Alegría.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Pasión.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    Esperanza.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Intriga.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Nostalgia.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Esperanza.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //segunda fila
    Inspiración.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Inspiración.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Serenidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Tranquilidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Paz.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Pasión.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Paz.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        hogar1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Intriga.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Esperanza.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Nostalgia.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Intriga.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //tercera fila
    Tranquilidad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Tranquilidad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Serenidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Inspiración.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Pasión.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Paz.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Pasión.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Alegría.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Nostalgia.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Esperanza.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Intriga.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Nostalgia.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready5.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        question5.style.display = "none";
        question6.style.display = "block";
    }

    //Menu question6
    audio5.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio5.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio8.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido = new Audio("./sound/esencia1.m4a");
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio6.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio6.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio8.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2 = new Audio("./sound/esencia2.m4a");
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
    }
    audio7.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio7.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio8.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3 = new Audio("./sound/esencia3.m4a");
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio8.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio8.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4 = new Audio("./sound/esencia4.m4a");
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
    }

    //boton de confirmacion
    ready6.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question6.style.display = "none";
        question7.style.display = "block";
    }

    //Menu question4
    imagen5.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen6.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen7.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen8.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen5.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen6.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen7.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen8.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready4.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question4.style.display = "none";
        question5.style.display = "block";
    }

    //Menu question7
    imagen9.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen9.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen12.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen10.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen10.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen12.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen11.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen11.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen12.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen12.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen12.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready7.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question7.style.display = "none";
        question8.style.display = "block";
    }

    //Menu question8
    //Botones de musica
    musica3.onclick = () => {
        sonido = new Audio("./sound/Epic Piano Cinematic  Emptiness  Free Copyright Music.m4a");
        sonido.volume = 1; 
        sonido.play();
    }

    //primera fila
    Refugio.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Refugio.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Oasis.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Frio.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Enclave.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Retiro.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Enclave.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Luminoso.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    Santuario.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Misterio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Acogedor.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Santuario.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //segunda fila
    Oasis.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Oasis.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Refugio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Frio.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Retiro.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Enclave.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Retiro.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Luminoso.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Misterio.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Santuario.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Acogedor.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Misterio.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //tercera fila
    Frio.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Frio.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Refugio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Oasis.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Luminoso.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Enclave.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Luminoso.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Retiro.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Acogedor.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Santuario.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Misterio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Acogedor.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready8.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        question8.style.display = "none";
        question9.style.display = "block";
    }

    //Menu question9
    imagen13.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen13.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen16.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen14.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen14.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen16.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen15.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen15.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen16.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen16.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen16.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready9.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question9.style.display = "none";
        question10.style.display = "block";
    }

    //Menu question10
    audio9.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio9.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio12.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido = new Audio("./sound/ener1.m4a");
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio10.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio10.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio12.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2 = new Audio("./sound/ener2.m4a");
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
        
    }
    audio11.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio11.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio12.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3 = new Audio("./sound/ener3.m4a");
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio12.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio9.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio10.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio11.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio12.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4 = new Audio("./sound/ener4.m4a");
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
    }

    //boton de confirmacion
    ready10.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question10.style.display = "none";
        question11.style.display = "block";
    }

    //Menu question11
    imagen17.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen17.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen20.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen18.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen18.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen20.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen19.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen19.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen20.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen20.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen20.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready11.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question11.style.display = "none";
        question12.style.display = "block";
    }

    //Menu question12
    audio13.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio13.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio16.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido = new Audio("./sound/musicaclasica.m4a");
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio14.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio14.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio16.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2 = new Audio("./sound/electronica.m4a");
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
    }
    audio15.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio15.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio16.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3 = new Audio("./sound/reggaeton.m4a");
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio16.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio13.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio14.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio15.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio16.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4 = new Audio("./sound/rap_hiphop.m4a");
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
    }

    //boton de confirmacion
    ready12.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question12.style.display = "none";
        question13.style.display = "block";
    }

    //Menu question13
    imagen21.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen21.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen24.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen22.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen22.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen24.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen23.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen23.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen24.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen24.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen24.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready13.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question13.style.display = "none";
        question14.style.display = "block";
    }

    //Menu question14
    //Botones de musica
    musica4.onclick = () => {
        sonido = new Audio("./sound/audio3.m4a");
        sonido.volume = 1; 
        sonido.play();
    }

    //primera fila
    Angustia.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Angustia.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Misterio1.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Curiosidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Comunidad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Aventura.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Comunidad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Caos.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    Asombro.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Inquietud.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Cambio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Asombro.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //segunda fila
    Misterio1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Misterio1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Angustia.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Curiosidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Aventura.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Comunidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Aventura.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Caos.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Inquietud.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Asombro.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Cambio.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Inquietud.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //tercera fila
    Curiosidad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Curiosidad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Angustia.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Misterio1.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Caos.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Comunidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Caos.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Aventura.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Cambio.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Asombro.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Inquietud.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Cambio.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready14.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        question14.style.display = "none";
        question15.style.display = "block";
    }



    
    //Menu question15
    audio17.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio17.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio20.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido = new Audio("./sound/Sonido del Mar.m4a");
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio18.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio18.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio20.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2 = new Audio("./sound/Pajaros Cantando.m4a");
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
    }
    audio19.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio19.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio20.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3 = new Audio("./sound/Dark Rain Droplets - Relaxing Thunderstorm Rain Sounds.m4a");
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio20.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio17.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio18.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio19.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio20.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4 = new Audio("./sound/cascada.m4a");
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
    }

    //boton de confirmacion
    ready15.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question15.style.display = "none";
        question16.style.display = "block";
    }





    //Menu question16
    imagen25.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen25.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen26.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen27.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen28.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen26.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen25.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen26.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen27.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen28.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen27.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen25.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen26.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen27.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen28.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen28.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen25.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen26.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen27.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen28.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready16.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question16.style.display = "none";
        question17.style.display = "block";
    }





    //Menu question17
    imagen29.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen29.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen30.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen31.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen32.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen30.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen29.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen30.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen31.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen32.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen31.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen29.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen30.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen31.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen32.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen32.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen29.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen30.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen31.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen32.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready17.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question17.style.display = "none";
        question18.style.display = "block";
    }





    //Menu question18
    audio21.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio21.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio24.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido = new Audio("./sound/confi1.m4a");
        sonido.volume = 1; 
        sonido.play();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
    }

    audio22.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio22.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio24.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido2 = new Audio("./sound/confi2.m4a");
        sonido2.volume = 1; 
        sonido2.play();
        sonido.pause();
        sonido3.pause();
        sonido4.pause();
    }
    audio23.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio23.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        audio24.style.backgroundColor = "rgba(240, 239, 239, 0)";
        sonido3 = new Audio("./sound/confi3.m4a");
        sonido3.volume = 1; 
        sonido3.play();
        sonido.pause();
        sonido2.pause();
        sonido4.pause();
    }

    audio24.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        audio21.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio22.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio23.style.backgroundColor = "rgba(240, 239, 239, 0)";
        audio24.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        sonido4 = new Audio("./sound/confi4.m4a");
        sonido4.volume = 1; 
        sonido4.play();
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
    }
    
    //boton de confirmacion
    ready18.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        sonido2.pause();
        sonido3.pause();
        sonido4.pause();
        question18.style.display = "none";
        question19.style.display = "block";
    }





    //Menu question19
    imagen33.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen33.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen34.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen35.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen36.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen34.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen33.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen34.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen35.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen36.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    imagen35.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen33.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen34.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen35.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        imagen36.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    imagen36.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        imagen33.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen34.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen27.style.backgroundColor = "rgba(240, 239, 239, 0)";
        imagen36.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready19.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        question19.style.display = "none";
        question20.style.display = "block";
    }




    //Menu question20

    musica5.onclick = () => {
        sonido = new Audio("./sound/audio4.m4a");
        sonido.volume = 1; 
        sonido.play();
    }

    //primera fila
    Aventura1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Aventura1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Energía.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Soledad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Calidez.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Reflexión.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Calidez.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Vitalidad.style.backgroundColor = "rgba(240, 239, 239, 0)";

    }

    Misterio2.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Libertad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Comunidad1.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Misterio2.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //segunda fila
    Energía.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Energía.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Aventura1.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Soledad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Reflexión.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Calidez.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Reflexión.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Vitalidad.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Libertad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Misterio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Comunidad1.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Libertad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //tercera fila
    Soledad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Soledad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Aventura1.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Energía.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Vitalidad.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Calidez.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Vitalidad.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
        Reflexión.style.backgroundColor = "rgba(240, 239, 239, 0)";
    }

    Comunidad1.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        Misterio2.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Libertad.style.backgroundColor = "rgba(240, 239, 239, 0)";
        Comunidad1.style.backgroundColor = "rgba(240, 239, 239, 0.611)";
    }

    //boton de confirmacion
    ready20.onclick = () => {
        // Cuando se hace clic en el botón de inicio del primer menú,
        // ocultamos el primer menú y mostramos el segundo
        sonido.pause();
        question20.style.display = "none";
       window.location.href="./producto/Producto.html";

    }
}
