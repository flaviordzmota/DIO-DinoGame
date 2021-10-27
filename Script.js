const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
 

let isJumping = false;
let isGameOver = false;
let position = 40;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    } 
  }
}
function score(){
  let score = handleKeyUp();
  console.log(score);
  document.body.innerHTML = '<h1 class="pontos">Pontuação</h1>';
}
function jump() { 
  isJumping = true;
  
  let upInterval = setInterval(() => {
    if (position >= 150) {
      // Descendo  
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 40) {
          clearInterval(downInterval);
          isJumping = false; 
        } else {
          position -= 40;    
          dino.style.bottom = position + 'px';
        }
      }, 30);
    } else {  
      // Subindo
      position += 20;
      dino.style.bottom = position + 'px';
    }  
  }, 20);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 2000;
  let randomTime = Math.random() * 8000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 50 && position < 50) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime); 
} 

function createPlatinha() {
  const platinha = document.createElement('div');
  let platinhaPosition = 1000;
  let randomTime = Math.random() * 9010;
  
  if (isGameOver) return; 

  platinha   .classList.add('platinha');
  background.appendChild(platinha);
  platinha.style.left = platinhaPosition + 'px';

  let leftTimer = setInterval(() => {
    if (platinhaPosition < -60) {
      // Saiu da tela 
      clearInterval(leftTimer);
      background.removeChild(platinha);
    } else if (platinhaPosition > 0 && platinhaPosition < 50 && position < 50) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      platinhaPosition -= 10;
      platinha.style.left = platinhaPosition + 'px';
    }
  }, 20);

  setTimeout(createPlatinha, randomTime); 
}

createCactus();
createPlatinha();
document.addEventListener('keyup', handleKeyUp);
  