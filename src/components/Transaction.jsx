import React from "react";
import "./Transaction.css";

export const Transaction = function ({
  transaction,
  deleteTransactionHandler,
}) {
  const symbol = transaction.transactionType === "withdrawal" ? "-" : "";
  const date = transaction.transactionDate.toString().split(" ");
  const transDate = date[1] + " " + date[2] + " " + date[3];
  console.log(transaction, transDate);
  return (
    <div className="transaction-wrapper">
      <img
        className="transaction-img"
        src={`${process.env.PUBLIC_URL}/${transaction.transactionInfo}.png`}
      />
      <div className="trans-details--wrapper">
        <h4 className="transaction-type">{transaction.transactionInfo}</h4>
        <h3 className="transaction-date">{transDate}</h3>
      </div>
      <div className="trans-amount-curr--wrapper">
        <h4 className="transaction-amount">
          {symbol} {transaction.transactionAmount}
        </h4>
        <h3 className="transaction-curr">$</h3>
      </div>
      <span
        className="close-btn"
        onClick={() => {
          deleteTransactionHandler(transaction.id);
        }}
      >
        <h4>x</h4>
      </span>
    </div>
  );
};
