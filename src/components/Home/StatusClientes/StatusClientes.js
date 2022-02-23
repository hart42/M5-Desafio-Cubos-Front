import './statusClientes.css';

export default function ClientesHome(props) {
  function formatar(dataAPI) {
    let data = new Date(dataAPI);
    const dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    return dataFormatada;
  }
  return (
    <div className="card-clientes-home">
      <div className="topo-tabela-clientes">
        <span className="clientes-home-esquerdo">
          <img src={props.icone} alt="" /> <p>{props.titulo}</p>
        </span>
        <span
          className="clientes-home-direito"
          style={{
            width: '50px',
            height: '20px',
            backgroundColor: props.corBack,
            color: props.fontColor
          }}
        >
          {props.vencidas}
          {props.emDia}
        </span>
      </div>
      <div className="cabecalho-tabela-clientes-home">
        <p>Cliente</p>
        <p>Data de Venc.</p>
        <p>Valor</p>
      </div>
      {props.resumoVencidas &&
        props.resumoVencidas.slice(0, 4).map((item) => {
          return (
            <div className="linha-tabela-clientes-home">
              <p className="nome-cliente">{item.cliente_nome}</p>
              <p>{formatar(item.vencimento)}</p>
              <p className="valor-cliente">R$ {item.valor},00</p>
            </div>
          );
        })}
      {props.resumoEmDia &&
        props.resumoEmDia.slice(0, 4).map((item) => {
          return (
            <div className="linha-tabela-clientes-home">
              <p className="nome-cliente">{item.cliente_nome}</p>
              <p>{formatar(item.vencimento)}</p>
              <p className="valor-cliente">R$ {item.valor},00</p>
            </div>
          );
        })}
      <div className="final-tabela-clientes-home">
        <p>Ver Todos</p>
      </div>
    </div>
  );
}
