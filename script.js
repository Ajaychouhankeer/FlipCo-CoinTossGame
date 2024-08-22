const coin = document.getElementById('coin');
const flipButton = document.getElementById('flipButton');
const flipSound = document.getElementById('flipSound');

function flipCoin() {
    flipButton.disabled = true;
    flipSound.play();
    
    const flipDuration = Math.floor(Math.random() * 3) + 3; // Random duration between 3 to 5 seconds
    const flipCount = Math.floor(flipDuration * 10); // 10 flips per second
    
    let flipCounter = 0;
    const flipInterval = setInterval(() => {
        coin.style.transform = `rotateY(${flipCounter * 180}deg)`;
        flipCounter++;
        
        if (flipCounter >= flipCount) {
            clearInterval(flipInterval);
            const result = Math.random() < 0.5 ? 'YES' : 'NO';
            coin.style.transform = result === 'YES' ? 'rotateY(0deg)' : 'rotateY(180deg)';
            flipButton.disabled = false;
        }
    }, 100);
}

flipButton.addEventListener('click', flipCoin);
coin.addEventListener('click', flipCoin);