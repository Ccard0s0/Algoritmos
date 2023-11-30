// Cores de outono
const autumnColors = ['#E36E21', '#A23D0A', '#FFD700', '#8B4513', '#FFA07A'];

// Função para escolher uma cor aleatória de outono
function getRandomAutumnColor() {
  return autumnColors[Math.floor(Math.random() * autumnColors.length)];
}

// Função para aplicar uma cor de outono ao título
function changeTitleColor() {
  var title = document.getElementById('color-changing-title');
  title.style.color = getRandomAutumnColor();
}

// Atualiza a cor do título a cada 1000 milissegundos (1 segundo)
setInterval(changeTitleColor, 1000);

const autumnEmojis = ['🍁', '🍂', '🌰', '🎃', '🌽', '🍎', '🍏'];

function getRandomAutumnEmoji() {
  return autumnEmojis[Math.floor(Math.random() * autumnEmojis.length)];
}

function updateEmoji() {
  var emojiContainer = document.getElementById('emoji-container');
  emojiContainer.textContent = getRandomAutumnEmoji();
}

// Atualiza o emoji a cada 1000 milissegundos (1 segundo)
setInterval(updateEmoji, 1000);

function gerarCorOutono() {
    // Gerar cores de outono de forma aleatória
    const coresOutono = ["#FF4500", "#DAA520", "#8B4513", "#FF6347", "#CD853F"];
    const corAleatoria = coresOutono[Math.floor(Math.random() * coresOutono.length)];
    return corAleatoria;
}

function aplicarCorBorda() {
    const videoContainer = document.getElementById('video-container');
    const novaCor = gerarCorOutono();
    videoContainer.style.borderColor = novaCor;
}

// Chamar a função para aplicar a cor da borda a cada 500 milissegundos (0.5 segundos)
setInterval(aplicarCorBorda, 500);

document.addEventListener('DOMContentLoaded', function () {
  // Obtenha o elemento de áudio
  const backgroundAudio = document.getElementById('background-audio');

  // Adicione o evento 'canplaythrough' para garantir que a música está carregada antes de reproduzir
  backgroundAudio.addEventListener('canplaythrough', function () {
      // Inicie a reprodução da música
      backgroundAudio.play();
  });
});

