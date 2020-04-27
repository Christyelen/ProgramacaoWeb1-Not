var filme1 = {
  Título: "Titanic",
  Ano: 1997,
  Genero: "Drama",
  filmeCompleto: function () {
      return "Título: " + this.Título + " | " + "  Ano: " + this.Ano + " | " + " Gênero: " + this.Genero;
  }
};
var filme2 = {
  Título: "Carga Explosiva",
  Ano: 2002,
  Genero: "Ação",
  filmeCompleto: function () {
      return "Título: " + this.Título + " | " + "Ano: " + this.Ano + " | " + " Gênero: " + this.Genero;
  }
};
var filme3 = {
  Título: "Doutor Estranho",
  Ano: 2016,
  Genero: "Ficção Científica",
  filmeCompleto: function () {
      return "Título: " + this.Título + " | " + "Ano: " + this.Ano + " | " + " Gênero: " + this.Genero;
  }
};
//Teste de Console
console.log(filme1.filmeCompleto());

function MostrarFilmes() {
  document.getElementById("conteudo1").innerHTML = filme1.filmeCompleto()
  document.getElementById("conteudo2").innerHTML = filme2.filmeCompleto()
  document.getElementById("conteudo3").innerHTML = filme3.filmeCompleto()
}