import './Header.css';
import { useState, useEffect } from 'react';
import useGlobal from '../../hooks/useGlobal';
import iconSetaBaixoVerde from '../../assets/icon-seta-baixo-verde.svg';
import iconEditar from '../../assets/icon-editar.svg';
import iconSair from '../../assets/icon-sair.svg';
import EditaUsuario from '../EditaUsuario/EditaUsuario';


function Header({ titulo, classname }) {

    const [usuarioLogado, setUsuarioLogado] = useState();
    const { handleObeterUsuario } = useGlobal()
    const [abrirOpcoesPerfil, setAbrirOpcoesPerfil] = useState(false);
    const [editaUsuario, setEditaUsuario] = useState(false);

    async function usuarioFecth() {
        const usuarioDoFetch = await handleObeterUsuario()
        setUsuarioLogado(usuarioDoFetch);
    }

    useEffect(() => {
        usuarioFecth()
    },[])


    return (
        <div className='header'>
            <div className={'header-titulo ' + classname}>
                <p>{titulo}</p>
            </div>

            <div className='user-header'>
                <div className='user-image'>LR</div>
                <p className='user-nome'>{usuarioLogado ? usuarioLogado.nome : 'Usuário'}</p>
                <img src={iconSetaBaixoVerde} className='icon-seta-header' alt='' onClick={() =>
                    abrirOpcoesPerfil ? setAbrirOpcoesPerfil(false) : setAbrirOpcoesPerfil(true)} />
            </div>

            <div className={abrirOpcoesPerfil ? 'modal-opcoes-perfil' : 'modal-none'} >
                <div onClick={() => setEditaUsuario(true)}>
                    <img src={iconEditar} alt='' className='icon-modal-opcoes' 
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
            setAbrirOpcoesPerfil={setAbrirOpcoesPerfil}
            usuario={usuarioLogado} 
            usuarioFecth={usuarioFecth}
            setUsuarioLogado={setUsuarioLogado}
            />}
        </div>
    );
}

export default Header;