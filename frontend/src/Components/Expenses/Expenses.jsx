import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext.jsx";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const Expenses = () => {
  const { addIncome, getExpense , expenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <ExpenseStyle>
      <Inner>
        <h1>Expenses</h1>
        <h3 className="total-income">
          Total Expense : <span>₹ {totalExpense ()}</span>
        </h3>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm/>
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description ,type} =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </Inner>
    </ExpenseStyle>
  );
};

export default Expenses;

const ExpenseStyle = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

const Inner = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
`;
