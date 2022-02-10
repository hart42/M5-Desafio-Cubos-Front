import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {
  const [clientes, setClientes] = useState([]);
  const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false);
  const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] =
    useState(false);
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const [nomeEmail, setNomeEmail] = useLocalStorage(
    'nomeEmail',
    { nome: '', email: '' }
  );

  async function handleAdicionarCliente(body) {
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/clientes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
        }
      );

      if (response.status === 201) {
        handleCarregarClientes();
      }

      return response
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCarregarClientes() {
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/clientes',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.json();

      setClientes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleObeterUsuario() {
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/perfil',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditarUsuario(body) {
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/perfil',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
        }
      );

      return response
    } catch (error) {
      console.log(error);
    }
  }

  return {
    handleAdicionarCliente,
    handleCarregarClientes,
    clientes,
    token,
    setToken,
    removeToken,
    abrirModalAddCliente,
    setAbrirModalAddCliente,
    abrirModalFeedbackAddCliente,
    setAbrirModalFeedbackAddCliente,
    handleObeterUsuario,
    handleEditarUsuario,
    nomeEmail,
    setNomeEmail
  };
}

export default useGlobalProvider;
