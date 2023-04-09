import "./App.css";
import { FormMoney } from "./components/FormMoney";
import "./Main.css";
import logo from "./img/logo.png";
import { useState, useReducer } from "react";
import { Transaction } from "./components/Transaction";

function App() {
  // const [transactions, setTransactions] = useState([]);
  const defaultTransactionsState = {
    transactions: [],
  };
  const transactionsReducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedTransactions = [...state.transactions, action.transaction];
      return {
        transactions: updatedTransactions,
      };
    }
    if (action.type === "REMOVE") {
      return {
        transactions: state.transactions.filter((el) => {
          return el.id !== action.id;
        }),
      };
    }
  };

  const [transactionsState, dispatchTransactions] = useReducer(
    transactionsReducer,
    defaultTransactionsState
  );

  const addTransactionHandler = (transaction) => {
    dispatchTransactions({ type: "ADD", transaction: transaction });
  };
  const deleteTransactionHandler = (id) => {
    dispatchTransactions({ type: "REMOVE", id: id });
  };

  return (
    <div className="app">
      <header>
        <img className="logo-img" src={logo} />
      </header>
      <FormMoney addTransactionHandler={addTransactionHandler} />
      <div className="all-transactions">
        {transactionsState.transactions.map((t) => {
          return (
            <Transaction
              deleteTransactionHandler={deleteTransactionHandler}
              key={t.id}
              transaction={t}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
