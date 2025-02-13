
/// práctica juego secreto


/// se llama a la función y para seleccionar elementos html e insertar texto asignarTexto('p', 'Indica un número del 1 al 100');
/// 1 definición de variables con selectos fijo H1 o P
///let titulo = document.querySelector('h1');
///let parafo = document.querySelector('p');
/// necesariamente se llama la variable para ejecutar y con
/// variable.innerHTML se cambia el contenido 
/// = asigna
/// == compara valor
/// === compara valor y tipo de dato
/// parseInt(valor interno se convierte en tipo numerico)
///función anexada al onclick de html
///function intentoUsuario(){
/// alert("click boton");
///}
/// ${(intentos === 1) ? 'vez' : 'veces' operador ternario 
/// una formula rápida en una cadena de texto debe estar entre comillas invertidas ``




/// se asigna variable
let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMeximo = 10;


/// función para asignar texto a un elemento html
function asignarTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

/// función para verificará el número que ingresa el usuario 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value );
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTexto('p', 'El número secreto es menor');
    } else {
        asignarTexto('p', 'El número secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}





/// función para generar número secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMeximo)+1;
    if (listaNumeroSorteados.length == numeroMeximo) {
        asignarTexto('p', 'ya se sortearon todos los números posibles');
        
    } else {
    
    if (listaNumeroSorteados.includes(numeroGenerado )) {
        return generarNumeroSecreto();
        
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Indica un número del 1 al ${numeroMeximo}`);
    
/// deshabilitar boton nuevo juego 
/// generar número aleatorio  
    numeroSecreto = generarNumeroSecreto();
/// reinicie número de intentos 
    intentos = 1;
}


function reiniciarJuego() {
/// limpiar caja
    limpiarCaja();

/// indicar mensaje 
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}





///llama funciones
condicionesIniciales();
generarNumeroSecreto();
