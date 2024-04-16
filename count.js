const crypto = require('crypto');

function createCounter() {
    let count = 0;
  
    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count
    };
  }
  
  const counter = createCounter();
  
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.decrement()); // 1
  console.log(counter.getCount()); // 1

  function createBankAccount(initialBalance) {
    let balance = initialBalance;
    const transactionHistory = [];
  
    return {
      deposit: function(amount) {
        balance += amount;
        transactionHistory.push({ type: 'deposit', amount });
        return balance;
      },
      withdraw: function(amount) {
        if (amount <= balance) {
          balance -= amount;
          transactionHistory.push({ type: 'withdrawal', amount });
          return balance;
        } else {
          console.log('Insufficient funds');
        }
      },
      getBalance: function() {
        return balance;
      },
      getTransactionHistory: function() {
        return transactionHistory;
      }
    };
  }
  
  // Usage
  const account = createBankAccount(1000);
  console.log(account.getBalance()); // Output: 1000
  
  account.deposit(500);
  console.log(account.getBalance()); // Output: 1500
  
  account.withdraw(200);
  console.log(account.getBalance()); // Output: 1300
  
  console.log(account.getTransactionHistory());
  // Output: [{ type: 'deposit', amount: 500 }, { type: 'withdrawal', amount: 200 }]

  function createBlockchain() {
    const chain = [];
    let currentIndex = 0;
  
    function calculateHash(index, previousHash, timestamp, data) {
        const hash = crypto.createHash('sha256');
        hash.update(index + previousHash + timestamp + JSON.stringify(data));
        return hash.digest('hex');
      }
  
    function createBlock(data) {
      const timestamp = new Date().toISOString();
      const previousBlock = chain[currentIndex - 1];
      const previousHash = previousBlock ? previousBlock.hash : '0';
      const index = currentIndex;
      const hash = calculateHash(index, previousHash, timestamp, data);
      const block = {
        index,
        timestamp,
        data,
        previousHash,
        hash
      };
      currentIndex++;
      return block;
    }
  
    function addBlock(data) {
      const newBlock = createBlock(data);
      chain.push(newBlock);
      return newBlock;
    }
  
    function getLatestBlock() {
      return chain[currentIndex - 1];
    }
  
    return {
      createBlock,
      addBlock,
      getLatestBlock,
      getChain: () => chain
    };
  }
  
  // Usage
  const blockchain = createBlockchain();
  
  blockchain.addBlock({ amount: 10, sender: 'Alice', recipient: 'Bob' });
  blockchain.addBlock({ amount: 20, sender: 'Bob', recipient: 'Charlie' });
  
  console.log(blockchain.getChain());

  function createExponentFunction(exponent) {
    return function(value) {
        return Math.pow(value, exponent);
    };
}

const square = createExponentFunction(2);
console.log(square(2)); // Output: 4
console.log(square(10)); // Output: 100

const cube = createExponentFunction(3);
console.log(cube(2)); // Output: 8
console.log(cube(3)); // Output: 27

function AuniqueIDGenerator(prefix) {
    let id = 0;
    return function() {
        id++;
        return prefix + id;
    };
}

const getBookID = AuniqueIDGenerator("book-");
console.log(getBookID()); // Output: book-1
console.log(getBookID()); // Output: book-2

const getUserID = AuniqueIDGenerator("user_");
console.log(getUserID()); // Output: user_1
console.log(getUserID()); // Output: user_2



function uniqueIDGenerator(prefix='') {
    let counter = 0;
    return () => {
        counter++;
        const id = prefix + crypto.randomBytes(8).toString('hex') + counter;
        return id;
    };
}

// Creamos generadores de ID únicos con diferentes prefijos
const generateUserID = uniqueIDGenerator();
const generateProductID = uniqueIDGenerator('product_');

// Generamos algunos IDs únicos
console.log(generateUserID()); // Ejemplo de ID de usuario: u7b2f8c04
console.log(generateProductID()); // Ejemplo de ID de producto: product_e68a64d85
console.log(generateUserID()); // Otro ID de usuario único: u7b2f8c05