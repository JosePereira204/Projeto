import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import ControleFinanceiro from "../../components/ControleFinanceiro"; // Importando o componente ControleFinanceiro

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Controle Financeiro</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      <ControleFinanceiro /> {/* Renderizando o componente ControleFinanceiro */}
    </C.Container>
  );
};

export default Home;
