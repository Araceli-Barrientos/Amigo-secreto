// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//alert ("hola mundo");
// prompt("Me indicas un numero por favor:");

let nombreSecreto= sortearAmigo();
let nombres = [];

//console.log(nombreSecreto);
function listaDeNombres(nombres) {
    if (nombres.trim() === "") {
        console.log("Por favor ingrese un nombre");
        return;
    }
    
}

function agregarAmigo(){
    let nombreUsuario = document.getElementById('amigo').value;
    console.log(typeof(nombreUsuario));
    console.log(nombreUsuario);
    

    return;   
}


function sortearAmigo(){
    return Math.floor(Math.random() * nombreSecreto.length);

    
}
    console,log(nombreSecreto);
    



