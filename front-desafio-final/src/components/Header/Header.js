import './Header.css';
import { useState } from 'react';
import iconSetaBaixoVerde from '../../assets/icon-seta-baixo-verde.svg';
import iconEditar from '../../assets/icon-editar.svg';
import iconSair from '../../assets/icon-sair.svg';
import EditaUsuario from '../EditaUsuario/EditaUsuario';

function Header({ titulo, classname }) {
    const [abrirOpcoesPerfil, setAbrirOpcoesPerfil] = useState(false);
    const [editaUsuario, setEditaUsuario] = useState(false);


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
                    <img src={iconEditar} alt='' className='icon-modal-opcoes' 
                    onClick={() => setEditaUsuario(true)}
                    />
                    <p>Editar</p>
                </div>
                <div>
                    <img src={iconSair} alt='' />
                    <p>Sair</p>
                </div>
            </div>
            {editaUsuario && 
            <EditaUsuario
            setEditaUsuario={setEditaUsuario} 
            />}
        </div>
    );
}

export default Header;