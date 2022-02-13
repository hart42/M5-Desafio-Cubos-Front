import useGlobal from "../../hooks/useGlobal";
import Layout from "../../components/Layout/Layout";
import iconCobrancaCinza from '../../assets/icon-cobranca-cinza.svg';
import iconLupa from '../../assets/icon-lupa.svg';
import iconFiltroRosa from '../../assets/icon-filtro-rosa.svg';
import './cobranca.css';
import TabelaCobrancas from "../../components/Cobrancas/TabelaCobrancas";

function Cobrancas() {

  return (
    <main>
      <Layout titulo='Cobranças' classe='cliente-header'>
        <section className="cobrancas-section-superior">
          <div className="titulo-section-superior">
            <img src={iconCobrancaCinza} alt="" />
            <p>Cobranças</p>
          </div>

          <div className="funcionalidades">
            <img className='btn-filtros-cobrancas' src={iconFiltroRosa} alt="Filtros" />
            <div className='pesquisa-cobrancas'>
              <input type="text" placeholder='Pesquisa' />
              <img src={iconLupa} alt="" />
            </div>
          </div>
        </section>

        <TabelaCobrancas />
      </Layout>
    </main>
  )
}

export default Cobrancas;