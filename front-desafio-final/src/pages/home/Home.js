import './home.css';
import Menu from '../../components/menu/Menu'
import Header from '../../components/Header/Header'
import Totais from '../../components/Home/Totais/Totais';
import cobrancaPaga from '../../assets/home/cobrancaPaga.svg';
import cobrancaPrevista from '../../assets/home/cobrancaPrevista.svg';
import cobrancaVencida from '../../assets/home/cobrancaVencida.svg';

function Home() {
    return (
        <main>
            <Header titulo='Resumo das cobranças' classname='home-header' />
            <Menu />
            <div className="conteudo">
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
        </main>
    );
}

export default Home;
