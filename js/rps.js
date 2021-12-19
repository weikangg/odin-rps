const array = ["Rock","Paper","Scissors"];
let comp_result = "a";

// Get a random result for the computer 

function computerPlay(arr){
    index = Math.floor(Math.random() * arr.length);
    result = arr[index];
    // console.log(typeof result);
    return result;
}

// Determine the winner for 1 round

function playRound(playerSelection,computerSelection){
    // Default let result = 0 which means player loses.
    // Result = 1 means player wins.
    // Result = 2 means player & computer ties.
    let res = 0;

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        alert("You Lose!\nPaper (Com) beats Rock (You)");
        return res; 
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        alert("You Win!\nRock (You) beats Scissors (Com)");
        res = 1;
        return res;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
        alert("Tie! Both are rocks");
        res = 2;
        return res;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        alert("Tie! Both are paper");
        res = 2;
        return res;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        alert("You Win!\nPaper (You) beats Rock (Com)");
        res = 1;
        return res;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        alert("You Lose!\nScissors (Com) beats Paper (You)");
        return res;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        alert("You Win!\nScissors (You) beats Paper! (Com) ");
        res = 1;
        return res;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors"){
        alert("Tie! Both are scissors");
        res = 2;
        return res;
    }
    else{
        alert("You Lose!\nRock (Com) beats Scissors (You)");
        return res;
    }
}

// const playerSelection = "rock";
// let computerSelection = computerPlay(array);
// console.log(computerSelection);
// console.log(playRound(playerSelection,computerSelection));

function game(){
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 1; i<=5;i++){
        const playerSelection = prompt("Please input your choice of rock, paper or scissors!");
        const computerSelection = computerPlay(array);
        result = playRound(playerSelection,computerSelection);
        switch(result){
            case 0:
                lose++;
                break;
            case 1:
                win++;
                break;
            case 2:
                tie++;
                break;
        }
    }

    if (win > lose){
        alert(`You WIN!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
    }

    else if(lose > win){
        alert(`You LOSE!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
    }
    
    else{
        alert(`You TIED!! \nYour record was ${win} wins, ${lose} losses and ${tie} ties.`);
    }
}

game();