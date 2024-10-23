import React, { useEffect } from "react";
import styled from "styled-components";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";
import { dollar } from "../../utils/Icons";
import History from "../History/History";

const Dashboard = () => {
  const {
    totalExpense,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncome,
    getExpense,
  } = useGlobalContext();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <DashboardStyled>
      <Inner>
        <h2>All Transactions</h2>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h3>Total Income</h3>
                <p>
                ₹{totalIncome()}

                </p>
              </div>
              <div className="expense">
                <h3>Total Expense</h3>
                <p>
                ₹{totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h3>Total Balance</h3>
                <p>
                ₹{totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>₹{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>₹{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>₹{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>₹{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </Inner>
    </DashboardStyled>
  );
};

export default Dashboard;

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    padding:1rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 2rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 2.5rem;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.2rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1rem;
        }
      }
    }
  }
`;
 
const Inner = styled.div`
  
  padding: 2rem 1.5rem;
  width: 100%;
`;
