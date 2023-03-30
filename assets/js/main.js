function verificarEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = Number(document.getElementById("edad").value); 
    var elementoResultado = document.getElementById("resultado");

    console.log(`Nombre y Apellido es: ${nombre}`)
    console.log(`Edad es: ${edad}`)

    var resultado = edad;

    if(resultado >= 18 ){
        elementoResultado.textContent = `Usted es mayor de edad (${resultado})`
    }
    else{
        elementoResultado.textContent = `Usted es menor de edad (${resultado})`
}

}
