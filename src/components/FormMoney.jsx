import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormMoney = function () {
  const onSubmit = (data) => {
    console.log(data);
  };
  const schema = yup.object().shape({
    transactionType: yup.string().required("Please, select one option"),
    transactionInfo: yup.string().required("Please, select one option"),
    transactionAmount: yup
      .number()
      .required("Please, enter transaction amount")
      .positive("Amount must be positive"),
    transactionDate: yup
      .date()
      .required("Please, enter transaction date")
      .max(Date),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="fill-form--msg">
          Please, fill the form to add new money transaction to your account.
        </h3>
        <label for="transaction-type">Choose a transaction type</label>
        <select id="transaction-type" {...register("transactionType")}>
          <option value="default"> --Please, choose an option--</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="deposit">Deposit</option>
        </select>
        <label for="transaction-info">
          Specify some details about your transaction
        </label>
        <select id="transaction-info" {...register("transactionInfo")}>
          <option value="default"> --Please, choose an option--</option>
          <option value="salary">Salary</option>
          <option value="utilities">Utilities</option>
          <option value="groceries">Groceries</option>
          <option value="restaurants">Restaurants</option>
          <option value="shopping">Shopping</option>
          <option value="loan">Loan</option>
          <option value="other">Other</option>
        </select>
        <label for="spending-amount">Transaction amount</label>
        <input
          type="number"
          id="spending-amount"
          {...register("transactionAmount")}
        ></input>
        ;<h4 className="transaction-currency">$</h4>
        <label for="transaction-date" />
        <input
          id="transaction-date"
          min="01/01/2020"
          placeholder="mm/dd/yyyy"
          type="date"
          {...register("transactionDate")}
        ></input>
        <button type="submit">Add</button>
        <button type="button">Reset</button>
      </form>
    </React.Fragment>
  );
};
