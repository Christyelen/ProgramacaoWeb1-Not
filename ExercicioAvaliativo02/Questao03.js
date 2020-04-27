
        function Limpar(){
            document.getElementById("texto").value= "";
            document.getElementById("conteudo").innerHTML= "";
            document.getElementById("Erro").innerHTML="";
        }
    function adicionarElementos(){
    var input = document.getElementById('texto');
    var valorTexto = input.value;
    var NovaLinha = document.createElement('li');
   
    var div = document.getElementById('conteudo');
    if(valorTexto == ""){
        document.getElementById("Erro").innerHTML = "Insira um texto para adicionar na lista";
        
    }else{
        document.getElementById("Erro").innerHTML = "";
        NovaLinha.innerHTML = valorTexto;
        div.appendChild(NovaLinha);    
    }
}