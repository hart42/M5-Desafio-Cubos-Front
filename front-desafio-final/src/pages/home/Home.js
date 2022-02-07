import './home.css';
import Menu from '../../components/menu/Menu'
import Header from '../../components/Header/Header'
import Totais from '../../components/Home/Totais/Totais';
import Cobrancas from '../../components/Home/Cobrancas/Cobrancas';
import ClientesHome from '../../components/Home/StatusClientes/StatusClientes';
import cobrancaPaga from '../../assets/home/cobrancaPaga.svg';
import cobrancaPrevista from '../../assets/home/cobrancaPrevista.svg';
import cobrancaVencida from '../../assets/home/cobrancaVencida.svg';
import clienteInadimplente from '../../assets/home/clientesInadimplentes.svg';
import clientesEmDia from '../../assets/home/clienteEmDia.svg'
import Layout from '../../components/Layout/Layout';




function Home() {
    return (
        <main>
            <Header titulo='Resumo das cobranças' classname='home-header' />
            <Menu />
            <div className="conteudo">
                <div className="topo">
                    <Totais 
                    valor={30000}
                    titulo={'Cobranças Pagas'}
                    cor={'#EEF6F6'}
                    icone={cobrancaPaga}
                    />
                    <Totais 
                    valor={7000}
                    titulo={'Cobranças Vencidas'}
                    cor={'#FFEFEF'}
                    icone={cobrancaVencida}
                    />
                    <Totais 
                    valor={10000}
                    titulo={'Cobranças Previstas'}
                    cor={'#FCF6DC'}
                    icone={cobrancaPrevista}
                    />
                </div>
                <div className="cobrancas">
                    <Cobrancas
                    titulo={'Cobranças Pagas'}
                    />
                    <Cobrancas
                    titulo={'Cobranças Vencidas'}
                    />
                    <Cobrancas
                    titulo={'Cobranças Previstas'}
                    />
                </div>
                <div className="resumo-clientes">
                    <ClientesHome
                    titulo={'Clientes Inadimplentes'}
                    icone={clienteInadimplente}
                    />
                    <ClientesHome
                    titulo={'Clientes em Dia'}
                    icone={clientesEmDia}
                    />
                </div>
            </div>
        </main>
    );
}

export default Home;
