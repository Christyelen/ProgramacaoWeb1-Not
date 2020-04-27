function Limpar() {
    document.getElementById("texto").value = "";
    document.getElementById("Erro").innerHTML = "";
    document.getElementById("conteudo").innerHTML = "";
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function fatorial() {

    var input = document.getElementById('texto');
    var valorTexto = input.value;
    var NovaLinha = document.createElement('p');
    var div = document.getElementById('conteudo');

    if (valorTexto == "") {
        document.getElementById("Erro").innerHTML = "Insira um valor para ser calculado";

    }
    else if (!isNumber(valorTexto)) {
        document.getElementById("Erro").innerHTML = "Não são permitidos letras ou símbolos";
    } else if (valorTexto < 0) {
        document.getElementById("Erro").innerHTML = "Valor não pode ser menor que 0";
    }
    else if ((valorTexto == 0) || (valorTexto == 1)) {
        document.getElementById("Erro").innerHTML = "";
        NovaLinha.innerHTML = "Resultado: " + 1;
        div.appendChild(NovaLinha);
    } else {
        var acumula = 1;
        for (x = valorTexto; x > 1; x--) {
            acumula = acumula * x;
        }
        document.getElementById("Erro").innerHTML = "";
        NovaLinha.innerHTML = "Resultado: " + acumula;
        div.appendChild(NovaLinha);
    }
}