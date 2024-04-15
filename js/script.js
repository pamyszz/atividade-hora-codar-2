// Exercício 1
function exercicio1() {
    let numeroLados = parseInt(prompt("Digite o número de lados do polígono regular (3, 4 ou 5):"));
    let medidaLado = parseFloat(prompt("Digite a medida do lado do polígono (em cm):"));
    let resultado = "";

    switch (numeroLados) {
        case 3:
            let perimetroTriangulo = 3 * medidaLado;
            resultado = `TRIÂNGULO - Perímetro: ${perimetroTriangulo.toFixed(2)} cm`;
            break;
        case 4:
            let areaQuadrado = medidaLado * medidaLado;
            resultado = `QUADRADO - Área: ${areaQuadrado.toFixed(2)} cm²`;
            break;
        case 5:
            resultado = "PENTÁGONO";
            break;
        default:
            if (numeroLados < 3) {
                resultado = "NÃO É UM POLÍGONO";
            } else {
                resultado = "POLÍGONO NÃO IDENTIFICADO";
            }
    }

    document.getElementById("resultadoExercicio1").innerHTML = resultado;
}

// Exercício 2
function exercicio2() {
    let golsCorinthians = parseInt(prompt("Quantos gols o Corinthians marcou?"));
    let golsPalmeiras = parseInt(prompt("Quantos gols o Palmeiras marcou?"));
    let resultado = "";

    if (golsCorinthians > golsPalmeiras) {
        resultado = "O Corinthians venceu!";
    } else if (golsPalmeiras > golsCorinthians) {
        resultado = "O Palmeiras venceu!";
    } else {
        resultado = "EMPATE!";
    }

    document.getElementById("resultadoExercicio2").innerHTML = resultado;
}

// Exercício 3
function exercicio3() {
    let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
    let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
    let operacao = parseInt(prompt("Digite o número da operação desejada:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));
    let resultado = "";

    switch (operacao) {
        case 1:
            resultado = `Resultado da adição: ${valor1 + valor2}`;
            break;
        case 2:
            resultado = `Resultado da subtração: ${valor1 - valor2}`;
            break;
        case 3:
            resultado = `Resultado da divisão: ${valor1 / valor2}`;
            break;
        case 4:
            resultado = `Resultado da multiplicação: ${valor1 * valor2}`;
            break;
        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultadoExercicio3").innerHTML = resultado;
}

// Exercício 4
function exercicio4() {
    let numeroLados = parseInt(prompt("Digite o número de lados do polígono regular (3, 4 ou 5):"));
    let medidaLado = parseFloat(prompt("Digite a medida do lado do polígono (em cm):"));
    let resultado = "";

    switch (numeroLados) {
        case 3:
            let perimetroTriangulo = 3 * medidaLado;
            resultado = `TRIÂNGULO - Perímetro: ${perimetroTriangulo.toFixed(2)} cm`;
            break;
        case 4:
            let areaQuadrado = medidaLado * medidaLado;
            resultado = `QUADRADO - Área: ${areaQuadrado.toFixed(2)} cm²`;
            break;
        case 5:
            resultado = "PENTÁGONO";
            break;
        default:
            if (numeroLados < 3) {
                resultado = "NÃO É UM POLÍGONO";
            } else {
                resultado = "POLÍGONO NÃO IDENTIFICADO";
            }
    }

    document.getElementById("resultadoExercicio4").innerHTML = resultado;
}

// Exercício 5
function exercicio5() {
    let quantidade = parseInt(prompt("Quantas maçãs foram compradas?"));
    let preco = quantidade < 12 ? 3.50 : 2.50;
    let total = quantidade * preco;
    document.getElementById("resultadoExercicio5").innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`;
}
