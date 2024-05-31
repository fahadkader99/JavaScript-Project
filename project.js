// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings / take their bet if loose
// 7. Play again or not ?
/*--------------------------------------------------------------*/

const prompt = require("prompt-sync")();


// 1. Function - to deposite $$$
const deposit = () => {
    while(true){
        const depositAmount = prompt("\nEnter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("\nInvalid deposit amount, try again !");
        }else{
            return numberDepositAmount;
        }
    }

};


// 2. Function - number of lines to bet on
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("\nEnter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("\nInvalid number of lines, try again !");
        }else{
            return numberOfLines;
        }
    }
}


// 3. Function - Collect a bet amount
const getBet = (balance) => {
    while(true){
        const bet = prompt("\nEnter total bet: ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance){
            console.log("Invalid bet, try again !");
        }else{
            return numberBet;
        }
    }
}


//let balance = deposit();
//console.log(balance);

// const numberOfLines = getNumberOfLines();
// console.log(numberOfLines);

const betAmount = getBet();
console.log(betAmount);


