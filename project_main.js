// 1. Deposit some amount.
// 2. Determine total lines of bet
// 3. Collect the bet amount.
// 4. Spin the slot machine.
// 5. check if user won
// 6. return the winnings / deduct the losing bet.
// 7. Play Again.

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNTS = { //this shows the total number of entities present.
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {  //this shows the bet amount of each entity.
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const Deposit = () => {
  while (true) {
    const depositAmount_str = prompt("Enter amount to deposit: ");
    let depositeAmt = parseFloat(depositAmount_str);

    if (isNaN(depositeAmt) || depositeAmt < 5) {
      console.log("Enter a amount above 5. Try Again!");
    } else {
      return depositeAmt;
    }
  }
};

const getNumofLineToBet = () => {
  while (true) {
    const getTotalLine_str = prompt("Enter total lines to bet on (1-3): ");
    let getTotalLine = parseFloat(getTotalLine_str);

    if (isNaN(getTotalLine) || getTotalLine < 0 || getTotalLine > 3) {
      console.log("Invalid number of Lines. Try Again!");
    } else {
      return getTotalLine;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line. ");
    let numBet = parseFloat(bet);

    if (isNaN(numBet) || numBet < 0 || numBet > balance / lines) {
      console.log("Invalid Bet. Try Again!");
    } else {
      return numBet;
    }
  }
};

const spinSlot = ()=> {
    const symbols = [];
    for(const [symbols, count] of Object.entries(SYMBOL_COUNTS)) {
        console.log(symbols,count);
    }
}
spinSlot();
let walletBalance = Deposit(); // Holding the value returned from Deposit() func.
const numberOfLines = getNumofLineToBet();
const betAmount = getBet(walletBalance, numberOfLines);

