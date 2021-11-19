var carta1 = {
    nome: "Yuna de FFX",
    imagem: "https://i.imgur.com/R12kANY.png",
    atributos: {
      ataque: "50",
      defesa: "77",
      magia: "90"
    }
  };
  
  var carta2 = {
    nome: "Aerith de FFVII",
    imagem:
      "https://cdn.ome.lt/ixwZGMKgqm1iT-RomZOBJiGcko8=/770x0/smart/uploads/conteudo/fotos/aerith_11Pd6wI.jpg",
    atributos: {
      ataque: "45",
      defesa: "60",
      magia: "93"
    }
  };
  
  var carta3 = {
    nome: "Ravena da DC",
    imagem:
      "https://i.pinimg.com/564x/02/df/27/02df27162b701f971812fd892e21e567.jpg",
    atributos: {
      ataque: "70",
      defesa: "60",
      magia: "90"
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numCartaMaquina];
  
    var numCartaJogador = parseInt(Math.random() * 3);
    while (numCartaJogador == numCartaMaquina) {
      numCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numCartaJogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
  
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>" +
        "</input>";
    }
  
    var html = '<div id="opcoes" class="carta-status">';
  
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        '<p class="resultado-final">Parabéns, você venceu a máquina!</p>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        '<p class="resultado-final">Infelizmente, você perdeu para a máquina...</p>';
    } else {
      htmlResultado =
        '<p class="resultado-final">Você e a máquina empataram.</p>';
    }
  
    divResultado.innerHTML = htmlResultado;
  
    exibirCartaMaquina();
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "<br>" +
        "</p>";
    }
  
    var html = '<div id="opcoes" class="carta-status">';
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }
  