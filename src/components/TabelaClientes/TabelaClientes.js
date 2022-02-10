import './TabelaClientes.css'
import { useEffect } from 'react'
import iconCriarCobranca from '../../assets/icon-criarcobranca-rosa.svg'
import iconOrdenar from '../../assets/icon-ordenar.svg'
import useGlobal from '../../hooks/useGlobal';


function TabelaClientes() {
    const { handleCarregarClientes, clientes } = useGlobal()

    useEffect(() => {
        handleCarregarClientes()
    }, [handleCarregarClientes])

    return (
        <section className='tabela-clientes'>
            <div className="cabecalho-tabela-clientes">
                <p><img src={iconOrdenar} alt="" /> Clientes</p>
                <p>CPF</p>
                <p>E-mail</p>
                <p>Telefone</p>
                <p>Status</p>
                <p>Criar Cobrança</p>
            </div>

            {clientes.map((cliente) => {
                return (
                    <div className="linhas-tabela-clientes">
                        <p>{cliente.nome}</p>
                        <p>{cliente.cpf}</p>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefone}</p>
                        {/* <p><span className={cliente.status === 'Inadimplente' ? 'cliente-inadimplente' : 'cliente-em-dia'}>{cliente.status}</span></p> */}
                        <p ><span className='cliente-inadimplente'>Inadimplente</span></p>
                        <p><img src={iconCriarCobranca} alt="" onClick={() => handleCarregarClientes()} /></p>
                    </div>
                )
            })}


        </section>
    );
}

export default TabelaClientes;
