const formulario = document.querySelector('#form-tarefa');
const campoTarefa = document.querySelector('#nova-tarefa');
const lista = document.querySelector('#lista');
const mensagemVazia = document.querySelector('#mensagem-vazia');

function atualizarMensagem() {
  mensagemVazia.hidden = lista.children.length > 0;
}

function criarBotao(texto, classe, acao) {
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.textContent = texto;
  botao.className = classe;
  botao.addEventListener('click', acao);
  return botao;
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const texto = campoTarefa.value.trim();

  if (texto === '') {
    return;
  }

  const item = document.createElement('li');
  const descricao = document.createElement('span');
  descricao.textContent = texto;

  const botaoConcluir = criarBotao('Concluir', 'botao-concluir', () => {
    item.classList.toggle('concluida');
    botaoConcluir.textContent = item.classList.contains('concluida')
      ? 'Desfazer'
      : 'Concluir';
  });

  const botaoExcluir = criarBotao('Excluir', 'botao-excluir', () => {
    item.remove();
    atualizarMensagem();
  });

  item.append(descricao, botaoConcluir, botaoExcluir);
  lista.appendChild(item);

  campoTarefa.value = '';
  campoTarefa.focus();
  atualizarMensagem();
});

atualizarMensagem();
