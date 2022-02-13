import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const [nomeEmail, setNomeEmail] = useState(
    'nomeEmail',
    { nome: '', email: '' }
  );
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false);
  const [abrirModalEditCliente, setAbrirModalEditCliente] = useState(false);
  const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] = useState(false);
  const [idCliente, setIdCliente] = useState();


  return {
    token,
    setToken,
    removeToken,
    abrirModalAddCliente,
    abrirModalEditCliente,
    setAbrirModalAddCliente,
    setAbrirModalEditCliente,
    abrirModalFeedbackAddCliente,
    setAbrirModalFeedbackAddCliente,
    nomeEmail,
    setNomeEmail,
    usuarioLogado,
    setUsuarioLogado,
    idCliente,
    setIdCliente
  };
}

export default useGlobalProvider;
