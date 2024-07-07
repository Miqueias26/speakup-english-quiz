

// FUNCAO CRIADA PARA MANIPULACAO DO BOTAO NIGHT MODE, FINALIZA NA LINHA 50 //

var nightmode = document.getElementById ('nightmode');
nightmode.addEventListener('onclick', nightmodeon);

// ACIMA AS VARIAVEL CRIADA E O OUVINTE PARA O EVENTO JA ADICIONADO NO BOTAO NO INDEX.HTML//


function nightmodeon() {

  // VARIAVEIS CRIADAS PARA ACIONAMENTO DO NIGHT MODE EM CADA ELEMENTO//
  var body = document.body;
  var header = document.getElementById ('header');
  let button = document.querySelector ('.button');
  let button2= document.querySelector ('#button');
  var levels = document.querySelector ('.levels')
  var h2 = document.getElementById ('agora');
  var icon = document.getElementById ('iconnightmode');
  

  //APLICACAO DAS CORES DARK //
  levels.style.background = '#D3D3D3';
  h2.style.color = 'white';
  header.style.background = '#040526';
  body.style.background = '#040526';
  button.style.background = '#8d05ff';
  button2.style.background = '#8d05ff';

  // aplicacao das cores no icone/botao darkmode //
  icon.style.background = 'white';
  icon.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)';
  icon.style.borderRadius = '20px'
  
    

    

  const h5 = document.querySelectorAll('h5');
  h5.forEach(h5 => {
    h5.style.color = 'white';})



  /*EVENTO NIGHTMODEOFF  CRIADO DENTRO DO NIGHTMODEON, ASSIM NAO PRECISA CRIAR MAIS VARIAVEIS APENAS REPLICAS AS MESAS ALTERANDO AS CORES*/

  nightmode.addEventListener ('dblclick', nightmodeoff);

  function nightmodeoff() {
//APLICACAO DAS CORES PARA REVERTER AO PADRAO // 
    const h5 = document.querySelectorAll('h5');
    h5.forEach(h5 => {
      h5.style.color = 'black';}) 

    levels.style.background = '#F2F5F8'
    header.style.background = '#ffffffcc';
    body.style.background = 'white';
    button.style.background = '#0BC7E8';
    button2.style.background = '#0BC7E8';
    


    icon.style.background = 'none';
    icon.style.boxShadow = 'none';
    
    
  
  }
}








