function limparCampos() {

    document.getElementById('texto1').value = "";
    document.getElementById('texto2').value = "";
    document.getElementById('texto3').value = "";
    document.getElementById("resposta").innerHTML = ""

}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function soma() {
    var input = document.getElementById('texto1');
    var valorTexto = input.value;
    var input2 = document.getElementById('texto2');
    var valorTexto2 = input2.value;
    var input3 = document.getElementById('texto3');
    var valorTexto3 = input3.value;


    if (valorTexto == "" || valorTexto2 == "" || valorTexto3 == "") {
        document.getElementById("resposta").innerHTML = "Insira um valor nos três campos para ser calculado";

    }
    else if (!isNumber(valorTexto) || !isNumber(valorTexto2) || !isNumber(valorTexto3)) {
        document.getElementById("resposta").innerHTML = "Não são permitidos letras ou simbolos";
    }

    else {
        var resposta = parseInt(valorTexto) + parseInt(valorTexto2) + parseInt(valorTexto3);

        if ((resposta % 2) == 0) {
            document.getElementById("resposta").innerHTML = "";
            alert(resposta + " : Par");
            document.getElementById("resposta").innerHTML = resposta + " : Par";
        }
        else {
            document.getElementById("resposta").innerHTML = "";
            alert(resposta + " : Impar");
            document.getElementById("resposta").innerHTML = resposta + " : Impar";
        }
    }


}