// Obtener referencia a los elementos HTML
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

// Funcion para calcular el IMC
function calcurIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value)

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        resultadoDiv.textContent = 'Por favor, ingrese valores valido de peso y altura.'
        return;
    }
    const imc = peso / ((altura / 100) ** 2);
    
    if( imc <= 18.5){
        resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)} - Peso bajo (Delgado).`
    } else if( imc >= 18.6 && imc <= 24.8){
        resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)} - Normal.`
    } else if( imc >= 24.9 && imc <= 29.9){
        resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)} - Sobrepeso.`
    } else {
        resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)} - Obesidad.`
    }
}

// calcularBtn.addEventListener('click', calcurIMC)
