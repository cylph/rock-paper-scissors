function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissor"]
    
    let random = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    console.log(random)
    return random
}


function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "scissor" && playerSelection === "scissor") || (computerSelection === "paper" && playerSelection === "paper")) {
        return "Draw"
    } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissor") || (computerSelection === "scissor" && playerSelection === "paper")) {
        return "You lose this round!"
    } else if ((computerSelection === "scissor" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "rock" && playerSelection === "paper")) {
        return "You win this round!"
    }
  }
   
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  let player = 0;
  let computer = 0;

function getPlayerChoice() {
    let playerChoice = prompt("Pick one | Rock | Paper | Scissor").toLowerCase();
    console.log(playerChoice)
    return playerChoice
}


  function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        let computerchoiceRound = playRound(getPlayerChoice(), getComputerChoice());
        if (computerchoiceRound == "Draw") {
        } else if (computerchoiceRound == "You lose this round!") {
            computer = computer + 1
        } else if (computerchoiceRound == "You win this round!"){
            player = player + 1
        }
    }
    console.log(computer)
    console.log(player)
    if (computer > player) {
        return "-- Computer Wins --"
    } if (player > computer) {
        return "-- Player Wins --"
    } else {
        return "-- Draw --"
    }

  }

  console.log(game())