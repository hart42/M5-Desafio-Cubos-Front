import { useState } from 'react';
import './editaUsuario.css';
import useGlobal from '../../hooks/useGlobal';
import mostraSenha from '../../assets/header/mostraSenha.svg';
import naoMostraSenha from '../../assets/header/naoMostraSenha.svg';




export default function EditaUsuario({setEditaUsuario, setAbrirOpcoesPerfil, usuario}) {

    const { handleEditarUsuario } = useGlobal()
    const [usuarioLogado, setUsuarioLogado] = useState(usuario);
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostraSenhaInput, setMostraSenhaInput] = useState(false);

    function handleAplicar() {
        if(novaSenha !== confirmaSenha) {
            return console.log('As senhas precisam ser iguais em ambos os campos!')
        }

        const senhaEnviada = novaSenha.trim() !== '' && novaSenha;

        const body = {
            nome: usuarioLogado.nome,
            email: usuarioLogado.email,
            senha: senhaEnviada,
            cpf: usuarioLogado.cpf,
            telefone: usuarioLogado.telefone
        }

        console.log(usuarioLogado);

        handleEditarUsuario(body);
        setAbrirOpcoesPerfil(false);
        setEditaUsuario(false);
    }

    return (
        <div className="modal-edita-usuario">
            <div className="card-edita-usuario">
                <div className="topo-edita-usuario">
                    <span>Edite seu cadastro</span>
                </div>
                <div className="formulario-edita-usuario">
                    <label htmlFor="nome">
                        <span>Nome*</span>
                        <input type="text" id='nome' placeholder='Digite seu nome'
                        value={usuarioLogado.nome}
                        onChange={(e) => setUsuarioLogado({...usuarioLogado, nome: e.target.value})}/>
                    </label>
                    <label htmlFor="email">
                        <span>E-mail*</span>
                        <input type="email" name="email" id="email" placeholder='Digite seu e-mail'
                        value={usuarioLogado.email}
                        onChange={(e) => setUsuarioLogado({...usuarioLogado, email: e.target.value})}/>
                    </label>
                    <div className="cpf-telefone">
                        <label htmlFor="cpf">
                            CPF*
                            <input type="number" name='cpf' placeholder='Digite seu CPF'
                            value={usuarioLogado.cpf}
                            onChange={(e) => {
                                setUsuarioLogado({...usuarioLogado, cpf: e.target.value});
                            }}/>
                        </label>
                        <label htmlFor="telefone">
                            Telefone*
                            <input type="number" name='telefone'
                            placeholder='Digite seu telefone'
                            value={usuarioLogado.telefone}
                            onChange={(e) => setUsuarioLogado({...usuarioLogado, telefone: e.target.value})}/>
                        </label>
                    </div>
                    <label htmlFor="nova-senha">
                        <span>Nova Senha</span>
                        <input type={!mostraSenhaInput ? ("password") : ("text")} name="nova-senha" id="nova-senha" placeholder='Digite uma nova senha'
                        onChange={(e) => setNovaSenha(e.target.value)}/>
                        { mostraSenhaInput ? (<img className='icone-senha-edita' src={mostraSenha} alt="" 
                        onClick={() => setMostraSenhaInput(false)}/>
                        ) :
                        (<img className='icone-senha-edita' src={naoMostraSenha} alt="" 
                        onClick={() => setMostraSenhaInput(true)}/>)}
                    </label>
                    <label htmlFor="confirma-senha">
                        <span>Confirmar Senha</span>
                        <input type={!mostraSenhaInput ? ("password") : ("text")} name="confirma-senha" id="confirma-senha" placeholder='Confirme sua nova senha'
                        onChange={(e) => setConfirmaSenha(e.target.value)}/>
                        { mostraSenhaInput ? (<img className='icone-senha-edita' src={mostraSenha} alt="" 
                        onClick={() => setMostraSenhaInput(false)}/>
                        ) :
                        (<img className='icone-senha-edita' src={naoMostraSenha} alt="" 
                        onClick={() => setMostraSenhaInput(true)}/>)}
                    </label>
                </div>
                <div className="final-edita-usuario">
                    <button onClick={handleAplicar}>Aplicar</button>
                </div>
            </div>
        </div>
    )
}