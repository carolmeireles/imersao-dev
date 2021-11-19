var listaFilmes = []; //pode adicionar os posters dos filmes direto aqui também

listaFilmes.push(
  "https://m.media-amazon.com/images/M/MV5BMDA0MDk5M2ItMDc5Yy00ZjVlLTg4YTYtMmRkMjc4ZDg4ZjU2XkEyXkFqcGdeQXVyNDY3NDM0ODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
);
listaFilmes.push(
  "https://m.media-amazon.com/images/M/MV5BZTI4Y2Q1MGQtYjE3Yy00N2VkLTg5YTgtOGI4Y2QxMTA3NTgxXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_UY268_CR5,0,182,268_AL_.jpg"
);
listaFilmes.push(
  "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg"
);

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
