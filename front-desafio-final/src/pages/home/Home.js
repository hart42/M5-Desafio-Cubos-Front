import './home.css';
import Menu from '../../components/menu/Menu'
import Header from '../../components/Header/Header'


function Home() {
    return (
        <main>
            <Header titulo='Resumo das cobranças' classname='home-header' />
            <Menu />
            <div className="conteudo">
                Ola
            </div>
        </main>
    );
}

export default Home;
