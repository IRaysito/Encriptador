const encriptador = document.querySelector(".encriptador");
const mensajeEncriptado = document.querySelector(".encriptacion");
const texto = encriptador.value;

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function removerAtributo(clase,atributo) {
    document.querySelector(clase).removeAttribute(atributo);
}

function addAtributo(clase,atributo,valor) {
    document.querySelector(clase).setAttribute(atributo,valor);
}

function botonEncriptador() {   

    removerAtributo(".encriptacion","hidden")
    removerAtributo(".copiar","hidden")
    document.getElementById("boton-2").removeAttribute("disabled")
    addAtributo(".mensaje-1","hidden","true")
    addAtributo(".mensaje-2","hidden","true")
    document.getElementById("boton-2").classList.add("boton-2")
    const textoEncriptado = encriptar(encriptador.value);
    mensajeEncriptado.value = textoEncriptado;
    encriptador.value = ""
    
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }        
    }
    return stringEncriptado
} 

function botonDesencriptador() {
    const textoEncriptado = desencriptar(encriptador.value);
    mensajeEncriptado.value = textoEncriptado;
    encriptador.value = ""
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
             stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }        
    }
    return stringDesencriptado
} 

function botonCopiar() {
    navigator.clipboard.writeText(mensajeEncriptado.value);
}