import './TabelaCobrancas.css';
import iconOrdenar from '../../assets/icon-ordenar.svg';
import useClients from '../../hooks/useClients';
import iconEditar from '../../assets/cobrancas/icon-editar.svg';
import iconExcluir from '../../assets/cobrancas/icon-excluir-rosa.svg';
import { useEffect, useState } from 'react';

function TabelaCobrancas() {
  const { cobrancas } = useClients();
  const [ ordenaNome, setOrdenarNome ] = useState(false);
  const [ ordenarId, setOrdenarId ] = useState(false);

  function ordernarNome() {

    if( ordenaNome === true){
      cobrancas.sort((a, b) => {
        return a.cliente_nome.toLowerCase().localeCompare(b.cliente_nome.toLowerCase());
      });

      setOrdenarNome(!ordenaNome);
      
    }
    
    if( ordenaNome === false){
      cobrancas.sort((a, b) => {
        return b.cliente_nome.toLowerCase().localeCompare(a.cliente_nome.toLowerCase());
      });
      
      setOrdenarNome(!ordenaNome);

    }
    console.log(cobrancas);
  }

  useEffect(()=> {

  }, [cobrancas]);
  console.log('renderizou');

  function ordernarID() {
    if( ordenarId === true){
      cobrancas.sort((a, b) => {
        return a.id - b.id;
      });
      console.log (ordenarId);
      setOrdenarId(!ordenarId);
    }
    
    if( ordenarId === false){
      cobrancas.sort((a, b) => {
        return b.id - a.id;
      });
      
      setOrdenarId(!ordenarId);
      console.log (ordenarId);
    }
    console.log(cobrancas);
  }

  function formatar(dataAPI) {
    let data = new Date(dataAPI);
    const dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })

    return dataFormatada;
  }

  function verificarPendencia(data, status) {
    const dataAtual = new Date().getTime()
    const dataCobranca = new Date(data).getTime()

    if (status === 'pago') {
        return 'Pago'
    }

    if (dataCobranca - dataAtual > 0) {
        return 'Pendente'
    }

    if (dataCobranca - dataAtual < 0) {
        return 'Vencida'
    }
}

  return (
    <section className='tabela-cobrancas'>
      <div className="cabecalho-tabela-cobrancas">
        <p><button onClick={() => ordernarNome()}><img src={iconOrdenar} alt="" /></button>Cliente</p>
        <p> <button onClick={() => ordernarID()}><img src={iconOrdenar} alt="" /></button> ID Cob.</p>
        <p>Valor</p>
        <p>Data de venc.</p>
        <p>Status</p>
        <p>Descrição</p>
        <p> </p>
      </div>

      {cobrancas.map((cobranca) => {
        return (
          <div className="linhas-tabela-cobrancas" key={cobranca.id}>
            <p>{cobranca.cliente_nome}</p>
            <p>{cobranca.id}</p>
            <p>{cobranca.valor}</p>
            <p>{formatar(cobranca.vencimento)}</p>
            <div className='coluna-status'>
              <p className={"cobranca-" + verificarPendencia(cobranca.vencimento, cobranca.cobranca_status)}>{verificarPendencia(cobranca.vencimento, cobranca.cobranca_status)}</p>
            </div>
            <p>{cobranca.descricao}</p>
            <p><button><img src={iconEditar} alt="" /></button> <button><img src={iconExcluir} alt="" /></button></p>
          </div>
        )
      })}
    </section>
  )
}

export default TabelaCobrancas;