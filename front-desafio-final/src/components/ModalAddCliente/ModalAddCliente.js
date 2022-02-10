import { useState } from 'react';
import iconClienteCinza from '../../assets/icon-cliente-cinza.svg';
import iconFechar from '../../assets/icon-fechar.svg';
import useGlobal from '../../hooks/useGlobal';
import './ModalAddCliente.css';

const defaultValuesForm = { nome: '', email: '', cpf: '', telefone: '', endereco: ' ', complemento: ' ', cep: ' ', bairro: ' ', cidade: ' ', uf: ' ' };


function ModalAddCliente() {
    const { setAbrirModalAddCliente, setAbrirModalFeedbackAddCliente, handleAdicionarCliente, clientes } = useGlobal()
    const [form, setForm] = useState(defaultValuesForm);
    const [errors, setErrors] = useState([])

    function handleChange(target) {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrors(validarFormulario(form))

        if (Object.keys(validarFormulario(form)).length !== 0) {
            return;
        }

        const cepBody = form.cep.trim() || 0;

        const body = {
            nome: form.nome,
            email: form.email,
            cpf: form.cpf,
            telefone: form.telefone,
            logradouro: form.endereco,
            complemento: form.complemento,
            cep: cepBody,
            bairro: form.bairro,
            cidade: form.cidade,
            estado: form.uf
        };

        const resposta = await handleAdicionarCliente(body)

        if (resposta.status === 201) {
            setAbrirModalAddCliente(false)
            setAbrirModalFeedbackAddCliente(true)
        }
    }

    function validarFormulario(values) {
        const objErrors = {}

        if (!values.nome) {
            objErrors.nome = 'Este campo deve ser preenchido'
        }

        if (!values.cpf) {
            objErrors.cpf = 'Este campo deve ser preenchido'
        }

        if (values.cpf.length !== 11 && values.cpf.length > 0) {
            objErrors.cpfValido = 'CPF inválido'
        }

        const cpfExiste = clientes.filter(cliente => cliente.cpf == values.cpf)
        if (cpfExiste.length > 0) {
            objErrors.cpfExiste = 'CPF já cadastrado'
        }


        if (!values.email) {
            objErrors.email = 'Este campo deve ser preenchido'
        }

        const emailExiste = clientes.filter(cliente => cliente.email === values.email)
        if (emailExiste.length > 0) {
            objErrors.emailExiste = 'E-mail já cadastrado'
        }

        if (!values.telefone) {
            objErrors.telefone = 'Este campo deve ser preenchido'
        }

        return objErrors
    }

    return (
        <main className='backdrop-modalAddCliente'>
            <div className='container-modalAddCliente'>
                <div className='titulo-modaladdcliente'>
                    <img src={iconClienteCinza} alt='Icone cliente' />
                    <p>Cadastro do Cliente</p>
                    <img src={iconFechar} alt='Fechar' className='btn-fechar-modalAddCliente'
                        onClick={() => setAbrirModalAddCliente(false)} />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='label-modalAddCliente'>
                        <label htmlFor='nome'>Nome*</label>
                        <input type='text' name='nome' placeholder='Digite o nome'
                            value={form.nome}
                            onChange={(e) => handleChange(e.target)}
                        />
                        {errors.nome && <span className="erro-form">{errors.nome}</span>}
                    </div>
                    <div className='label-modalAddCliente'>
                        <label htmlFor='email'>E-mail*</label>
                        <input type='email' name='email' placeholder='Digite o e-mail'
                            value={form.email}
                            onChange={(e) => handleChange(e.target)} />
                        {errors.email && <span className="erro-form">{errors.email}</span>}
                        {errors.emailExiste && <span className="erro-form">{errors.emailExiste}</span>}

                    </div>
                    <div className='dividir-label'>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='cpf'>CPF*</label>
                            <input type='number' name='cpf' placeholder='Digite o CPF'
                                value={form.cpf}
                                onChange={(e) => handleChange(e.target)} />
                            {errors.cpf && <span className="erro-form">{errors.cpf}</span>}
                            {errors.cpfValido && <span className="erro-form">{errors.cpfValido}</span>}
                            {errors.cpfExiste && <span className="erro-form">{errors.cpfExiste}</span>}

                        </div>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='telefone'>Telefone*</label>
                            <input type='number' name='telefone' placeholder='Digite o telefone'
                                value={form.telefone}
                                onChange={(e) => handleChange(e.target)} />
                            {errors.telefone && <span className="erro-form">{errors.telefone}</span>}
                        </div>
                    </div>
                    <div className='label-modalAddCliente'>
                        <label htmlFor='endereco'>Endereço</label>
                        <input type='text' name='endereco' placeholder='Digite o endereço'
                            value={form.endereco}
                            onChange={(e) => handleChange(e.target)} />
                    </div>
                    <div className='label-modalAddCliente'>
                        <label htmlFor='complemento'>Complemento</label>
                        <input type='text' name='complemento' placeholder='Digite o complemento'
                            value={form.complemento}
                            onChange={(e) => handleChange(e.target)} />
                    </div>
                    <div className='dividir-label'>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='cep'>CEP</label>
                            <input type='number' name='cep' placeholder='Digite o CEP'
                                value={form.cep}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='bairro'>Bairro</label>
                            <input type='text' name='bairro' placeholder='Digite o Bairro'
                                value={form.bairro}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                    </div>
                    <div className='dividir-label'>
                        <div className='label-modalAddCliente label-dif-maior'>
                            <label htmlFor='cidade'>Cidade</label>
                            <input type='text' name='cidade' placeholder='Digite a Cidade'
                                value={form.cidade}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                        <div className='label-modalAddCliente label-dif-menor'>
                            <label htmlFor='uf'>UF</label>
                            <input type='text' name='uf' placeholder='Digite a UF'
                                value={form.uf}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                    </div>
                    <div>
                        <button className='btn-cancelar-modalAddCliente'>Cancelar</button>
                        <button className='btn-aplicar-modalAddCliente'>Aplicar</button>
                    </div>
                </form>
            </div >
        </main >
    );
}

export default ModalAddCliente;