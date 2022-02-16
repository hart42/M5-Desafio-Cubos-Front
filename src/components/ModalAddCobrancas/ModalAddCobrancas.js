import './ModalAddCobrancas.css';
import iconCobrancaCinza from '../../assets/icon-cobranca-cinza.svg';
import iconFechar from '../../assets/icon-fechar.svg';
import useGlobal from '../../hooks/useGlobal';
import { useState } from 'react';
import iconCheckdVerde from '../../assets/cobrancas/icon-checked.svg';
import iconCheckdCinza from '../../assets/cobrancas/icon-check-cinza.svg';

const defaultValuesForm = { nome: 'jeremy', descricao: '', vencimento: '', valor: '' };

function ModalAddCobranca() {
  const { setAbriModalAddCobranca } = useGlobal();
  const [ form, setForm ] = useState(defaultValuesForm);
  const [ statusCobranca, setStatusCobranca ] = useState('pendente') ;
  const objErrors = {};
  const [ errors, setErrors ] = useState([]);


  function handleChange(target) {
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setErrors(validarFormulario(form));

    if (Object.keys(validarFormulario(form)).length !== 0) {
      return;
    }
  }

  function validarFormulario(values) {
    if(!values.descricao) {
      objErrors.descricao = 'Este campo deve ser preenchido'
    }

    if(!values.vencimento) {
      objErrors.vencimento = 'Este campo deve ser preenchido';
    }

    if(!values.valor) {
      objErrors.valor = 'Este campo deve ser preenchido'
    }

    return objErrors;
  }

  return (
    <main className='backdrop-modalAddCobranca'>
      <div className="container-modalAddCobranca">
        <div className="titulo-modaladdCobranca">
          <img src={iconCobrancaCinza} alt="Icone de Cobrança" />
          <p>Cadastro de Cobrança</p>
          <img src={iconFechar} alt="Fechar" className='btn-fechar-modalAddCobranca' onClick={() => setAbriModalAddCobranca(false)} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="label-modalAddCobranca">
            <label htmlFor="nome">Nome*</label>
            <input type="text"
              name='nome'
              placeholder='samurai'
              disabled
              value={form.nome}
            />
          </div>

          <div className="label-descricao">
            <label htmlFor="descricao">Descrição*</label>
            <textarea 
              id="descricao" 
              name="descricao"
              rows="5" 
              cols="62"
              value={form.descricao}
              onChange={(e) => handleChange(e.target)}
            >
              Digite a descrição
            </textarea>
          </div>

          <div className="dividir-label">
            <div className="label-modalAddCobranca">
              <label htmlFor="vencimento">Vencimento:*</label>
              <input 
                type="date" 
                name='vencimento'
                placeholder='dd/mm/aaaa'
                value={form.vencimento}
                onChange={(e) => handleChange(e.target)}
              />
            </div>

            <div className="label-modalAddCobranca">
              <label htmlFor="valor">Valor:*</label>
              <input 
                type="number" 
                min="0.00" 
                max="1000000.00" 
                step="0.01" 
                name='valor'
                placeholder='Digite o valor'
                value={form.valor}
                onChange={(e) => handleChange(e.target)}
              />
            </div>
          </div>

          <div >
            <p>Status*</p>
            <div className='statusCobranca'>
              <img 
                src={statusCobranca === 'pago' ? iconCheckdVerde : iconCheckdCinza} 
                alt="icone" 
                onClick={() => setStatusCobranca(statusCobranca === 'pago' ? '' : 'pago')}
              />
              <p>Cobrança Paga</p>
            </div>
            <div className='statusCobranca'>
              <img 
                src={statusCobranca === 'pendente' ? iconCheckdVerde : iconCheckdCinza} 
                alt="icone" 
                onClick={() => setStatusCobranca(statusCobranca === 'pendente' ? '' : 'pendente')}
              />
              <p>Cobrança Pendente</p>
            </div>
          </div>
          <div className='buttons-cobranca'>
            <button
              onClick={() => setAbriModalAddCobranca(false)}
              className='btn-cancelar-modalAddCobranca'
            >
              Cancelar
            </button>
            <button
              className='btn-aplicar-modalAddCobranca'
            >
              Aplicar
            </button>
          </div>
        </form>

      </div>
    </main>
  )
}

export default ModalAddCobranca;