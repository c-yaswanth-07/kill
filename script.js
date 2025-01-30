let score = 0;
const scoreDisplay = document.getElementById('score');
const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');

function randomPosition() {
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function showTarget() {
    target.style.display = 'block';
    randomPosition();
}

function hideTarget() {
    target.style.display = 'none';
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    hideTarget();
    setTimeout(showTarget, 1000); // Show new target after 1 second
});

// Start the game
showTarget();
