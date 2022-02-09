import { useState } from 'react';

function useGlobalProvider() {
    const [token, setToken] = useState(null);
    const [clientes, setClientes] = useState([])
    const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false)
    const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] = useState(false)


    async function handleAdicionarCliente(body) {
        console.log(body)

        try {
            const response = await fetch('https://desafio-modulo-5.herokuapp.com/clientes', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQ0MzQ1MjU4LCJleHAiOjE2NDQzNzQwNTh9.KP5zOfazwIx2ZFbk5Vua0x1BmkuB2nLvpe-pcDqRGxQ`
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
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQ0MzQ1MjU4LCJleHAiOjE2NDQzNzQwNTh9.KP5zOfazwIx2ZFbk5Vua0x1BmkuB2nLvpe-pcDqRGxQ`
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
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQ0MzQ1MjU4LCJleHAiOjE2NDQzNzQwNTh9.KP5zOfazwIx2ZFbk5Vua0x1BmkuB2nLvpe-pcDqRGxQ`
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
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQ0MzQ1MjU4LCJleHAiOjE2NDQzNzQwNTh9.KP5zOfazwIx2ZFbk5Vua0x1BmkuB2nLvpe-pcDqRGxQ`
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
        setToken,
        abrirModalAddCliente,
        setAbrirModalAddCliente,
        abrirModalFeedbackAddCliente,
        setAbrirModalFeedbackAddCliente,
        handleObeterUsuario,
        handleEditarUsuario,
    }
}

export default useGlobalProvider;