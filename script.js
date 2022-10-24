noStyles();

function atualizarNome() {
  var nome = prompt('Insira um novo nome');
  
  var aluno = document.querySelector('h1');
  aluno.textContent = 'Bem vindo ' + nome;
}

function noStyles() {
  document.styleSheets[0].disabled = true;
  document.styleSheets[1].disabled = true;
}

function reStyle(n) {
  noStyles()
  document.styleSheets[n].disabled = false;
}