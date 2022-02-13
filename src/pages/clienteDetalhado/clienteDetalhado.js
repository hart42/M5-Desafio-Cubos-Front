import iconClienteCinza from '../../assets/icon-cliente-cinza.svg';
import Layout from '../../components/Layout/Layout';
import iconOrdenar from '../../assets/icon-ordenar.svg'
import iconEditar from '../../assets/icon-editar.svg'
import iconExcluir from '../../assets/icon-excluir.svg'
import useGlobal from '../../hooks/useGlobal';
import ModalEditCliente from '../../components/ModalEditCliente/ModalEditCliente';
import './clienteDetalhado.css'


function ClienteDetalhado() {
    const { abrirModalEditCliente, setAbrirModalEditCliente } = useGlobal()


    return (
        <main>
            <Layout titulo='Cliente' classe='cliente-header'>

                <div className='titulo-cliente-detalhado'>
                    <img src={iconClienteCinza} />
                    <p>Sara Lage Silva</p>
                </div>

                <div className='tabela-detalhes-cliente'>

                    <div className='tabela-linha-um'>
                        <p className='titulo-tabela-cliente-detalhado'>Dados do cliente</p>
                        <button className='btn-editar-cliente' onClick={() => setAbrirModalEditCliente(true)}>Editar cliente</button>
                    </div>
                    <div className='tabela-linha-dois'>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Email</p>
                            <p className='info-cliente-detalhado'>sarasilva@gmail.com</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Telefone</p>
                            <p className='info-cliente-detalhado'>7199462654</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>CPF</p>
                            <p className='info-cliente-detalhado'>05436525587</p>
                        </div>
                    </div>

                    <div className='tabela-linha-um'>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Endereço</p>
                            <p className='info-cliente-detalhado'>Rua das comélias, n°512</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Bairro</p>
                            <p className='info-cliente-detalhado'>Oliveiras</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Complemento</p>
                            <p className='info-cliente-detalhado'>Ap 502</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>CEP</p>
                            <p className='info-cliente-detalhado'>03165452404</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Cidade</p>
                            <p className='info-cliente-detalhado'>Salvador</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>UF</p>
                            <p className='info-cliente-detalhado'>BA</p>
                        </div>
                    </div>
                </div>

                <div className='tabela-detalhes-cliente'>
                    <div className="tabela-linha-um">
                        <p className='titulo-tabela-cliente-detalhado'>Cobranças do cliente</p>
                        <button className='btn-nova-cobranca'>+ Nova cobrança</button>
                    </div>
                    <div className="tabela-linha-titulos">
                        <p className="coluna-id"><img src={iconOrdenar} />  ID cob.</p>
                        <p className="coluna-data"><img src={iconOrdenar} />Data de vencimento</p>
                        <p className="coluna-valor">Valor</p>
                        <p className="coluna-status">Status</p>
                        <p className="coluna-descricao">Descriçao</p>
                        <p className="coluna-icons"></p>
                    </div>
                    <div className="tabela-linha-cobrancas-cliente">
                        <div className="linha-cobrancas-cliente">
                            <p className="coluna-id">24885482</p>
                            <p className="coluna-data">26/01/2021</p>
                            <p className="coluna-valor">R$ 500,00</p>
                            <p className="coluna-status">Vencida</p>
                            <p className="coluna-descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo recusandae perspiciatis.</p>
                            <p className="coluna-icons">
                                <img src={iconEditar} alt="Editar" />
                                <img src={iconExcluir} alt="Excluir" />
                            </p>
                        </div>
                        <div className="linha-cobrancas-cliente">
                            <p className="coluna-id">24885482</p>
                            <p className="coluna-data">26/01/2021</p>
                            <p className="coluna-valor">R$ 500,00</p>
                            <p className="coluna-status">Vencida</p>
                            <p className="coluna-descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo recusandae perspiciatis.</p>
                            <p className="coluna-icons">
                                <img src={iconEditar} alt="Editar" />
                                <img src={iconExcluir} alt="Excluir" />
                            </p>
                        </div>
                    </div>
                </div>

                {abrirModalEditCliente && <ModalEditCliente />}
            </Layout>
        </main>
    );
}

export default ClienteDetalhado;
