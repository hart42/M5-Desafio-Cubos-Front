import './TabelaCobrancas.css';
import iconOrdenar from '../../assets/icon-ordenar.svg';
import useClients from '../../hooks/useClients';
import iconEditar from '../../assets/cobrancas/icon-editar.svg';
import iconExcluir from '../../assets/cobrancas/icon-excluir-rosa.svg';
import useGlobal from '../../hooks/useGlobal';

function TabelaCobrancas() {
  const { cobrancas } = useClients();
  const { setAbriModalEditCobranca, setCobrancaSelecionada, setAbriModalExcluirCobranca, setAbriModalDetalhesCobranca } = useGlobal();

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
        <p><img src={iconOrdenar} alt="" /> Cliente</p>
        <p><img src={iconOrdenar} alt="" /> ID Cob.</p>
        <p>Valor</p>
        <p>Data de venc.</p>
        <p>Status</p>
        <p>Descrição</p>
        <p> </p>
      </div>

      {cobrancas.map((cobranca) => {
        return (
          <div className="linhas-tabela-cobrancas" key={cobranca.id} >
            <p onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>{cobranca.cliente_nome}</p>
            <p onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>{cobranca.id}</p>
            <p onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>{cobranca.valor}</p>
            <p onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>{formatar(cobranca.vencimento)}</p>
            <div className='coluna-status' onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>
              <p className={"cobranca-" + verificarPendencia(cobranca.vencimento, cobranca.cobranca_status)}>{verificarPendencia(cobranca.vencimento, cobranca.cobranca_status)}</p>
            </div>
            <p onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalDetalhesCobranca(true)
            }}>{cobranca.descricao}</p>
            <p><button><img src={iconEditar} alt="" onClick={() => {
              setCobrancaSelecionada(cobranca)
              setAbriModalEditCobranca(true)
            }} /></button><button><img src={iconExcluir} alt=""
              onClick={() => {
                setCobrancaSelecionada(cobranca)
                setAbriModalExcluirCobranca(true)
              }} /></button></p>
          </div>
        )
      })}
    </section>
  )
}

export default TabelaCobrancas;