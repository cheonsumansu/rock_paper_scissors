let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randNumber = Math.floor(Math.random()*3);
    return choices[randNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    result_p.classList.add("green-highlight");
    setTimeout(()=> result_p.classList.remove("green-highlight"), 1000);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You lose...`;
    result_p.classList.add("red-highlight");
    setTimeout(()=> result_p.classList.remove("red-highlight"), 1000);
}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${userChoice} equals to ${computerChoice}. It's a draw.`;
    result_p.classList.add("yellow-highlight");
    setTimeout(()=> result_p.classList.remove("yellow-highlight"), 1000);
}

function rpsGame(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case "Rockscissors":
        case "Paperrock":
        case "Scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "Rockpaper":
        case "Paperscissors":
        case "Scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "Rockrock":
        case "Paperpaper":
        case "Scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener("click", ()=> rpsGame("Rock"));
paper_div.addEventListener("click", ()=> rpsGame("Paper"));
scissors_div.addEventListener("click", ()=> rpsGame("Scissors"));