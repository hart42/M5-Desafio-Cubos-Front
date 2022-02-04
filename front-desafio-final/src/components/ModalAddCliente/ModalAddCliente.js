import { useState } from 'react';
import iconClienteCinza from '../../assets/icon-cliente-cinza.svg';
import iconFechar from '../../assets/icon-fechar.svg';
import useGlobal from '../../hooks/useGlobal';
import './ModalAddCliente.css';

const defaultValuesForm = { nome: '', email: '', cpf: '', telefone: '', endereco: '', complemento: '', cep: '', bairro: '', cidade: '', uf: '' };



function ModalAddCliente() {
    const { setAbrirModalAddCliente } = useGlobal()
    const [form, setForm] = useState(defaultValuesForm);
    const [errors, setErrors] = useState([])

    function handleChange(target) {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        setErrors(validarFormulario(defaultValuesForm))

        if (!form.email || !form.cpf || !form.nome) {
            return;
        }

        const body = {
            nome: form.nome,
            email: form.email,
            senha: form.cpf
        };
    }

    function validarFormulario(values) {
        const arrayErrors = {}

        if (!values.nome) {
            arrayErrors.nome = 'Este campo deve ser preenchido'
        }

        if (!values.senha) {
            arrayErrors.senha = 'Este campo deve ser preenchido'
        }

        if (!values.email) {
            arrayErrors.email = 'Este campo deve ser preenchido'
        }

        return arrayErrors
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
                    </div>
                    <div className='dividir-label'>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='cpf'>CPF*</label>
                            <input type='number' name='cpf' placeholder='Digite o CPF'
                                value={form.cpf}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='telefone'>Telefone*</label>
                            <input type='text' name='telefone' placeholder='Digite o telefone'
                                value={form.telefone}
                                onChange={(e) => handleChange(e.target)} />
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
                        <div className='label-modalAddCliente'>
                            <label htmlFor='cidade'>Cidade</label>
                            <input type='text' name='cidade' placeholder='Digite a Cidade'
                                value={form.cidade}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                        <div className='label-modalAddCliente'>
                            <label htmlFor='UF'>UF</label>
                            <input type='text' name='UF' placeholder='Digite a UF'
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