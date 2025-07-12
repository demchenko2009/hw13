const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};



const account = {
    balance: 0,
    transactions: [],
    id: 1,
    // метод створює транзакцію, приймає кошти і тип транзакції поповнення або зняття
    createTransaction(amount, type)  {
        const newTransaction = { // обєкт транзакцій
            amount: amount,  // гроші
            type: type,  // зняття або поповнення
            id: this.id,
        }
        this.id += 1;
        return newTransaction
    },

        //  Метод відповідає за додавання суми до балансу.
    deposit(amount) {
        this.balance += amount;
        const depTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(depTransaction);
    },


//    * Метод відповідає за зняття суми з балансу.
    withdraw(amount) {
        if (this.balance < amount) {  // перевіряємо чи достатньо коштів
            alert("Not enough resource")
            return; // якщо не достатньо коштів, виходимо з функції
        }

        this.balance -= amount;
        const withTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(withTransaction);
    },




getBalance() { // метод який повертає загальну суму балансу
    return this.balance;
},



    getTransactionDetails(id) { // метод який шукає транзакції по айді
        for (const el of this.transactions) {
            console.log(el.id);
            
            if (el.id === id) {
                return el;
            } 
        }
        return null;
    },


  getTransactionTotal(type) {
    let total = 0;
    for ( const el of this.transactions) {
        // console.log(el.amount);
        if (el.type === type) {
            total += el.amount;
        }
        
    }
    return total;
  }


}

account.deposit(100);
account.deposit(300);
account.deposit(1020);
account.withdraw(230)
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));





// перше


const users = {
  name: "ivan",
  age: 16,
  hobby: "football",
  premium: true,
};

users.mood = "haii";
users.hobby = "dribl";
users.premium = false;

const keys = Object.keys(users);

for (const key of keys) {
  const { [key]: value } = users;
  console.log(`${key}: ${value}`);
}

console.log(users);
console.log(keys);



// друге 



const userInfo = {
  name: "Nazar",
  age: 15,
  city: "Kyiv",
};

const { name, age, city } = userInfo;

function count() {
  return [name, age, city].length;
}

console.log(count());







// третє
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



const team = {
  Anna: 29,
  Sergiy: 35,
  Oksana: 31,
  Ivan: 41,
};

function findBestEmployee(employees) {
  let bestPlayer = "";
  let max = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > max) {
      max = tasks;
      bestPlayer = name;
    }
  }

  return bestPlayer;
}

console.log(findBestEmployee(team)); 


// четверте



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".



const salaries = {
  Anna: 5000,
  Ivan: 7200,
  Oksana: 6100,

};


const { Anna, Ivan, Oksana } = salaries;

const employees = { Anna, Ivan, Oksana };

function countTotalSalary(obj) {
  let total = 0;
  for (const name in obj) {
    total += obj[name]; 
  }

  return total;
}

console.log(countTotalSalary(employees));





// пяте

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


const products = [
  { name: "Apple", price: 100, quantity: 1 },
  { name: "Sumsung", price: 20, quantity: 120 },
  { name: "Xiaomi", price: 5, quantity: 1000 },
];

function getAllPropValues(arr, prop) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const { name, price, quantity } = item;

  
    if (prop === "name") {
      result.push(name);

    } else if (prop === "price") {
      result.push(price);

    } else if (prop === "quantity") {
      result.push(quantity);

    }
  }


  return result;
}

console.log(getAllPropValues(products, "name"));    
console.log(getAllPropValues(products, "price"));  
console.log(getAllPropValues(products, "quantity"));


// шосте


const productsі = [
  { name: "Apple", price: 100, quantity: 2 },
  { name: "Samsung", price: 20, quantity: 120 },
  { name: "Xiaomi", price: 5, quantity: 1000 },
];

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {

    const { name, price, quantity } = allProducts[i];

    if (name === productName) {
      totalPrice = price * quantity;
      break; 
    }
  }

  return totalPrice;
}

console.log(calculateTotalPrice(productsі, "Apple"));   
console.log(calculateTotalPrice(productsі, "Samsung"));
console.log(calculateTotalPrice(productsі, "Xiaomi"));  


// сьоме



const Transactionn = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const accountt = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    const transaction = { type: Transactionn.DEPOSIT, amount };
    const { type, amount: transactionAmount } = transaction;
    this.transactions.push({ type, amount: transactionAmount });
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо грошей");
      return;
    }
    this.balance -= amount;
    const transaction = { type: Transactionn.WITHDRAW, amount };
    const { type, amount: transactionAmount } = transaction;
    this.transactions.push({ type, amount: transactionAmount });
  },
};

accountt.deposit(300);
accountt.withdraw(100);

console.log(accountt.balance);
console.log(accountt.transactions);
