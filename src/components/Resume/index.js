import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Despesas"
        Icon={FaRegArrowAltCircleDown}

        value={income}
      />
      <ResumeItem
        title="Receitas"
        Icon={FaRegArrowAltCircleUp}

        value={expense}
      />
      <ResumeItem title="Saldo" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
