import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./FormMoney.css";

export const FormMoney = function ({ addTransactionHandler }) {
  const id = Math.random() * 100000;
  const onSubmit = (data) => {
    addTransactionHandler({ ...data, id });
  };
  const schema = yup.object().shape({
    transactionType: yup
      .string()
      .required("Please, select one option")
      .oneOf(["withdrawal", "deposit"], "Please, select one of the options"),
    transactionInfo: yup
      .string()
      .required("Please, select one option")
      .oneOf(
        [
          "salary",
          "utilities",
          "groceries",
          "restaurants",
          "shopping",
          "loan",
          "other",
        ],
        "Please, select one of the options"
      ),
    transactionAmount: yup
      .number("Please, enter positive number")
      .positive("Amount must be positive")
      .integer("Please, enter positive number")
      .max(1000000, "Maximum amount possible is 1 million")
      .required("Please, enter transaction amount"),
    transactionDate: yup.date().required("Please, enter transaction date"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <React.Fragment>
      <form className="new-transaction--form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="fill-form--msg">
          Please, fill the form to add new money transaction to your account
        </h3>
        <div className="form-field--wrapper">
          <label className="form-label" htmlFor="transaction-type">
            Choose a transaction type
          </label>
          <select
            className="form-select"
            id="transaction-type"
            {...register("transactionType")}
          >
            <option> --Please, choose an option--</option>
            <option value="withdrawal">Withdrawal</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>
        {errors.transactionType && (
          <p className="form-error--field">{errors.transactionType?.message}</p>
        )}
        <div className="form-field--wrapper">
          <label className="form-label" htmlFor="transaction-info">
            Specify some details about your transaction
          </label>
          <select
            className="form-select"
            id="transaction-info"
            {...register("transactionInfo")}
          >
            <option> --Please, choose an option--</option>
            <option value="salary">Salary</option>
            <option value="utilities">Utilities</option>
            <option value="groceries">Groceries</option>
            <option value="restaurants">Restaurants</option>
            <option value="shopping">Shopping</option>
            <option value="loan">Loan</option>
            <option value="other">Other</option>
          </select>
        </div>
        {errors.transactionInfo && (
          <p className="form-error--field">{errors.transactionInfo?.message}</p>
        )}
        <div className="form-field--wrapper">
          <label className="form-label" htmlFor="spending-amount">
            Transaction amount
          </label>
          <div className="amount-curr--wrapper">
            <input
              className="form-input"
              type="number"
              id="spending-amount"
              min="0"
              {...register("transactionAmount")}
            ></input>
            <h4 className="transaction-currency">$</h4>
          </div>
        </div>
        {errors.transactionAmount && (
          <p className="form-error--field">
            {errors.transactionAmount?.message}
          </p>
        )}
        <div className="form-field--wrapper">
          <label className="form-label" htmlFor="transaction-date">
            Enter the date{" "}
          </label>
          <input
            className="form-input-date"
            id="transaction-date"
            min="2020-01-01"
            placeholder="mm/dd/yyyy"
            type="date"
            {...register("transactionDate")}
          ></input>
        </div>
        {errors.transactionInfo && (
          <p className="form-error--field">{errors.transactionDate?.message}</p>
        )}
        <div className="form-btns">
          <button className="form-submit--btn form-btn" type="submit">
            Add
          </button>
          <button
            className="form-reset--btn form-btn"
            onClick={() => {
              reset();
            }}
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};
