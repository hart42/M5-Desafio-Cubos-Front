import './ModalAddCobrancas.css';
import iconCobrancaCinza from '../../assets/icon-cobranca-cinza.svg';
import iconFechar from '../../assets/icon-fechar.svg';
import useGlobal from '../../hooks/useGlobal';
import { useState } from 'react';

const defaultValuesForm = { nome: 'jeremy', descricao: '', vencimento: '', valor: '' };

function ModalAddCobranca() {
  const { setAbriModalAddCobranca } = useGlobal();
  const [ form, setForm ] = useState(defaultValuesForm);


  function handleChange(target) {
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className='backdrop-modalAddCobranca'>
      <div className="container-modalAddCobranca">
        <div className="titulo-modaladdcobranca">
          <img src={iconCobrancaCinza} alt="Icone de Cobrança" />
          <p>Cadastro de Cobrança</p>
          <img src={iconFechar} alt="Fechar" className='btn-fechar-modalAddCliente' onClick={() => setAbriModalAddCobranca(false)} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="label-modalAddCliente">
            <label htmlFor="nome">Nome*</label>
            <input type="text"
              name='nome'
              placeholder='samurai'
              disabled
              value={form.nome}
            />
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="descricao">Descrição*</label>
            <textarea 
              id="story" 
              name="story"
              rows="5" 
              cols="33"
            >
              It was a dark and stormy night...
            </textarea>
          </div>

          <div className="dividir-label">
            <div className="label-modalAddCliente">
              <label htmlFor="vencimento">Vencimento:*</label>
              <input 
                type="text" 
                name='vencimento'
                placeholder='dd/mm/aaaa'
                value={form.vencimento}
                onChange={(e) => handleChange(e.target)}
              />
            </div>

            <div className="label-modalAddCliente">
              <label htmlFor="valor">Valor:*</label>
              <input 
                type="text" 
                name='valor'
                placeholder='Digite o valor'
                value={form.valor}
                onChange={(e) => handleChange(e.target)}
              />
            </div>
          </div>

          <div >
            <p>Status*</p>
            <div >

              <input 
                  type="radio" 
                  name='status' 
                  value="pago" 
                  id='pago'
              />
              <label htmlFor="pago"> Cobrança Paga</label>

              <label htmlFor='pendente'>
                <input 
                  type="radio" 
                  name='status'
                  id='pendente' 
                  checked 
                />
                Cobrança Pendente
              </label>
            </div>
          </div>
        </form>

      </div>
    </main>
  )
}

export default ModalAddCobranca;