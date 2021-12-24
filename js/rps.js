let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll(".btn");
// Get a random result for the computer 

function computerPlay(){
    choice = ["rock","paper","scissors"];
    index = Math.floor(Math.random() * choice.length);
    result = choice[index];

    return result;
}

function disableButtons(){
    btns.forEach(elem => {
        elem.disabled = true;
    })
}

// Determine the winner for 1 round

function playRound(playerSelection){
    let res = "";
    let computerSelection = computerPlay();
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            playerScore++;
        }
        res = `You win! ${playerSelection} beats ${computerSelection}<br><br>
                Player score: ${playerScore}<br>
                Computer score: ${computerScore}`;
        if (playerScore === 5){
            disableButtons();
            res += "<br><br>You win! Reload the page to play again!";
        }

    else if (playerSelection === computerSelection){
        res = `It's a tie! You both chose ${playerSelection}<br>
                Player score: ${playerScore}<br>
                Computer score: ${computerScore}`;
    }
    else{
        computerScore++;
        res = `You lose! ${playerSelection} beats ${computerSelection}<br><br>
        Player score: ${playerScore}<br>
        Computer score: ${computerScore}`;

        if (computerScore === 5){
            disableButtons();
            res += "<br><br>You lose! Reload the page to play again!";
        }
    }
    document.getElementById("result").innerHTML = res;
    return ;
}

btns.forEach(btn => {
    btn.addEventListener("click",function(){
        playRound(btn.value);
    })
})

// const playerSelection = "rock";
// let computerSelection = computerPlay(array);
// console.log(computerSelection);
// console.log(playRound(playerSelection,computerSelection));

// function game(){
//     let win = 0;
//     let lose = 0;
//     let tie = 0;
//     for (let i = 1; i<=5;i++){
//         const playerSelection = prompt("Please input your choice of rock, paper or scissors!");
//         const computerSelection = computerPlay(array);
//         result = playRound(playerSelection,computerSelection);
//         switch(result){
//             case 0:
//                 lose++;
//                 break;
//             case 1:
//                 win++;
//                 break;
//             case 2:
//                 tie++;
//                 break;
//         }
//     }

//     if (win > lose){
//         alert(`You WIN!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
//     }

//     else if(lose > win){
//         alert(`You LOSE!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
//     }

//     else{
//         alert(`You TIED!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
//     }
// }

// game();

