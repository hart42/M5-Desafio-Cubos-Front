import './statusClientes.css';

export default function ClientesHome(props) {
    const lista = [
        {
            nome: 'Cameron Willianson',
            vencimento: '21/10/2021',
            valor: '1000',
        },
        {
            nome: 'Savannah Nuyen',
            vencimento: '13/11/2021',
            valor: '5000',
        },
        {
            nome: 'Darlene Robertson',
            vencimento: '11/12/2021',
            valor: '500',
        },
        {
            nome: 'Marvin McKinney',
            vencimento: '21/10/2021',
            valor: '10000',
        },
    ]
    return (
        <div className="card-clientes-home">
            <div className="topo-tabela-clientes">

            </div>
            <div className="cabecalho-tabela-clientes">

            </div>
            {lista && lista.map((item) => {
                return (
                    <div className="linha-tabela-clientes">
                        <p className='nome-cliente'>{item.nome}</p>
                        <p>{item.vencimento}</p>
                        <p>{item.valor}</p>
                    </div>
                )
            })}
            <div className="final-tabela-clientes">
                <p>Ver Todos</p>
            </div>
        </div>
    )
}