const nomejogador = "Janaína";
let idade = 35;
let online = true;

//Objeto com o jogo favorito
let jogo_favorito = {nome: "Fifa", ano_de_lancamento: 2025};

//Array com últimas 3 pontuações
let pontuacoes = [30, 52, 74];

console.log ("Nome Jogador:", typeof nomeJogador);
console.log ("Idade:", typeof idade);
console.log ("Online:", typeof online);
console.log ("Jogo Favorito:", typeof jogo_favorito);
console.log ("Pontuações:", typeof pontuacoes);

// Alterar valores
idade = 36;
online = false;

console.log ("Nova idade:", idade);
console.log ("Novo status online:", online);

//Desafio 
let soma = pontuacoes [0] + pontuacoes [1] + pontuacoes [2];
let media = soma / pontuacoes.length;

console.log ("Média:", media);
