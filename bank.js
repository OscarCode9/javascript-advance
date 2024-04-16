class BankAccount {
    constructor(accountHolder, accountNumber, balance = 0) {
      this.accountHolder = accountHolder;
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amt) {
      if (amt > 0) {
        this.balance += amt;
        return `Deposited $${amt}. New balance: $${this.balance}`;
      } else {
        return 'Invalid deposit amount. Please enter a positive value.';
      }
    }
  
    withdraw(amt) {
      if (amt > 0 && amt <= this.balance) {
        this.balance -= amt;
        return `Withdrawn $${amt}. New balance: $${this.balance}`;
      } else if (amt > this.balance) {
        return 'Insufficient funds. Withdrawal denied.';
      } else {
        return 'Invalid withdrawal amount. Please enter a positive value.';
      }
    }
  }
  
  // Example usage:
  const myAccount = new BankAccount('John Doe', '1234567890');
  
  console.log(myAccount.deposit(100)); // Deposited $100. New balance: $100
  console.log(myAccount.withdraw(50)); // Withdrawn $50. New balance: $50
  console.log(myAccount.withdraw(70)); // Insufficient funds. Withdrawal denied.
  console.log(myAccount.deposit(-20)); // Invalid deposit amount. Please enter a positive value.
  
  