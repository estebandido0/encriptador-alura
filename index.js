var boton_encriptar = document.getElementById("boton-encriptar")
var boton_desencriptar = document.getElementById("boton-desencriptar")
var boton_copiar = document.getElementById("boton-copiar")
var input_field = document.getElementsByClassName("input-area")[0]
var output_field = document.getElementsByClassName("output-area")[0]

boton_encriptar.onclick = () => {

    let input_text = input_field.value.trim()
    
    //Validacion del input
    let validador = /^[a-z]+(\s[a-z]+)*$/
    if (!validador.test(input_text)) {
        input_field.value = ""
        return
    }

    output_field.value = encriptar(input_text)

}

boton_desencriptar.onclick = () => {
    output_field.value = desencriptar(input_field.value)
}

//Funcion copiar
boton_copiar.onclick = () => {
    navigator.clipboard.writeText(output_field.value)
}



function encriptar(texto) {
    let salida = texto
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat")


    return salida
}

function desencriptar(texto) {
    let salida = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")

    return salida

}

