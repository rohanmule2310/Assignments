// Store all transactions in an array
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Variables
let creditCount: number = 0;
let debitCount: number = 0;

let totalCredit: number = 0;
let totalDebit: number = 0;

let balance: number = 0;

let suspiciousCount: number = 0;

// Loop through all transactions
for (let i = 0; i < transactions.length; i++) {

    let amount = transactions[i];

    // Fix for TypeScript
    if (amount === undefined) {
        continue;
    }

    // Credit
    if (amount > 0) {
        creditCount++;
        totalCredit = totalCredit + amount;
    }

    // Debit
    else {
        debitCount++;
        totalDebit = totalDebit + amount;
    }

    // Balance
    balance = balance + amount;

    // Suspicious Transaction
    if (amount > 10000 || amount < -10000) {
        console.log("Suspicious Transaction with Amount: " + amount);
        suspiciousCount++;
    }
}

// Output
console.log("----------------------------");
console.log("Credit Transactions : " + creditCount);
console.log("Debit Transactions  : " + debitCount);

console.log("----------------------------");
console.log("Total Credit Amount : " + totalCredit);
console.log("Total Debit Amount  : " + totalDebit);

console.log("----------------------------");
console.log("Remaining Balance   : " + balance);

console.log("----------------------------");
console.log("Suspicious Transactions : " + suspiciousCount);