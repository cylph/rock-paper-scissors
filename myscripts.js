function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissor"]
    
    let random = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    console.log(random + " computer choice")
    return random
}


function playRound(playerChoice, computerSelection) {
    if ((computerSelection === "rock" && playerChoice === "rock") || (computerSelection === "scissor" && playerChoice === "scissor") || (computerSelection === "paper" && playerChoice === "paper")) {
        return "Draw"
    } else if ((computerSelection === "paper" && playerChoice === "rock") || (computerSelection === "rock" && playerChoice === "scissor") || (computerSelection === "scissor" && playerChoice === "paper")) {
        return "You lose this round!"
    } else if ((computerSelection === "scissor" && playerChoice === "rock") || (computerSelection === "paper" && playerChoice === "scissor") || (computerSelection === "rock" && playerChoice === "paper")) {
        return "You win this round!"
    }
}
   

function game(playerChoice) {
    const title = document.getElementById('title');
    let roundResult = playRound(playerChoice, getComputerChoice());
    if (roundResult == "Draw") {
        title.textContent = "Draw"
    } else if (roundResult == "You lose this round!") {
        title.textContent = "You lose this round!"
        computer = computer + 1
    } else if (roundResult == "You win this round!"){
        title.textContent = "You win this round!"
        player = player + 1 
    }
    console.log(computer + " computer score")
    console.log(player +" player score")
    if (player === 5) {
        title.textContent = "-- Player Wins --"
        btns.forEach(elem => {
            elem.disabled = true
        })

    }else if (computer === 5) {
        title.textContent = "-- Computer Wins --"
        btns.forEach(elem => {
            elem.disabled = true
        })
    }
}

    let player = 0;
    let computer = 0;
    const btns = document.querySelectorAll("button");
    console.log(btns)
        btns.forEach((button) => {
            button.addEventListener('click', () => {
                console.log(button.textContent.toLowerCase() + " player choice")
                game(button.textContent.toLowerCase());
            });
        });
   /* const title = document.getElementById('title');
    if (computer > player) {
        title.textContent = "-- Computer Wins --"
        
    } if (player > computer) {
        title.textContent = "-- Player Wins --"
    } else {
        title.textContent = "-- Draw --"
    }*/