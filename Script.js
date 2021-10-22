const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(Event){
    if (Event.keyCode === 32){
        if (!isJumping){
            jump();
        }
    }
}
function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);

        //descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                    }
                }, 20);
            } else {
                //pulando
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20); 
}

function createcactus(){
    const Cactus = document.createElement('div');
    let cactusPosition = 1200;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    Cactus.classList.add('Cactus');
    Cactus.style.left = 1200 + 'px';
    background.appendChild(Cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition <- 60) {
            clearInterval(leftInterval)
            background.removeChild(Cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60)   {
            //GameOver
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim do Jogo</h1>';
        } else {
            cactusPosition -= 10;
            Cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createcactus, randomTime);
}

createcactus();
document.addEventListener('keyup', handleKeyUp);
   