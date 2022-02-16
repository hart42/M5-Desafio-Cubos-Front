import './TabelaClientes.css'
import ModalAddCobrancas from '../ModalAddCobrancas/ModalAddCobrancas'
import iconCriarCobranca from '../../assets/icon-criarcobranca-rosa.svg'
import iconOrdenar from '../../assets/icon-ordenar.svg'
import useClients from '../../hooks/useClients';
import { Link } from 'react-router-dom';
import useGlobal from '../../hooks/useGlobal';
import { useState } from 'react';

function TabelaClientes() {
    const { clientes } = useClients();
    const { setIdCliente, setAbriModalAddCobranca, abriModalAddCobranca } = useGlobal();
    const [ clienteCobranca, setClienteCobranca ] = useState({});

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
                    <div className="linhas-tabela-clientes" key={cliente.id}>
                        <p onClick={() => setIdCliente(cliente.id)}><Link to={`/Clientes/cliente/${cliente.id}`}>{cliente.nome}</Link></p>
                        <p>{cliente.cpf}</p>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefone}</p>
                        {/* <p><span className={cliente.status === 'Inadimplente' ? 'cliente-inadimplente' : 'cliente-em-dia'}>{cliente.status}</span></p> */}
                        <p ><span className='cliente-inadimplente'>Inadimplente</span></p>
                        <p><img src={iconCriarCobranca} alt="Criar Cobrança" onClick={() => {
                            setClienteCobranca({
                                id: cliente.id,
                                nome: cliente.nome
                            });
                            setAbriModalAddCobranca(true);
                        } } /></p>
                    </div>
                )
            })}

            {abriModalAddCobranca && 
                <ModalAddCobrancas 
                    cliente = { clienteCobranca }
                />
            }
        </section>
    );
}

export default TabelaClientes;
