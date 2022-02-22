import './cobrancas.css';

export default function CobrancasHome(props) {
  return (
    <div className="card-cobrancas">
      <div className="titulo-tabela">
        <span>{props.titulo}</span>
        <span
          className="cobrancas-home-direito"
          style={{
            width: '50px',
            height: '20px',
            backgroundColor: props.corBack,
            color: props.fontColor
          }}
        >
          {props.pagas}
          {props.vencidas}
          {props.pendentes}
        </span>
      </div>
      <div className="cabecalho-tabela">
        <p>Cliente</p>
        <p>ID da Cob.</p>
        <p>Valor</p>
      </div>
      {props.resumoPagas &&
        props.resumoPagas.slice(0, 4).map((item) => {
          return (
            <div className="linha-tabela">
              <p className="nome-cliente">{item.cliente_nome}</p>
              <p>{item.id}</p>
              <p className="valor-cliente">R$ {item.valor},00</p>
            </div>
          );
        })}
      {props.resumoVencidas &&
        props.resumoVencidas.slice(0, 4).map((item) => {
          return (
            <div className="linha-tabela">
              <p className="nome-cliente">{item.cliente_nome}</p>
              <p>{item.id}</p>
              <p className="valor-cliente">R$ {item.valor},00</p>
            </div>
          );
        })}
      {props.resumoPendentes &&
        props.resumoPendentes.slice(0, 4).map((item) => {
          return (
            <div className="linha-tabela">
              <p className="nome-cliente">{item.cliente_nome}</p>
              <p>{item.id}</p>
              <p className="valor-cliente">R$ {item.valor},00</p>
            </div>
          );
        })}
      <div className="final-tabela">
        <p>Ver Todos</p>
      </div>
    </div>
  );
}
