import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      alert("O valor tem que ser um número positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: parseFloat(amount),
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };


  const handleChangeAmount = (e) => {
    const value = e.target.value.replace(',', '.');
    if (!isNaN(value) || value === '') {
      setAmount(value);
    }
  };
  

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="text"
            onChange={handleChangeAmount}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(false)}
          />
          <C.Label htmlFor="rIncome">Receita</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(true)}
          />
          <C.Label htmlFor="rExpenses">Despesa</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
