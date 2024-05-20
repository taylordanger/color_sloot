var currentPlayer = 1;
var player1Score = 0;
var player2Score = 0;
var goal = 10;
var randButtonId;

setBoard();

function setBoard() {
    var R = randomNumber(0, 255);
    var G = randomNumber(0, 255);
    var B = randomNumber(0, 255);
    var color = rgb(R, G, B);

    setProperty("button1", "background-color", color);
    setProperty("button2", "background-color", color);
    setProperty("button3", "background-color", color);
    setProperty("button4", "background-color", color);

    R = (R + randomNumber(0, 100)) % 256;
    G = (G + randomNumber(0, 100)) % 256;
    B = (B + randomNumber(0, 100)) % 256;
    var diffColor = rgb(R, G, B);

    randButtonId = "button" + randomNumber(1, 4); 
    setProperty(randButtonId, "background-color", diffColor);
    console.log("Correct button is: " + randButtonId);
}

function switchPlayer() {
    if (currentPlayer == 1) {
        currentPlayer = 2;
    } else {
        currentPlayer = 1;
    }
    console.log("Current player is: " + currentPlayer);
}

function updateScore() {
    if (currentPlayer == 1) {
        player1Score++;
        if (player1Score >= goal) {
            console.log(" wow wee!!! Player 1 wins!");
            setText(score1_label +1)
            resetGame();
        }
    } else {
        player2Score++;
        if (player2Score >= goal) {
            console.log(" ayo!!! Player 2 wins!");
            setText(score2_label +1);
            resetGame();
        }
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    setBoard();
}

function checkCorrect(buttonId) {
    console.log("Checking: " + buttonId);
    if (buttonId == randButtonId) {
        console.log("You got it right!");
        updateScore();
    } else {
        console.log("NOPE Wrong!");
    }
    switchPlayer();
    setBoard();
}

onEvent("button1", "click", function() {
    checkCorrect("button1");
});
onEvent("button2", "click", function() {
    checkCorrect("button2");
});
onEvent("button3", "click", function() {
    checkCorrect("button3");
});
onEvent("button4", "click", function() {
    checkCorrect("button4");
});
