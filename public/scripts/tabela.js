var carol = {
    nome: "Caroline",
    vitorias: 3,
    empates: 7,
    derrotas: 2,
    pontos: 0
  };
  
  var lucas = {
    nome: "Lucas",
    vitorias: 2,
    empates: 7,
    derrotas: 3,
    pontos: 0
  };
  
  calculaPontos(carol, lucas); //colocar um for aqui
  carol.pontos = calculaPontos(carol);
  lucas.pontos = calculaPontos(lucas);
  
  function calculaPontos(player) {
    var pontos = player.empates + player.vitorias * 3; //calcula primeiro a multiplicação
    return pontos;
  }
  
  var players = [carol, lucas];
  exibirPlayers(players);
  
  function exibirPlayers(players) {
    var html = "";
    for (var i = 0; i < players.length; i++) {
      html += "<tr><td>" + players[i].nome + "</td>";
      html += "<td>" + players[i].vitorias + "</td>";
      html += "<td>" + players[i].empates + "</td>";
      html += "<td>" + players[i].derrotas + "</td>";
      html += "<td>" + players[i].pontos + "</td>";
      html +=
        '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>';
      html +=
        '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>';
      html +=
        '<td><button onClick="adicionarDerrota(' +
        i +
        ')">Derrota</button></td></tr>';
    }
    var tabelaPlayers = document.getElementById("tabelaPlayers");
    tabelaPlayers.innerHTML = html;
  }
  
  function adicionarVitoria(i) {
    alert("Vitoria adicionada!");
    var jogador = players[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirPlayers(players);
  }
  
  function adicionarEmpate(i) {
    alert("Empate adicionado!");
    var jogador = players[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirPlayers(players);
  }
  
  function adicionarDerrota(i) {
    alert("Derrota adicionada!");
    var jogador = players[i];
    jogador.derrotas++;
    exibirPlayers(players);
  }
  