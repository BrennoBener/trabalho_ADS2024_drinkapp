// Função para carregar os dados do arquivo drinks.json
function carregarDrinks(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'drinks.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  // Função para retornar um drink com base no sabor escolhido
  function obterDrink(sabor) {
    // Carrega os dados do arquivo drinks.json
    carregarDrinks(function(drinks) {
      // Verifica se o array de drinks para o sabor escolhido está vazio
      if (!drinks[sabor] || drinks[sabor].length === 0) {
        console.error("Não há drinks cadastrados para este sabor.");
        return;
      }
      // Retorna um drink aleatório dentro do array correspondente ao sabor
      const randomIndex = Math.floor(Math.random() * drinks[sabor].length);
      const drink = drinks[sabor][randomIndex];
      exibirResultado(drink);
    });
  }
  
  // Função para retornar um drink aleatório entre os sabores azedo, doce e amargo
  function obterDrinkAleatorio() {
    const sabores = ["azedo", "doce", "amargo"];
    const randomSabor = sabores[Math.floor(Math.random() * sabores.length)];
    obterDrink(randomSabor);
  }
  
  // Função para exibir o resultado
  function exibirResultado(drink) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p>Seu drink vai ser um: ${drink.nome}!</p>
      <p>Composição: ${drink.composicao}</p>
    `;
    resultadoDiv.style.display = "block";
  }
  
  // Função para iniciar o jogo "Verdade ou Desafio"
  function iniciarVerdadeOuDesafio() {
    const perguntas = [
      "Qual é o seu maior medo?",
      "Qual é a coisa mais estranha que você já comeu?",
      "Qual é a sua lembrança mais engraçada de uma festa?",
      "Desafio: Dance como se ninguém estivesse olhando por 1 minuto."
      // Adicione mais perguntas e desafios aqui, se desejar
    ];
  
    // Escolhe uma pergunta ou desafio aleatório
    const randomIndex = Math.floor(Math.random() * perguntas.length);
    const pergunta = perguntas[randomIndex];
  
    // Exibe a pergunta ou desafio na tela
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p>${pergunta}</p>
    `;
    resultadoDiv.style.display = "block";
  }
  
  // Adicionar eventos de clique aos botões
  document.getElementById('azedo').addEventListener('click', function() {
    obterDrink('azedo');
  });
  document.getElementById('doce').addEventListener('click', function() {
    obterDrink('doce');
  });
  document.getElementById('amargo').addEventListener('click', function() {
    obterDrink('amargo');
  });
  document.getElementById('surpreender').addEventListener('click', function() {
    obterDrinkAleatorio();
  });
  document.getElementById('verdadeOuDesafio').addEventListener('click', function() {
    iniciarVerdadeOuDesafio();
  });
  