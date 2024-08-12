//DOM

const inputWord = document.getElementById("inputWord")

const inputSubmit = document.getElementById("inputSubmit")

//Invertir 

const InvertirPalabra = (palabraIngresada)=>{
    return palabraIngresada.toLowerCase().split("").reverse().join("")
}

//Evento de Enviar la Palabra

inputSubmit.addEventListener("click",()=>{
    event.preventDefault();
    let palabraIngresada = inputWord.value;
    if (palabraIngresada.trim().length != 0){
        console.log(InvertirPalabra(palabraIngresada))
        console.log(palabraIngresada)
        if (InvertirPalabra(palabraIngresada) === palabraIngresada.toLowerCase()){
            alert("Si es un Palíndromo")
        } else {
            alert("No es una Palíndromo")
        }
    } else {
        alert("String Vació")
    }
})