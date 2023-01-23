const textArea = document.querySelector(".texto");
const aviso = document.querySelector(".mensagem");
const copyButton = document.querySelector(".bt-copiar");
const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch")
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
$checkbox.addEventListener("change", function(){
  $html.classList.toggle('dark-mode')
})

function btEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    aviso.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada){

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    aviso.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}


    function CopiadorTexto() {
        var CopiadorTexto = document.querySelector(".mensagem");
        CopiadorTexto.select();
        document.execCommand("copy");
        alert("Texto copiado: " + CopiadorTexto.value);
        aviso.value = ""
    }

    
    copyButton.addEventListener("click", CopiadorTexto);
