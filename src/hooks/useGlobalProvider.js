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
  const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] =
    useState(false);


  return {
    token,
    setToken,
    removeToken,
    abrirModalAddCliente,
    setAbrirModalAddCliente,
    abrirModalFeedbackAddCliente,
    setAbrirModalFeedbackAddCliente,
    nomeEmail,
    setNomeEmail,
    usuarioLogado,
    setUsuarioLogado
  };
}

export default useGlobalProvider;
