import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext.jsx";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const Income = () => {
  const { addIncome, getIncome, incomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <IncomeStyle>
      <Inner>
        <h1>Incomes</h1>
        <h3 className="total-income">
          Total Income : <span>₹ {totalIncome()}</span>
        </h3>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
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
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </Inner>
    </IncomeStyle>
  );
};

export default Income;

const IncomeStyle = styled.div`
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
