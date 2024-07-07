// Função para enviar o nome do usuário e preparar o quiz
var enviarnome = document.getElementById('enviarnome');
enviarnome.addEventListener('click', enviar);

function enviar(event) {
  event.preventDefault(); 

  // Variáveis
  var nome = document.getElementById('nome').value.trim();
  var emtela = document.getElementById('emtela');
  var mensagem2 = document.getElementById('mensagem2');
  var imgs = document.createElement('img');
  var resposta = document.getElementById('resposta');
  
  var nomenulo = document.getElementById('nomenulo');
  var iniciarquiz = document.getElementById('iniciarquiz');
  var linkCancelarQuiz = document.getElementById('cancelarquiz'); // VAR
  var botaoiniciarquiz = document.createElement('button'); // VAR BOTAO PARA INICIAR QUIZ
  var link2 = document.createElement('a'); // VAR LINK PARA RETORNAR
  var perguntasquiz = document.getElementById('perguntasquiz'); // VAR CRIADA PARA ACIONAMENTO DO DISPLAY PARA APARECIMENTO NA TELA

  // VAR CRIADA PARA OCULTAR O CHAT QUANDO O BOTAO INICIAR FOR ACIONADO
  var ocultarchat = document.querySelector('.ocultarchat');
  ocultarchat.querySelectorAll('*').forEach(element => {
      element.style.display = ''; // MANTEM O DISPLAY JA APLICADO E SO OCULTA QUANDO FOR ACIONADO O EVENTO
  });

  // Estrutura condicional composta
  if (nome.length === 0) {
    // ERROR EM CASO DE NAO DIGITAÇAO DO NOME
    nomenulo.innerHTML = ' * Por favor, insira o seu nome.';
  } else {
    // EXECUCAO DO  FÓNXO DO CÓDIGO
    emtela.innerHTML = `${nome}`;
    emtela.style.background = '#1876fa';
    emtela.style.color = 'white';
    emtela.style.borderRadius = '5px 20px';
    emtela.style.fontSize = '16px';
    emtela.style.padding = '10px 20px 10px 20px';

    imgs.src = 'imagens/imagem2.png';
    imgs.alt = 'chat';
    imgs.style.width = '70px';
    imgs.style.marginRight = '10px';
    mensagem2.appendChild(imgs);

    resposta.innerText = `Olá, ${nome}, o seu teste de inglês está pronto. Para iniciar, clique abaixo ou se preferir é só retornar.`;
    resposta.style.fontFamily = 'Arial, Helvetica, sans-serif';
    resposta.style.background = '#cfced153';
    resposta.style.color = '#040404';
    resposta.style.borderRadius = '40px 10px';
    resposta.style.fontSize = '14px';
    resposta.style.padding = '10px 30px 10px 30px';

    linkCancelarQuiz.innerHTML = '';

    botaoiniciarquiz.innerText = 'Iniciar';
    botaoiniciarquiz.style.fontSize = '15px';
    botaoiniciarquiz.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    botaoiniciarquiz.style.color = 'white';
    botaoiniciarquiz.style.textDecoration = 'none';
    botaoiniciarquiz.style.border = 'none';
    botaoiniciarquiz.style.borderRadius = '10px';
    botaoiniciarquiz.style.padding = '10px 25px';
    botaoiniciarquiz.style.margin = '10px 30px 10px 30px';
    botaoiniciarquiz.style.background = '#1876fa';
    iniciarquiz.appendChild(botaoiniciarquiz); // PUSH DO BOTAO PARA INICIAR TESTE COM BOT

    link2.href = 'http://127.0.0.1:5500/index.html#';
    link2.innerText = 'Retornar';
    link2.style.fontSize = '15px';
    link2.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    link2.style.color = 'white';
    link2.style.textDecoration = 'none';
    link2.style.border = 'none';
    link2.style.borderRadius = '10px';
    link2.style.padding = '10px 25px';
    link2.style.margin = '10px';
    link2.style.background = '#413e40b9';
    linkCancelarQuiz.appendChild(link2); // PUSH DO LINK PARA VISTA NA PAGINA WEB

    botaoiniciarquiz.addEventListener('click', iniciarperguntas);

    function iniciarperguntas() {
      perguntasquiz.style.display = 'block'; // QUANDO ACIONADO APLICA O DISPLAY PADRAO 
      ocultarchat.style.display = 'none'; /* QUANDO ACIONADO OCULTA O CHAT*/
      botaoiniciarquiz.style.display = 'none';
      link2.style.display = 'none';
      mensagem2.style.display = 'none';
      
      // Salva o nome do usuário no localStorage
      localStorage.setItem('nome', nome);
    }
  }
}

// Função para calcular a pontuação do quiz
function calcularPontuacao() {
  let score = 0;

  // Objeto com as respostas corretas
  const respostasCorretas = {
    'pergunta1': 'went',
    'pergunta2': 'joyful',
    'pergunta3': 'mean',
    'pergunta4': 'mice',
    'pergunta5': 'present2',
    'pergunta6': 'too',
    'pergunta7': 'q2',
    'pergunta8': 'better',
    'pergunta9': 'in',
    'pergunta10': 'read',
    
  };

  for (const pergunta in respostasCorretas) {
    const respostaCorreta = respostasCorretas[pergunta];
    const opcaoSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    
    if (opcaoSelecionada && opcaoSelecionada.value === respostaCorreta) {
      score++;
    }
  }

  // Determinar o nível com base na pontuação
  let nivel;
  if (score <= 1) {
    nivel = 'Seu nível de inglês é A1: Você é capaz de compreender e usar expressões familiares do dia a dia e frases muito básicas. Você pode se apresentar e responder perguntas simples sobre detalhes pessoais, como onde mora e pessoas que conhece. A comunicação é possível se o interlocutor falar devagar e claramente.';
  } else if (score > 1 && score <= 3) {
    nivel = 'Seu nível de inglês é A2: Você consegue entender frases isoladas e expressões frequentemente usadas em áreas de relevância imediata (informações pessoais e familiares simples, compras, geografia local, emprego). Você pode comunicar em tarefas simples e rotinas que exigem uma troca direta de informações sobre assuntos familiares e rotineiros.';
  } else if (score > 3 && score <= 5) {
    nivel = 'Seu nível de inglês é B1: Isso indica que você pode compreender os pontos principais de textos claros e em linguagem padrão sobre assuntos familiares que ocorrem regularmente no trabalho, escola, lazer, etc. Pode lidar com a maioria das situações que podem surgir enquanto viaja em uma área onde o idioma é falado. Você é capaz de produzir textos simples e coerentes sobre tópicos que lhe são familiares ou de interesse pessoal.';
  } else if (score > 5 && score <= 7) {
    nivel = 'Seu nível de inglês é B2: Isso indica que você consegue entender as ideias principais de textos complexos sobre tópicos concretos e abstratos, incluindo discussões técnicas na sua área de especialização. Você pode interagir com falantes nativos com um grau significativo de fluência e espontaneidade que torna a comunicação regular com falantes nativos bastante possível sem tensão para qualquer parte.';
  } else if (score > 7 && score <= 8) {
    nivel = 'Seu nível de inglês é C1: Isso indica que você é capaz de compreender uma vasta gama de textos longos e exigentes, reconhecendo significados implícitos. Pode expressar-se de forma fluente e espontânea sem precisar procurar expressões. Você pode usar a língua de forma flexível e eficaz para fins sociais, acadêmicos e profissionais. Pode produzir textos claros, bem-estruturados e detalhados sobre temas complexos, mostrando um uso controlado de padrões organizacionais, conectores e dispositivos coesivos.';
  } else if (score > 8 && score <= 10) {
    nivel = 'Seu nível de inglês é C2: Isso indica que você consegue compreender com facilidade praticamente tudo o que lê ou ouve. Você pode resumir informações de diversas fontes faladas e escritas, reconstruindo argumentos e relatos em uma apresentação coerente. Você pode se expressar espontaneamente, de forma muito fluente e precisa, diferenciando nuances sutis de significado, mesmo em situações mais complexas.';
  }else {
    nivel = 'Pontuação fora do intervalo esperado.';
}



  // Salvar o nome do usuário e a pontuação no localStorage
  const nome = localStorage.getItem('nome');
  localStorage.setItem('score1', score);

  // Redirecionar para a página de resultados
  window.location.href = 'index3.html';



  // A PARTIR DAQUI TODAS AS ALTERAÇOES QUE FOREM FEITAS SERAO PARA UPDAPTE DO PROJETO //





}


