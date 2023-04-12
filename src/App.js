import "./App.css";
import { FormMoney } from "./components/FormMoney";
import "./Main.css";
import logo from "./img/logo.png";
import { useReducer } from "react";
import { Transaction } from "./components/Transaction";
import { TransactionsContext } from "./components/FormMoney";

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
    if (action.type === "SORT") {
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
  const sortbyDateTransactionHandler = (transactions) => {
    dispatchTransactions({ type: "SORT", transaction: transaction });
  };

  return (
    <div className="app">
      <header>
        <img className="logo-img" src={logo} />
      </header>

      <FormMoney addTransactionHandler={addTransactionHandler} />
      <div className="all-transactions">
        <TransactionsContext.Provider value={transactions}>
          <div className="sorting-wrapper">
            <label htmlFor="selection-type">Sort by </label>
            <select
              id="selection-type"
              onChange={(e) => {
                if ((e.target.value = "newest")) {
                  if ((e.target.value = "accending")) {
                  } else {
                  }
                }
              }}
            >
              <option value="newest">Newest</option>
              <option value="accending">Accending</option>
              <option value="decending">Decending</option>
            </select>
          </div>
        </TransactionsContext.Provider>
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
