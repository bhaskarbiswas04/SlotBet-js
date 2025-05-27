// 1. Deposit some amount.
// 2. Determine total lines of bet
// 3. Collect the bet amount.
// 4. Spin the slot machine.
// 5. check if user won
// 6. return the winnings.
// 7. Play Again.

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNTS = {
  //this shows the total number of entities present.
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  //this shows the bet amount of each entity.
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Functions ---->
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

const spinSlot = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNTS)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines)=> {
    let winnings = 0;
    for(let row=0; row<lines; row++) {
      const symbols = rows[row];
      let allSame = true;
      for(const symbol of symbols) {
        if(symbol != symbols[0]) {
          allSame = false;
          break;
        }
      }
      
      if(allSame) {
        winnings += bet * SYMBOL_VALUES[symbols[0]];
      }
    }
    return winnings;
}

// Function Calls ----->
const reel = spinSlot();
const trans = transpose(reel);
let walletBalance = Deposit(); // Holding the value returned from Deposit() func.
const numberOfLines = getNumofLineToBet();
const betAmount = getBet(walletBalance, numberOfLines);
const winning = getWinnings(trans, betAmount, numberOfLines);
printRows(trans);
console.log("You won $" + winning);
