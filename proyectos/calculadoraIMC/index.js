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
    const imc = peso / (altura ** 2);
    resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)}`
}

// calcularBtn.addEventListener('click', calcurIMC)