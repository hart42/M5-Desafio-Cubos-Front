import Header from '../Header/Header';
import Menu from '../menu/Menu';

export default function Layout(props) {
    return (
        <div>
            <Header titulo={props.titulo} classname={props.classe} />
            <Menu />
            <div className="conteudoDaPagina">
                {props.children}
            </div>
        </div>  
    )
}