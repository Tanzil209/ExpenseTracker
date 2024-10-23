// done to import backend into the frontend and to access data from API OF BACKEND

import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  //income
  const addIncome = async (income) => {
    //this will send the items to the data base
    const response = await axios
      .post(`${BASE_URL}/add-income`, income) //add-income is the endpoint
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncome();
  };

  const getIncome = async () => {
    const response = await axios.get(`${BASE_URL}/get-income`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  //expense
  const addExpense = async (income) => {
    //this will send the items to the data base
    const response = await axios
      .post(`${BASE_URL}/add-expense`, income) //add-income is the endpoint
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpense();
  };

  const getExpense = async () => {
    const response = await axios.get(`${BASE_URL}/get-expense`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
    getExpense();
  };

  const totalExpense = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpense,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};