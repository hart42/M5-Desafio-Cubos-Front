import iconClienteCinza from '../../assets/icon-cliente-cinza.svg';
import Layout from '../../components/Layout/Layout';
import iconOrdenar from '../../assets/icon-ordenar.svg'
import iconEditar from '../../assets/cobrancas/icon-editar.svg';
import iconExcluir from '../../assets/cobrancas/icon-excluir-rosa.svg';
import useGlobal from '../../hooks/useGlobal';
import ModalEditCliente from '../../components/ModalEditCliente/ModalEditCliente';
import { useState, useEffect } from 'react';
import './clienteDetalhado.css'
import useRequests from '../../hooks/useRequests';
import ModalAddCobrancas from '../../components/ModalAddCobrancas/ModalAddCobrancas'
import { useParams } from 'react-router-dom';



function ClienteDetalhado() {
    const requisicao = useRequests()
    const {id} = useParams();
    const { abrirModalEditCliente, setAbrirModalEditCliente, setClienteSelecionado, clienteSelecionado, setAbriModalAddCobranca, abriModalAddCobranca } = useGlobal()
    const [ clienteCobranca, setClienteCobranca ] = useState({});

    async function handleObterCliente() {
        const resposta = await requisicao.getOne('clientes', id)

        setClienteSelecionado(resposta)
    }


    useEffect(() => {
        handleObterCliente() // eslint-disable-next-line
    }, [id])

    return (
        <main>
            <Layout titulo='Cliente' classe='cliente-header' subclasse='cliente-detalhado'>

                <div className='titulo-cliente-detalhado'>
                    <img src={iconClienteCinza} alt='icone cliente' />
                    <p>{clienteSelecionado && clienteSelecionado.nome}</p>
                </div>

                <div className='tabela-detalhes-cliente'>

                    <div className='tabela-linha-um'>
                        <p className='titulo-tabela-cliente-detalhado'>Dados do cliente</p>
                        <button className='btn-editar-cliente' onClick={() => setAbrirModalEditCliente(true)}>Editar cliente</button>
                    </div>
                    <div className='tabela-linha-dois'>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Email</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && clienteSelecionado.email}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Telefone</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && clienteSelecionado.telefone}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>CPF</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && clienteSelecionado.cpf}</p>
                        </div>
                    </div>

                    <div className='tabela-linha-um'>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Endereço</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.logradouro || '-')}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Bairro</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.bairro || '-')}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Complemento</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.complemento || '-')}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>CEP</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.cep || '-')}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>Cidade</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.cidade || '-')}</p>
                        </div>
                        <div>
                            <p className='titulo-info-cliente-detalhado'>UF</p>
                            <p className='info-cliente-detalhado'>{clienteSelecionado && (clienteSelecionado.estado || '-')}</p>
                        </div>
                    </div>
                </div>

                <div className='tabela-detalhes-cliente'>
                    <div className="tabela-linha-um">
                        <p className='titulo-tabela-cliente-detalhado'>Cobranças do cliente</p>
                        <button className='btn-nova-cobranca' onClick={() => {
                            setClienteCobranca({ 
                                id: clienteSelecionado.id,
                                nome: clienteSelecionado.nome
                            });
                            setAbriModalAddCobranca(true)
                        }}>+ Nova cobrança</button>
                    </div>
                    <div className="tabela-linha-titulos">
                        <p className="coluna-id"><img src={iconOrdenar} alt='ordenar' />  ID cob.</p>
                        <p className="coluna-data"><img src={iconOrdenar} alt='ordenar' />Data de vencimento</p>
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
                {abriModalAddCobranca && <ModalAddCobrancas 
                    cliente = { clienteCobranca }
                />}
            </Layout>
        </main>
    );
}

export default ClienteDetalhado;
