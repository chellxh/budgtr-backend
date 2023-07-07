const { v4: uuidv4 } = require("uuid");

const budgetData = [
  {
    id: uuidv4(),
    name: "a",
    amount: 916,
    date: "July 6 2023",
    from: "employer",
    category: "income",
  },
  {
    id: uuidv4(),
    name: "b",
    amount: 630,
    date: "July 5 2023",
    from: "bank",
    category: "general services",
  },
  {
    id: uuidv4(),
    name: "c",
    amount: -30,
    date: "July 4 2023",
    from: "fanduel",
    category: "general entertainment",
  },
  {
    id: uuidv4(),
    name: "d",
    amount: -72,
    date: "July 4 2023",
    from: "chiles",
    category: "restaurant",
  },
  {
    id: uuidv4(),
    name: "e",
    amount: -230,
    date: "July 4 2023",
    from: "fireworks depot",
    category: "general entertainment",
  },
];

module.exports = budgetData;

/* 
- - - - name
income
savings
catfood
- - - - From
bank
employer
pet store
grocery store

- - - - Category
gas station
groceries
general entertainment
Restaurant
general shopping
gaming
general services
pay anyone transfer
*/
