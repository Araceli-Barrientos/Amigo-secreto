// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo(){
    let nombreUsuario = document.getElementById('amigo').value.trim(); //Se obtiene el nombre ingresado por el usuario
    if(nombreUsuario != ""){ //Pregunta si el texto no esta vacio
        const nombreAmigo = document.createElement('li') //Se crea un elemento de tipo li 
        nombreAmigo.innerHTML = nombreUsuario //Se agrega al li el nombre del amigo
        document.getElementById('listaAmigos').appendChild(nombreAmigo) //se agrega el elemento li al ul con el id listaAmigos
        nombres.push(nombreUsuario) //Se agrega el nombre al vector
        document.getElementById('amigo').value = "" //Se limpia el imput para ingresar un nuevo nombre
    }else{
        alert("No se permiten nombres vacíos")
    }
    return;   
}


function sortearAmigo(){
    const indiceAmigo = Math.floor(Math.random() * nombres.length)
    const amigoSecreto = nombres[indiceAmigo]
    const textoAmigo = document.createElement('li')
    textoAmigo.innerHTML = "Tu amigo secreto es: " + amigoSecreto + "!!!"
    document.getElementById('resultado').appendChild(textoAmigo)
}

    



