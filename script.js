
    
// Initialize player name, wins, and losses
let playerName = "";
let wins = 0;
let losses = 0;

// Event listener for the start button
document.getElementById("startButton").addEventListener("click", function() {
    // Prompt for player name
    playerName = prompt("Enter your name:");
    if (playerName) {
        // Display welcome message and show game area
        document.getElementById("welcome").innerText = `Welcome, ${playerName}!`;
        document.getElementById("startButton").style.display = "none";
        document.getElementById("gameArea").style.display = "block";
    }
});

// Event listener for the play button
document.getElementById("playButton").addEventListener("click", function() {
    // Get player's choice and validate input
    let playerChoice = document.getElementById("playerChoice").value.toLowerCase();
    if (playerChoice !== "even" && playerChoice !== "odd") {
        alert("Invalid input! Please enter 'even' or 'odd'.");
        return;
    }

    // Display countdown
    let countdown = 3;
    document.getElementById("result").innerText = `Counting down: ${countdown}`;
    let countdownInterval = setInterval(function() {
        countdown--;
        document.getElementById("result").innerText = `Counting down: ${countdown}`;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            // Generate two random numbers between 1 and 4
            let num1 = Math.floor(Math.random() * 4) + 1;
            let num2 = Math.floor(Math.random() * 4) + 1;
            let sum = num1 + num2;
            // Determine if the sum is even or odd
            let result = (sum % 2 === 0) ? "even" : "odd";
            let outcome = "";

            // Determine if the player wins or loses
            if (playerChoice === result) {
                outcome = "win";
                wins++;
            } else {
                outcome = "lose";
                losses++;
            }

            // Display the result and score
            document.getElementById("result").innerText = `${playerName}, you chose ${playerChoice}, the sum was ${sum}, which is an ${result} number, you ${outcome}!`;
            document.getElementById("score").innerText = `That's ${wins} wins and ${losses} losses!`;
            document.getElementById("playAgainButton").style.display = "block";
        }
    }, 1000);
});

// Event listener for the play again button
document.getElementById("playAgainButton").addEventListener("click", function() {
    // Reset input and result display
    document.getElementById("playerChoice").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("playAgainButton").style.display = "none";
});
