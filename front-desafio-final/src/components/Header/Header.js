import './Header.css';
import { useState } from 'react';
import iconSetaBaixoVerde from '../../assets/icon-seta-baixo-verde.svg'
import iconEditar from '../../assets/icon-editar.svg'
import iconSair from '../../assets/icon-sair.svg'

function Header({ titulo, classname }) {
    const [abrirOpcoesPerfil, setAbrirOpcoesPerfil] = useState(false)

    return (
        <div className='header'>
            <div className={'header-titulo ' + classname}>
                <p>{titulo}</p>
            </div>

            <div className='user-header'>
                <div className='user-image'>LR</div>
                <p className='user-nome'>Lorena</p>
                <img src={iconSetaBaixoVerde} className='icon-seta-header' alt='' onClick={() =>
                    abrirOpcoesPerfil ? setAbrirOpcoesPerfil(false) : setAbrirOpcoesPerfil(true)} />
            </div>

            <div className={abrirOpcoesPerfil ? 'modal-opcoes-perfil' : 'modal-none'} >
                <div>
                    <img src={iconEditar} alt='' className='icon-modal-opcoes' />
                    <p>Editar</p>
                </div>
                <div>
                    <img src={iconSair} alt='' />
                    <p>Sair</p>
                </div>
            </div>
        </div>
    );
}

export default Header;