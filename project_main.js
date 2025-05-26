// 1. Deposit some amount.
// 2. Determine total lines of bet
// 3. Collect the bet amount.
// 4. Spin the slot machine.
// 5. check if user won
// 6. return the winnings / deduct the losing bet.
// 7. Play Again.

const prompt = require("prompt-sync")();

const Deposit = ()=> {

    while(true) {
        const depositAmount_str = prompt("Enter amount to deposit: ");
    let depositAmount = parseFloat(depositAmount_str);

    if(isNaN(depositAmount) || depositAmount < 5) {
        console.log("Enter a amount above 5. Try Again!");
    }else {
        return depositAmount;
    }
    }
}

const depositeAmt = Deposit();   // Holding the value returned from Deposit() func.