var canvas = /** @type {HTMLCanvasElement} */(null);

function Init() {
    canvas = document.getElementById("myCanvas");

    // input setup
    SetupMouseEvents();
    
    // setup main menu
    MainMenuSetup();        

}


window.onload = Init;
