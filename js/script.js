let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log('Random Number:', randomNumber);

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const gameContainer = document.getElementById('gameContainer');

let attempts = 0;
let gameActive = true;

const resetGame = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
    console.log('New Random Number:', randomNumber);
    
    attempts = 0;
    
    message.textContent = '';
    guessInput.value = '';
    
    guessButton.disabled = false;
    
    gameContainer.classList.remove('success');
};

const checkGuess = () => {
    if (!gameActive) {
        resetGame();
        gameActive = true;
    }

    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempt(s).`;
        message.style.color = 'green';
        guessButton.disabled = true; 
        
        gameContainer.classList.add('success');
        
        gameActive = false;
    } else {
        gameContainer.classList.add('shake');
        
        setTimeout(() => {
            gameContainer.classList.remove('shake');
        }, 500);

        if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Please enter a valid number.';
            message.style.color = 'red';
        }
    }

    guessInput.value = ''; 
    guessInput.focus();
};

guessButton.addEventListener('click', checkGuess);
