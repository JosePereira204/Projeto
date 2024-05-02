// Home.js
import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ControleFinanceiro from "../../components/ControleFinanceiro"; 
import Resume from "../../components/Resume";
import Form from "../../components/Form";
import Navbar from '../../components/NavBarHome';

const Home = () => {

  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));
  
    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));
  
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0);
  
    const total = Math.abs(income - expense);
  
    setIncome(`R$ ${expense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    setExpense(`R$ ${income.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  }, [transactionsList]);
  
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <C.Container>
      <Navbar />
      <ControleFinanceiro /> {/* Renderizando o componente ControleFinanceiro */}
      <Resume income={income} expense={expense} total={total} /> {/* Renderizando o componente Resume */}
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      /> {/* Renderizando o componente Form */}
      
      
    </C.Container>
  );
};

export default Home;
