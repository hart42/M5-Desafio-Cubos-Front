import './TabelaCobrancas.css';
import iconOrdenar from '../../assets/icon-ordenar.svg';
import useCrobrancas from '../../hooks/useCobrancas';
import iconEditar from '../../assets/cobrancas/icon-editar.svg';
import iconExcluir from '../../assets/cobrancas/icon-excluir-rosa.svg';
import cobrancasTeste from '../../mockado/listaCobrancasTeste';

function TabelaCobrancas() {
  // const { cobrancas } = useCrobrancas();
  const cobrancas = cobrancasTeste;

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
          <div className="linhas-tabela-cobrancas">
            <p>{cobranca.clienteNome}</p>
            <p>{cobranca.id}</p>
            <p>{cobranca.valor}</p>
            <p>{cobranca.data}</p>
            <p>{cobranca.status}</p>
            <p>{cobranca.descricao}</p>
            <p><button><img src={iconEditar} alt="" /></button> <button><img src={iconExcluir} alt="" /></button></p>
          </div>
        )
      })}
    </section>
  )
}

export default TabelaCobrancas;