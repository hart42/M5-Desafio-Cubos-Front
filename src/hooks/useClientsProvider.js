import { useEffect, useState } from 'react';
import useRequests from './useRequests';
import useGlobal from './useGlobal';

function useClientsProvider() {
    const requisicao = useRequests();
    const [clientes, setClientes] = useState([]);
    const { token } = useGlobal();

    useEffect(() => {
        if (token) {
            carregarClientes();
        }
    }, []);

    async function carregarClientes() {
        const result = await requisicao.get('clientes');
        setClientes(result);
    }

    return {
        clientes,
        carregarClientes
    }
}

export default useClientsProvider;