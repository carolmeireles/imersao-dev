function adicionarFilme() {
    var campoFilme = document.querySelector("#filme");
    var filmeAdicionado = campoFilme.value;
    if (filmeAdicionado.endsWith(".jpg")) {
      listarFilmesNaTela(filmeAdicionado);
    } else {
      alert(
        "Endereço de imagem inválido! Por favor, enviar um endereço correto."
      );
    }
    campoFilme.value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes");
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  }
  