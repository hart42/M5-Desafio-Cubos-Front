import iconClienteCinza from '../../assets/icon-cliente-cinza.svg';
import iconFiltroRosa from '../../assets/icon-filtro-rosa.svg';
import iconLupa from '../../assets/icon-lupa.svg';
import Header from '../../components/Header/Header';
import Menu from '../../components/menu/Menu';
import ModalAddCliente from '../../components/ModalAddCliente/ModalAddCliente';
import TabelaClientes from '../../components/TabelaClientes/TabelaClientes';
import useGlobal from '../../hooks/useGlobal';
import './clients.css';

function Clients() {
    const { abrirModalAddCliente, setAbrirModalAddCliente } = useGlobal()
    return (
        <main>
            <Header titulo='Clientes' classname='cliente-header' />
            <Menu />

            <div className='container-clientes'>

                <section className='clientes-section-superior'>
                    <div className="titulo-section-superior">
                        <img src={iconClienteCinza} alt="" />
                        <p>Clientes</p>
                    </div>

                    <div className='funcionalidades'>
                        <button className='btn-adicionar-clientes' onClick={() => setAbrirModalAddCliente(true)}>+ Adicionar cliente</button>
                        <img className='btn-filtros-clientes' src={iconFiltroRosa} alt="Filtros" />
                        <div className='pesquisa-clientes'>
                            <input type="text" placeholder='Pesquisa' />
                            <img src={iconLupa} alt="" />
                        </div>
                    </div>
                </section>

                <TabelaClientes />
                {abrirModalAddCliente && <ModalAddCliente />}

            </div>
        </main>
    );
}

export default Clients;
