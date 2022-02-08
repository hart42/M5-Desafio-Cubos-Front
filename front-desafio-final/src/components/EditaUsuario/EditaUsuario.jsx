import './editaUsuario.css';

export default function EditaUsuario({setEditaUsuario}) {
    return (
        <div className="modal-edita-usuario">
            <div className="card-edita-usuario">
                <div className="topo-edita-usuario">
                    <span>Edite seu cadastro</span>
                </div>
                <div className="formulario-edita-usuario">
                    <label htmlFor="nome">
                        <span>Nome*</span>
                        <input type="text" id='nome'/>
                    </label>
                    <label htmlFor="email">
                        <span>E-mail*</span>
                        <input type="email" name="email" id="email" />
                    </label>
                    <div className="cpf-telefone">
                        <label htmlFor="cpf">
                            CPF*
                            <input type="number" name='cpf'/>
                        </label>
                        <label htmlFor="telefone">
                            Telefone*
                            <input type="number" name='telefone'/>
                        </label>
                    </div>
                    <label htmlFor="nova-senha">
                        <span>Nova Senha</span>
                        <input type="password" name="nova-senha" id="nova-senha" />
                    </label>
                    <label htmlFor="confirma-senha">
                        <span>Confirmar Senha</span>
                        <input type="password" name="confirma-senha" id="confirma-senha" />
                    </label>
                </div>
                <div className="final-edita-usuario">
                    <button onClick={() => setEditaUsuario(false)}>Aplicar</button>
                </div>
            </div>
        </div>
    )
}