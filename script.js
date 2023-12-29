function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);

    displayResult(result, playerChoice, computerChoice);
}

function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
