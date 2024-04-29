import React, { useState } from 'react';

function ControleFinanceiro() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('entrada');
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = () => {
    if (descricao && valor && tipo) {
      const novaTransacao = { descricao, valor: parseFloat(valor), tipo };
      setTransacoes([...transacoes, novaTransacao]);
      setDescricao('');
      setValor('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const removerTransacao = index => {
    const novasTransacoes = [...transacoes];
    novasTransacoes.splice(index, 1);
    setTransacoes(novasTransacoes);
  };

  return (
    <div>
      <h1>Controle Financeiro</h1>
      <div>
        <button onClick={() => setTipo('entrada')}>Entrada</button>
        <button onClick={() => setTipo('saida')}>Saída</button>
        <button onClick={() => setTipo('total')}>Total</button>
      </div>
      <div>
        <input
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={valor}
          onChange={e => setValor(e.target.value)}
          placeholder="Valor"
        />
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <button onClick={adicionarTransacao}>Adicionar</button>
      </div>
      <div>
        <h2>Histórico</h2>
        <ul>
          {transacoes.map((transacao, index) => (
            <li key={index}>
              {transacao.descricao} | {transacao.valor} | {transacao.tipo}
              <button onClick={() => removerTransacao(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ControleFinanceiro;
