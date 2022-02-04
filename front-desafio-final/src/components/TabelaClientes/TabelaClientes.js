import './TabelaClientes.css'
import iconCriarCobranca from '../../assets/icon-criarcobranca-rosa.svg'
import iconOrdenar from '../../assets/icon-ordenar.svg'
import { useState } from 'react';


function TabelaClientes() {
    const [status, setStatus] = useState('inadimplente')

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

            <div className="linhas-tabela-clientes">
                <p>Jeremy Paule</p>
                <p>888.888.888.88</p>
                <p>Jeremy_paule@gmail.com</p>
                <p>99 99999 9999</p>
                <p><span className={status === 'inadimplente' ? 'cliente-inadimplente' : 'cliente-em-dia'}>Inadimplente</span></p>
                <p><img src={iconCriarCobranca} alt="" /></p>
            </div>
        </section>
    );
}

export default TabelaClientes;
