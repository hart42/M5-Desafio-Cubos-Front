import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {
    const [clientes, setClientes] = useState([])
    const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false)
    const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] = useState(false)
    const [token, setToken, removeToken] = useLocalStorage('token', '')


    async function handleAdicionarCliente(body) {

        try {
            const response = await fetch('https://desafio-modulo-5.herokuapp.com/clientes', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
            })

            const data = await response.json()
            console.log(data)
            handleCarregarClientes()
        } catch (error) {
            console.log(error)
        }
    }

    async function handleCarregarClientes() {
        try {

            const response = await fetch('https://desafio-modulo-5.herokuapp.com/clientes', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()

            setClientes(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleObeterUsuario() {
        try {
            const response = await fetch('https://desafio-modulo-5.herokuapp.com/perfil', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()

            return data;

        } catch (error) {
            console.log(error)
        }
    }

    async function handleEditarUsuario(body) {
        try {
            const response = await fetch('https://desafio-modulo-5.herokuapp.com/perfil', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });
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
    }
}

export default useGlobalProvider;