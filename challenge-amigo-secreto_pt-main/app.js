

let nomes = [];

// Função para adicionar nome na lista
function adicionarNome() {
    nomeInput = document.getElementById('amigo');
    nome = nomeInput.value.trim();

    // Verifica se o campo de texto não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome à lista
    nomes.push(nome);
    nomeInput.value = ""; // Limpa o campo de entrada

    // Atualiza a lista de nomes na página
    atualizarLista();
}
 // Função para atualizar a lista visível de nomes
 function atualizarLista() {
    lista = document.getElementById('nomeLista');
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada nome da lista ao HTML
    nomes.forEach(nome => {
        li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}
  // Função para realizar o sorteio de amigo secreto
  function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione ao menos um nome para realizar o sorteio.");
        return;
    }

    // Sorteia um nome aleatório
    sorteado = nomes[Math.floor(Math.random() * nomes.length)];

    // Exibe o nome sorteado
    resultDiv = document.getElementById('resultado');
    resultDiv.textContent = "O amigo secreto sorteado é: " + sorteado;
}